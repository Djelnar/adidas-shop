import React, { Component } from 'react'
import NavItem from './NavItem.jsx'
import LoginForm from './LoginForm.jsx'
import LoginLabel from './LoginLabel.jsx'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'


const Sidebar = (props) => {
  const { isLogged, login, isError } = props

  return (
    <nav>
      <Helmet>
        <title>{ isLogged ? `Shop | ${login}` : 'Shop' }</title>
      </Helmet>
      { isLogged ? <LoginLabel username={login} /> : <LoginForm error={isError} /> }
      {props.groups.map((el, idx) => (
        <NavItem key={idx} title={el.group} options={el.types} />
        ))}
    </nav>
  )
}

const mapStateToProps = (store) => ({
  isLogged: store.loginlogout.isLogged,
  isError: store.loginlogout.isError,
  login: store.loginlogout.login,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
