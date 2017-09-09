import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card.jsx'
import { get , imageLink } from './../Api'
import { Row, Col, SearchBar } from './style'
import { Loading } from './../style'
import { connect } from 'react-redux'
import getItems from '../actions/getItems'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    }
  }
  componentDidMount() {
    const { group, type } = this.props.match.params
    this.props.onFetchItems(group, type)
  }
  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps)
  }
  fetchData(props) {
    const { group, type } = props.match.params
    if (group !== this.props.match.params.group || type !== this.props.match.params.type) {
      this.props.onFetchItems(group, type)
    }
  }
  handleSearch = e => {
    this.setState({
      searchValue: e.target.value
    })
  }
  render() {
    const partPath = this.props.match.url
    const { isFetching, products, isError } = this.props
    const { searchValue } = this.state
    return (
      <div>
        <SearchBar onChange={this.handleSearch} value={searchValue} />
        {isFetching || isError ? <Loading>Loading...</Loading> : 
        <Row>
          {products.filter((v) => v.title
                                  .toLowerCase()
                                  .indexOf(searchValue.toLowerCase()) != (-1))
                                  .map((el, idx) => {
            const { title, id, price } = el
            const priceStr = price.toString(10)
            const newPrice = priceStr.slice(0, -2) + '.' + priceStr.slice(-2)
            const pic = imageLink(el.images[0].id, el.images[0].fileName, 512)
            return(
              <Col key={idx} >
                <Card
                  to={`${partPath}/${id}`}
                  title={title}
                  pic={pic}
                  price={newPrice} />
              </Col>
            )
          })}
        </Row>}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  isFetching: store.getItems.isFetching,
  isError: store.getItems.isError,
  products: store.getItems.products,
})

const mapDispatchToProps = dispatch => ({
  onFetchItems: (group, type) => {
    dispatch(getItems(group, type))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)