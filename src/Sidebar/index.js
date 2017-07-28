import React, { Component } from 'react'
import NavItem from './NavItem.jsx'


export default class Nav extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav>
        {this.props.groups.map((el, idx) => {
          return(
            <NavItem key={idx} title={el.group} options={el.types} />
          )
        })}
      </nav>
    )
  }
}