// @flow
import { core } from 'edge-libplugin'
import uuidv1 from 'uuid/v1'

import * as API from '../api'

const buildObject = async (res: Object, wallet: Object | null) => {
  if (!res.quote_id) {
    throw new Error('Invalid response')
  }
  if (!wallet) {
    throw new Error('Invalid response')
  }
  let address = null
  if (!API.DEV) {
    const addressData = await core.getAddress(wallet.id, wallet.currencyCode)
    if (wallet.currencyCode === 'BCH') {
      address = addressData.address.publicAddress
    } else {
      address = addressData.address.legacyAddress
      if (!address) {
        address = addressData.address.publicAddress
      }
    }
  } else {
    address = '1fakejPwRxWKiSgMBUewqMCws7DLuzAHQ'
  }
  const quote = {
    version: API.API_VERSION,
    partner: API.PROVIDER,
    payment_flow_type: 'wallet',
    return_url: API.RETURN_URL,
    quote_id: res.quote_id,
    wallet_id: res.wallet_id,
    payment_id: uuidv1(),
    order_id: res.quote_id,
    user_id: res.user_id,
    address: address,
    currency: res.digital_money.currency,
    fiat_total_amount_amount: res.fiat_money.total_amount,
    fiat_total_amount_currency: res.fiat_money.currency,
    fee: res.fiat_money.total_amount - res.fiat_money.base_amount,
    fiat_amount: res.fiat_money.base_amount,
    digital_amount: res.digital_money.amount,
    digital_currency: res.digital_money.currency
  }
  const rate = {
    currency: res.digital_money.currency,
    rate: quote.fiat_amount / quote.digital_amount
  }
  return { quote, rate }
}

export { buildObject }
