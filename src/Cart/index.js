import React, { Component } from 'react'
import CartItem from './CartItem.jsx'
import TimeChecker from './TimeChecker.jsx'
import { connect } from 'react-redux'
import { Loading } from '../style'
import Checkout from './Checkout.jsx'
class Cart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { items, thanks } = this.props
    return (
      <div>
        {
          items.length ?
          <div>{items.map((v, i) =>
            <div key={i}>
              <CartItem
                productId={v.productId}
                title={v.title}
                count={v.count}
                total={v.count * v.cost} />
            </div>
          )}
          <TimeChecker />
          <Checkout />
          </div> : thanks ? 
          <Loading>Thanks!</Loading>:
          <Loading>No items</Loading>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.cart.addedIds.map((v, i) => {
    return {
      ...v,
      count: state.cart.quantityById[v.productId]
    }
  }),
  thanks: state.cart.thanks
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)