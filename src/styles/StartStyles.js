// @flow

import { theme } from './Theme'
const StartStyles = {
  logo: {
    flex: 1,
    alignItems: 'center',
    justfiyContent: 'space-around'
  },
  card: {
    margin: '20px 0px',
    padding: '0px 10px'
  },
  container: {
    backgroundColor: '#FFF',
    padding: '20px'
  },
  conversion: {
    fontSize: '24pt',
    color: theme.palette.primary.main
  },
  h3: {
    color: theme.palette.primary.main,
    fontSize: '17pt',
    padding: '5px 0'
  },
  warning: {
    color: theme.palette.primary.error,
    padding: 10,
    margin: '10px 0',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  p: {
    fontSize: '14pt'
  },
  divider: {
    margin: '15px 0',
    height: '2px'
  },
  feeList: {
    listStyleType: '-'
  }
}
export { StartStyles }
