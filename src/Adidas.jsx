import React, { Component } from 'react'
import logo from './img/logo.svg'
import Nav from './Sidebar'
import List from './List'
import Show from './Show'
import CartLabel from './Sidebar/CartLabel.jsx'
import { Wrapper, Aside, Main, Logo } from './style'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { groups } from './Api'


export default class Adidas extends Component {
  state = {  }
  render() {
    return (
        <Router>
          <Wrapper>
            <Aside>
              <Logo href="#">
                <img src={logo} alt="adidas"/>            
              </Logo>
              <CartLabel />
              <Nav groups={groups} />
            </Aside>
            <Main>
              <Switch>
                <Route exact path="/products/:group/:type" component={List} />
                <Route path="/products/:group/:type/:id" component={Show} /> 
                <Redirect from="/" to="/products/football/cleats" />
              </Switch>
            </Main>
          </Wrapper>
        </Router>
    )
  }
}