// @flow
import './inline.css'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { core, ui } from 'edge-libplugin'
import React, { Component } from 'react'

// import { EdgeButton, SupportLink } from './components'
import * as API from './api'
import {
  EdgeButton,
  StartHeader,
  StartParagraph,
  SupportLink,
  WalletDrawer
} from './components/index.js'
import { StartStyles } from './styles/StartStyles'

// import { buildObject } from './utils/index.js'

type Props = {
  history: Object,
  classes: Object
}
type State = {
  dialogOpen: boolean,
  drawerOpen: boolean,
  wallets: Array<Object>,
  selectedWallet: Object | null
}
class StartScene extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      dialogOpen: false,
      drawerOpen: false,
      wallets: [],
      selectedWallet: null
    }
  }
  UNSAFE_componentWillMount () {
    console.log('BRF: Mounted I will ')
    ui.title('Buy Gift Cards with Bitrefill 2')
    if (this.state.wallets.length > 0) {
      this.selectWallet(this.state.wallets[0])
    }
    this.loadWallets()
  }
  loadWallets = () => {
    core
      .wallets()
      .then(data => {
        this.setState(
          {
            wallets: data.filter(
              wallet =>
                API.SUPPORTED_DIGITAL_CURRENCIES.indexOf(wallet.currencyCode) >=
                0
            )
          },
          () => {
            if (this.state.wallets.length > 0) {
              let i = 0
              const lastWallet = window.localStorage.getItem(
                'bitrefill-last_wallet'
              )
              if (lastWallet) {
                for (i; i < this.state.wallets.length; ++i) {
                  if (this.state.wallets[i].id === lastWallet) {
                    this.selectWallet(this.state.wallets[i])
                    break
                  }
                }
                if (i >= this.state.wallets.length) {
                  i = 0
                }
              }
            } else {
              ui.showAlert(
                false,
                'Error',
                'No Wallets for supported currencies.'
              )
              ui.exit()
            }
          }
        )
      })
      .catch(() => {
        ui.showAlert(
          false,
          'Error',
          'Unable to fetch wallets. Please try again later.'
        )
        ui.exit()
      })
  }

  buyCards = () => {
    if (!this.state.selectedWallet) return
    core
      .getAddress(
        this.state.selectedWallet.id,
        this.state.selectedWallet.currencyCode
      )
      .then(data => {
        if (!this.state.selectedWallet) return
        const address = data.address.publicAddress
        const url = API.formatUrlCall(address, this.state.selectedWallet.type)
        window.open(url, '_self')
      })
  }

  openWallets = () => {
    this.setState({
      drawerOpen: true
    })
  }

  closeWallets = () => {
    this.setState({
      drawerOpen: false
    })
  }

  selectWallet = wallet => {
    if (!wallet || !wallet.id) {
      return
    }
    this.setState({
      drawerOpen: false,
      selectedWallet: wallet
    })
    window.localStorage.setItem('last_wallet', wallet.id)
  }

  render () {
    const classes = this.props.classes
    const isDisabled = this.state.selectedWallet || false
    return (
      <div className={classes.container}>
        <div className="text-center">
          <img src={'http://104.131.185.242/edge/bitrefillLong.png'} alt={''} />
        </div>
        <div>
          <StartHeader text="Birefill" classes={classes} />
          <StartParagraph
            classes={classes}
            text={
              'Buy dozens of gift cards and mobile phone topups with your favorite cryptocurrency. Bitrefill supports Bitcoin, Ethereum, Dash, and Litecoin'
            }
          />
        </div>
        <Divider className={classes.divider} />
        <div>
          <StartHeader
            text="Please choose a wallet to use for payment"
            classes={classes}
          />
          <Card className={classes.card}>
            <CardContent>
              <Typography
                variant="headline"
                component="h3"
                className={classes.h3}
              >
                Destination Wallet
                {this.state.selectedWallet && (
                  <span>: {this.state.selectedWallet.name}</span>
                )}
              </Typography>
              <EdgeButton
                color="primary"
                onClick={this.openWallets}
                text={
                  this.state.selectedWallet
                    ? 'Change Destination Wallet'
                    : 'Select Destination Wallet'
                }
              />
              <EdgeButton
                color="primary"
                onClick={this.buyCards}
                text={'Next'}
                disabled={!isDisabled}
              />
            </CardContent>
          </Card>
        </div>
        <Divider className={classes.divider} />
        <div>
          <StartHeader text="Support" classes={classes} />
          <Typography component="p" className={classes.p}>
            For support, please contact <SupportLink />
          </Typography>
        </div>
        <WalletDrawer
          open={this.state.drawerOpen}
          selectWallet={this.selectWallet}
          onHeaderClick={this.closeWallets}
          onClose={this.closeWallets}
          wallets={this.state.wallets}
        />
      </div>
    )
  }
}
export default withStyles(StartStyles)(StartScene)
