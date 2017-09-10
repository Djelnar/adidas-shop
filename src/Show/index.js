import React, { Component } from 'react'
import styled from 'styled-components'
import Gallery from './Gallery.jsx'
import { get, imageLink } from './../Api'
import { connect } from 'react-redux'
import cartAdd from '../actions/cartAdd'
import getItem from '../actions/getItem'
import { Loading } from './../style'

const Item = styled.div`
  padding-bottom: 96px;
  font-family: 'Roboto', sans-serif;
  position: relative;
  & h1, & .price {
    font-size: 48px;
    font-weight: 500;
    color: #3a3a3a;
    position: absolute;
    top: 0;
  }

  & h1 {
    margin-left: 16px;
    max-width: 320px;
  }

  & .price {
    margin-right: 16px;
    right: 0;
  }

  & .desc {
    max-width: 640px;
    font-size: 24px;
    font-weight: 300;
    margin: 28px 0 0 16px;
    padding-bottom: 28px;
  }

  & .buybtn {
    width: 70%;
    padding: 32px 0;
    font-size: 32px;
    color: #fff;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    line-height: 1;
    background: linear-gradient(to right, #4949aa, #27275d);
    position: fixed;
    left: 30%;
    right: 0;
    bottom: 0;
    border: 0;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: linear-gradient(17deg, #966dd8, #0c09bf);
    }
  }
`

class Show extends Component {
  constructor(props) {
    super(props)
  }
  fetchData(props) {
    const { group, type, id } = props.match.params
    if (id !== this.props.match.params.id) {
      this.props.onFetchItem(group, type, id)
    }
  }
  componentDidMount() {
    this.fetchData(this.props)
    const { group, type, id } = this.props.match.params
    this.props.onFetchItem(group, type, id)
  }
  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps)
  }
  shouldComponentUpdate(np, ns) {
    return np.product.id !== this.props.product.id
  }
  renderItem() {
    const { title, price, currency, description } = this.props.product
    let newPrice = '000'
    if (price) {
      const priceStr = price.toString(10)
      newPrice = priceStr.slice(0, -2) + '.' + priceStr.slice(-2)
    }
    const { group, type, id } = this.props.match.params
    return (
      <Item>
        <Gallery images={this.props.images} />
        <h1>{title}</h1>
        <p className="price" >{newPrice} {currency}</p>
        <p className="desc" >{description}</p>
        <button
        onClick={_ =>
        this.props.onAdd(`/products/${group}/${type}/${id}`, title, newPrice)}
        className="buybtn">add to cart</button>
      </Item>
    )
  }
  render() {
    const { isFetching, isError } = this.props
    return (
      <div>
        {(isError || isFetching) ?
        <Loading>Loading...</Loading> :
        this.renderItem() }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  isFetching: store.getItem.isFetching,
  isError: store.getItem.isError,
  product: store.getItem.product,
  images: store.getItem.images,
})

const mapDispatchToProps = dispatch => ({
  onFetchItem: (group, type, id) => {
    dispatch(getItem(group, type, id))
  },
  onAdd: (productId, title, cost) => {
    dispatch(cartAdd(productId, title, cost))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Show)