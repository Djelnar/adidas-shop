import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import login from '../actions/login'
import { Spinner } from '../style'
const Form = styled.form.attrs({
  onSubmit: props => props.onSubmit
})`
  position: relative;
  & * {
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-stretch: condensed;
  }
  & input, & button {
    display: block;
    width: 100%;
    border: 2px solid #fff;
    background-color: #000;
    color: #fff;
    margin-bottom: 16px;
    padding: 6px;
  }
  & input {
    border-color: ${props => props.error ? '#f00' : '#fff'};
  }
  & button {
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`

class LoginForm extends Component {
  constructor(props) {
    super(props)
  }
  submitLogin = (e) => {
    e.preventDefault()
    const login = this.login.value
    const password = this.password.value
    const data = {
      login,
      password
    }
    this.props.onLogin(data)
  }
  render() {
    const { isAwaitLogin } = this.props
    return (
      <Form error={this.props.error} onSubmit={this.submitLogin} >
        <input type="text" placeholder="login (any)" ref={n => this.login = n} />
        <input type="password" placeholder="password (1234)" ref={n => this.password = n} />
        <button type="submit">Sign in</button>
        { isAwaitLogin ? <Spinner /> : null }
      </Form>
    )
  }
}

const mapStateToProps = store => ({
  isAwaitLogin: store.loginlogout.isAwaitLogin,
})

const mapDispatchToProps = dispatch => ({
  onLogin: (data) => {
    dispatch(login(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)