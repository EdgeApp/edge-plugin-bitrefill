// @flow
export const PROVIDER = 'edge'
export const API_VERSION = '1'
export const BIT_REFILL_URL = 'https://www.bitrefill.com/'
export const CALLBACK_KEY = 'edge'
export const RETURN_URL = null
export const KEYS = {
  apiKey: ''
}

export const SUPPORTED_DIGITAL_CURRENCIES = [
  'BTC',
  'ETH',
  'LTC',
  'DASH',
  'DOGE'
]
// `https://www.bitrefill.com/embed/:coin?apiKey=&refundAddress=&paymentUriProtocol=edge
export const formatUrlCall = (address: string, type: string) => {
  const route = type.replace('wallet:', 'embed/')
  const url =
    BIT_REFILL_URL +
    route +
    '?apiKey=' +
    KEYS.apiKey +
    '&paymentUriProtocol=' +
    CALLBACK_KEY +
    '&refundAddress=' +
    address
  return url
}
