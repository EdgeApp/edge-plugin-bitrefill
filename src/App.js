// @flow
import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import StartScene from './StartScene'
import { theme as t } from './styles/Theme'

/* export const routes = [{
  path: '/',
  main: StartScene,
  exact: true
}, {
  path: '/buy/',
  main: BuyScene,
  exact: true
}, {
  path: '/payments/',
  main: PaymentsScene,
  exact: true
}, {
  path: '/events/:paymentId/',
  main: EventsScene,
  exact: true
}] */
export const routes = [
  {
    path: '/',
    main: StartScene,
    exact: true
  }
]
// <Route path='/privacy-policy' component={() => { window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'; return null;} }/>
const theme = createMuiTheme(t)
const appStyles = theme => ({
  content: {
    height: '100%'
  }
})

type Props = {
  classes: Object
}
class App extends Component<Props> {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div className={this.props.classes.content}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}
export default withStyles(appStyles)(App)
