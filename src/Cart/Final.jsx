import React from 'react'
import { connect } from 'react-redux'
import {Box} from './TimeChecker.jsx'
import {White, GreenButton} from '../style'
import styled from 'styled-components'
import erase from '../actions/erase'


const Final = (props) => {
  const field = null
  const { hour } = props

  return (
    <Box>
      <White>Sum: ${props.total}</White>
      <White>Delivery: {props.total > 1000 ? 'Free' : '$100'}</White>
      <White>Total: ${props.total + (props.total > 1000 ? 0 : 100)}</White>
      {hour
      ? <GreenButton
        onClick={(_) => props.onErase()}
      >Finish Checkout
        </GreenButton>
      : <GreenButton disabled>Finish Checkout</GreenButton> }
    </Box>
  )
}


const mapStateToProps = (store) => ({
  hour: store.delivery.hour,
})

const mapDispatchToProps = (dispatch) => ({
  onErase: () => {
    dispatch(erase())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Final)
