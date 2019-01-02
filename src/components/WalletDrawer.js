// @flow
import Drawer from '@material-ui/core/Drawer'
import React, { Component } from 'react'

import { EdgeButton } from './index.js'

type Props = {
  open: boolean,
  selectWallet(Object): void,
  onHeaderClick(): void,
  onClose(): void,
  wallets: Array<Object>
}

class WalletDrawer extends Component<Props> {
  renderWallet = (wallet: Object) => {
    return (
      <EdgeButton
        color={'primary'}
        key={wallet.id}
        onClick={() => this.props.selectWallet(wallet)}
        text={wallet.name + '(' + wallet.currencyCode + ')'}
      />
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
          <EdgeButton
            color="primary"
            onClick={this.props.onHeaderClick}
            text={'Choose Destination Wallet'}
          />
          {this.renderWallets()}
        </div>
      </Drawer>
    )
  }
}
export { WalletDrawer }
