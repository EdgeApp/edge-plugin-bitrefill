// @flow
import Button from '@material-ui/core/Button'
import React from 'react'

type Props = {
  color: string,
  onClick(): void,
  text: string,
  disabled?: boolean
}
const EdgeButton = (props: Props) => {
  return (
    <Button
      variant="raised"
      color={props.color || 'default'}
      onClick={props.onClick}
      disabled={props.disabled}
      style={{
        textTransform: 'none',
        padding: '15px 0',
        margin: '5px 0'
      }}
      fullWidth
    >
      {props.text}
    </Button>
  )
}

const buttonStyle = {
  textTransform: 'none',
  padding: '15px 0',
  margin: '5px 0',
  borderRadius: '5px'
}

type WalletButtonProps = {
  textColor?: string,
  backgroundColor?: string,
  onClick: () => void,
  children: mixed,
  disabled?: boolean
}

const WalletButton = (props: WalletButtonProps) => {
  return (
    <Button
      variant="raised"
      onClick={props.onClick}
      disabled={props.disabled}
      style={{
        ...buttonStyle,
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        margin: '0',
        borderRadius: '0',
        borderTop: '1px solid #d8d6d8'
      }}
      fullWidth
    >
      {props.children}
    </Button>
  )
}

export { EdgeButton, WalletButton }
