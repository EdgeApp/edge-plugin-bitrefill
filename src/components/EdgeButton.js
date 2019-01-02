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

export { EdgeButton }
