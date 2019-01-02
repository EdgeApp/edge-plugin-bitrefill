// @flow

import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render(<App />, root)
}
