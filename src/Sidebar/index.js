import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import NavItem from './NavItem.jsx'
import LoginForm from './LoginForm.jsx'
import LoginLabel from './LoginLabel.jsx'


const Sidebar = (props) => {
  const { isLogged, login, isError } = props

  return (
    <nav>
      <Helmet>
        <title>{isLogged ? `Shop | ${login}` : 'Shop'}</title>
      </Helmet>
      {isLogged ? <LoginLabel username={login} /> : <LoginForm error={isError} />}
      {props.groups.map(({ group, types }) => (
        <NavItem key={group} title={group} options={types} />
      ))}
    </nav>
  )
}

const mapStateToProps = (store) => ({
  isLogged: store.loginlogout.isLogged,
  isError: store.loginlogout.isError,
  login: store.loginlogout.login,
})

export default connect(mapStateToProps)(Sidebar)
