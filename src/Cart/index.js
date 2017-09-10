import React, { Component } from 'react'
import CartItem from './CartItem.jsx'
import { connect } from 'react-redux'
import { Loading } from '../style'

class Cart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { items } = this.props
    return (
      <div>
        {
          items.length ? items.map((v, i) =>
            <CartItem key={i}
              productId={v.productId}
              title={v.title}
              count={v.count}
              total={v.count * v.cost} />
          
          ) : <Loading>No items</Loading>
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
  })
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)