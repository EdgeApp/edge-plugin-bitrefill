// @flow
import Drawer from '@material-ui/core/Drawer'
import React, { Component } from 'react'

import { WalletButton } from './index.js'

type Props = {
  open: boolean,
  selectWallet(Object): void,
  onHeaderClick(): void,
  onClose(): void,
  wallets: Array<Object>
}

class WalletDrawer extends Component<Props> {
  renderWallet = (wallet: Object) => {
    console.log('kylan rendering wallet')
    return (
      <WalletButton
        color={'primary'}
        key={wallet.id}
        onClick={() => this.props.selectWallet(wallet)}
      >
        {wallet.name + '(' + wallet.currencyCode + ')'}
      </WalletButton>
    )
  }
  renderWallets = () => {
    return this.props.wallets.map(wallet => this.renderWallet(wallet))
  }
  render () {
    return (
      <Drawer
        anchor="bottom"
        variant="temporary"
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <div>
          <WalletButton color="primary" onClick={this.props.onHeaderClick}>
            <span style={{ fontWeight: 'bold' }}>Choose Wallet</span>
          </WalletButton>
          {this.renderWallets()}
        </div>
      </Drawer>
    )
  }
}
export { WalletDrawer }
