import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCard = styled.div`
  background-color: ${props => props.bgc || '#fff'};
  padding: 0 10px 10px;
  font-family: 'Roboto', sans-serif;
  font-stretch: condensed;
  & .title {
    font-size: 22px;
    font-weight: 700;
    padding: 16px 0;
  }
  & img {
    display: block;
    width: 100%;
    margin-bottom: 4px;
  }
`

const PriceLink = styled(Link)`
  background-color: #fff;
  width: 100%;
  font-size: 30px;
  font-weight: 700;
  padding: 20px 0;
  font-stretch: normal;
  color: #404040;
  display: block;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #f4f4f4;
  }
`

export default class Card extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyledCard bgc="#f4f4f4" >
        <h2 className="title" >{this.props.title}</h2>
        <img src={this.props.pic} alt=""/>
        <PriceLink to={this.props.to} >${this.props.price}</PriceLink>
      </StyledCard>
    )
  }
}

// background-color: ${props => props.bgc || '#fff'};