// @flow
import Typography from '@material-ui/core/Typography'
import React from 'react'

type Props = {
  classes: Object,
  text: string
}
const StartHeader = (props: Props) => {
  return (
    <Typography variant="headline" component="h3" className={props.classes.h3}>
      {props.text}
    </Typography>
  )
}

export { StartHeader }
