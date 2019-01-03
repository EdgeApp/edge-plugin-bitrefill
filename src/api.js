// @flow
// import { core } from 'edge-libplugin'
// import React from 'react'
// import uuidv1 from 'uuid/v1'

// import { cancelableFetch } from './utils/index'

export const PROVIDER = 'edge'
export const API_VERSION = '1'
export const BITREFILL_URL = 'https://www.bitrefill.com/'
export const API_KEY = 'APIKEYforEdge'
export const CALLBACK_KEY = 'edge'
export const RETURN_URL = null
export const LIMITS = {
  USD: {
    min: 50,
    daily: 18800,
    monthly: 47000
  },
  EUR: {
    min: 50,
    daily: 16972,
    monthly: 42431
  }
}

export const SUPPORTED_DIGITAL_CURRENCIES = [
  'BTC',
  'ETH',
  'LTC',
  'DASH',
  'DOGE'
]

export const formatUrlCall = (address: string, type: string) => {
  const route = type.replace('wallet:', 'buy/')
  return (
    BITREFILL_URL +
    route +
    '?apiKey=' +
    API_KEY +
    '&paymentUriProtocol=' +
    CALLBACK_KEY +
    '&refundAddress=' +
    address
  )
}
