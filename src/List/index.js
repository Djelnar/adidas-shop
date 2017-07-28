import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card.jsx'
import { get , imageLink } from './../Api'
import { Row, Col, SearchBar } from './style'
import { Loading } from './../style'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
       products: [],
       isFetching: true,
       searchValue: '' 
    }
  }
  componentDidMount() {
    this.fetchData(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.setState({isFetching: true})
    this.fetchData(nextProps)
  }
  fetchData(props) {
    const { group, type } = props.match.params
    get(`v1/products/${group}/${type}`)
      .then(data => this.setState({
        products: data.items,
        isFetching: false
      }))
  }
  handleSearch = e => {
    this.setState({
      searchValue: e.target.value
    })
  }
  render() {
    const partPath = this.props.match.url
    const { isFetching, products, searchValue } = this.state
    return (
      <div>
        <SearchBar onChange={this.handleSearch} value={searchValue} />
        {isFetching ? <Loading>Loading...</Loading> : 
        <Row>
          {products.filter((v)=>{return v.title.toLowerCase().indexOf(searchValue.toLowerCase()) != (-1) }).map((el, idx) => {
            const { title, id, price } = el
            const priceStr = price.toString(10)
            const newPrice = priceStr.slice(0, -2) + '.' + priceStr.slice(-2) 
            const pic = imageLink(el.images[0].id, el.images[0].fileName, 512)
            return(
              <Col key={idx} >
                <Card to={`${partPath}/${id}`} title={title} pic={pic} price={newPrice} />
              </Col>
            )
          })}
        </Row>}
      </div>
    )
  }
}