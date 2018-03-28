import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import cartAdd from '../actions/cartAdd'
import cartDecrease from '../actions/cartDecrease'
import cartRemove from '../actions/cartRemove'
import { Link } from 'react-router-dom'


const Block = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: #000;
  margin: 20px;
  max-width: 480px;
  & .title {
    color: #fff;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-stretch: condensed;
  }
  & .ctrl {
    width: 24px;
  }
  & .ctrl, & .remove {
    padding: 4px;
    font-size: 16px;
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    font-stretch: normal;
    text-align: center;
    color: #fff;
    background-color: #000;
    margin: 4px;
    border: 1px solid #fff;
    transition: all .25s ease;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`

const CartItem = (props) => (<Block>
  <Link to={props.productId} >
    <p className="title">{props.title}, ${props.total}</p>
  </Link>
  <button
    className="ctrl"
    onClick={(_) => {
 props.onDecrease(props.productId)
}}
  >-
  </button>
  <span className="title">{props.count}</span>
  <button
    className="ctrl"
    onClick={(_) => {
 props.onAdd(props.productId, props.title, props.cost)
}}
  >+
  </button>
  <button
    className="remove"
    onClick={(_) => {
 props.onRemove(props.productId)
}}
  >remove
  </button>
</Block>)

const mapStateToProps = (state) => ({
  items: state.cart.addedIds.map((v, i) => ({
    ...v,
    count: state.cart.quantityById[v.productId],
  })),
})

const mapDispatchToProps = (dispatch) => ({
  onAdd: (productId, title, cost) => {
    dispatch(cartAdd(productId, title, cost))
  },
  onRemove: (productId, title, cost) => {
    dispatch(cartRemove(productId, title, cost))
  },
  onDecrease: (productId, title, cost) => {
    dispatch(cartDecrease(productId, title, cost))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
