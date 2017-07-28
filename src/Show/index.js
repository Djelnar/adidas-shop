import React, { Component } from 'react'
import styled from 'styled-components'
import Gallery from './Gallery.jsx'
import { get, imageLink } from './../Api'
import { connect } from 'react-redux'

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

export default class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {
        id: null
      },
      images: [],
      isFetching: true
    }
  }
  fetchData(props) {
    const { group, type, id } = props.match.params
    
    get(`v1/products/${group}/${type}/${id}`)
      .then(data => this.setState({
        product: data,
        images: data.images.map((el, idx) => {
          return imageLink(el.id, el.fileName, 160)
        }),
        isFetching: false
      }))
  }
  addToCart = e => {
    const payload = this.state.product.id
    // this.props.onAddToCart(payload)
  }
  componentDidMount() {
    this.fetchData(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({isFetching: true})
    this.fetchData(nextProps)
  }
  shouldComponentUpdate(np, ns) {
    return ns.product.id !== this.state.product.id
  }
  render() {
    const { title, price, currency, sizes, description } = this.state.product
    let newPrice = '000'
    if(price) {
      const priceStr = price.toString(10)
      newPrice = priceStr.slice(0, -2) + '.' + priceStr.slice(-2) 
    }
    return (
      <Item>
        <Gallery images={this.state.images} />
        <h1>{ title }</h1>
        <p className="price" >{ newPrice } { currency }</p>
        <p className="desc" >{ description }</p>
        <button onClick={this.addToCart} className="buybtn">add to cart</button>
      </Item>
    )
  }
}