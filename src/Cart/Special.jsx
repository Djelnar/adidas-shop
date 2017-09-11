import React from 'react'
import { connect } from 'react-redux'
import { Box } from './TimeChecker.jsx'
import { White, GreenButton } from '../style'
import denySpecial from '../actions/denySpecial'

const Special = ({ rest, onDenySpecial}) =>
  <Box>
    <White>You have a special offer! If you order for ${rest} more, you will get a free delivery</White>
    <GreenButton
    onClick={_ => onDenySpecial()}
    >Ok, got it</GreenButton>
  </Box>

const mapStateToProps = store => ({
  isAwaitHours: store.delivery.isAwaitHours,
  isError: store.delivery.isError,
  hour: store.delivery.hour,
})

const mapDispatchToProps = dispatch => ({
  onDenySpecial: () => {
    dispatch(denySpecial())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Special)