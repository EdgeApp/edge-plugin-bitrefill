// @flow
import Typography from '@material-ui/core/Typography'
import React from 'react'

type Props = {
  classes: Object,
  text: string
}
const StartParagraph = (props: Props) => {
  return (
    <Typography component="p" className={props.classes.p}>
      {props.text}
    </Typography>
  )
}

export { StartParagraph }
