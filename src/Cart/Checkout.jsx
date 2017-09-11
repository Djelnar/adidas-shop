import React from 'react'
import { connect } from 'react-redux'
import { GreenButton, Red } from '../style'
import { Box } from './TimeChecker.jsx'
import Special from './Special.jsx'
import tryCheckout from '../actions/tryCheckout'
import Final from './Final.jsx'
const Checkout = props => {
  const { hour, canProceed, total, isSpecial, rest } = props
  return (
    !canProceed ? 
    <Box>
      {hour ?
      <GreenButton onClick={_ =>
            props.onTryCheckout({ total })}>Proceed to checkout</GreenButton> :
      <Red>Something is wrong</Red> }
    </Box> :
      (isSpecial?<Special rest={ rest } />  : <Final total={total} />)
  )
}
const mapStateToProps = store => ({
  hour: store.delivery.hour,
  canProceed: store.tryCheckout.canProceed,
  total: store.cart.addedIds.map((v, i) => {
    return v.cost * store.cart.quantityById[v.productId]
  }).reduce((a, v) => a + v, 0),
  isSpecial: store.tryCheckout.isSpecial,
  rest: store.tryCheckout.rest,
})

const mapDispatchToProps = dispatch => ({
  onTryCheckout: (s) => {
    dispatch(tryCheckout(s))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)