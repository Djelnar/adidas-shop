import React, { Component } from 'react'
import styled from 'styled-components'
import toggleImg from './../img/toggle.svg'
import { Link } from 'react-router-dom'

const StyledNavItem = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-size: 24px;
  font-stretch: condensed;
  margin-bottom: 54px;

  & .title {
    display: flex;
    width: 100%;
    flex-firection: row;
    align-items: center;
    cursor: pointer;
    margin-bottom: 36px;
    font-weight: 700;
    text-decoration: none;
    color: #fff;
  }

  & .option {
    display: block;
    color: #fff;
    text-decoration: none;
    margin-bottom: 25px;
    text-align: left;
    font-weight: 300;    
  }

  & .toggle {
    transition: transform .2s ease-in-out;
    margin-left: 16px;
  }
`



export default class NavItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }
  toggleActive = (e) => {
    e.preventDefault()
    this.setState({
      isActive: !this.state.isActive
    }) 
  }
  toggleActiveDefault = () => {
    this.setState({
      isActive: !this.state.isActive
    }) 
  }
  render() {
    return (
      <StyledNavItem>
        <a href="#" className="title" onClick={ this.toggleActive }>
          <p>{ this.props.title.toUpperCase() }</p>
          <img
            style={this.state.isActive ? {transform: 'rotate(180deg)'} : null}
            src={toggleImg} className="toggle" alt=""/>
        </a>
        {(this.state.isActive && this.props.options) ? 
          (<div className="options">
            {this.props.options.map((el, idx) => {
              return (
                <Link key={idx}
                      className="option"
                      onClick={ this.toggleActiveDefault }
                      to={ `/products/${this.props.title}/${el}` }>
                      {el.toUpperCase()}
                </Link>
              )
          })} 
          </div>) : null
        }
      </StyledNavItem>
    )
  }
}