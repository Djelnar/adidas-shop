import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { White } from '../style'


const WhiteHover = White.extend`
  text-decoration: none;
  text-align: center;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`

const CartLabel = (props) => (
  <div>
    <White>
      {props.count} items, ${props.total} in total
    </White>
    <Link
      to="/cart"
      style={{
        color: '#fff',
        textDecoration: 'none',
      }}
    >
      <WhiteHover>Cart</WhiteHover>
    </Link>
  </div>
)
const mapStateToProps = (state) => ({
  count: Object.values(state.cart.quantityById)
    .reduce((a, v) => a + (v || 0), 0),
  total: state.cart.addedIds.map((v) => (
    v.cost * state.cart.quantityById[v.productId]
  )).reduce((a, v) => a + v, 0),
})

export default connect(mapStateToProps)(CartLabel)
