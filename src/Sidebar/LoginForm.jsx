import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import login from '../actions/login'
import { Spinner } from '../style'


const Form = styled.form`
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
    border-color: ${(props) => props.error ? '#f00' : '#fff'};
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
  submitLogin = (e) => {
    e.preventDefault()
    const loginValue = this.login.value
    const password = this.password.value
    const data = {
      login: loginValue,
      password,
    }

    this.props.dispatch(login(data))
    this.login.value = ''
    this.password.value = ''
  }

  render() {
    const { isAwaitLogin } = this.props

    return (
      <Form error={this.props.error} onSubmit={this.submitLogin}>
        <input
          type="text"
          placeholder="login (any)"
          ref={(n) => {
            this.login = n
          }}
          required="required"
        />
        <input
          type="password"
          placeholder="password (1234)"
          ref={(n) => {
            this.password = n
          }}
          required="required"
        />
        <button type="submit">Sign in</button>
        {isAwaitLogin ? <Spinner /> : null}
      </Form>
    )
  }
}

const mapStateToProps = (store) => ({
  isAwaitLogin: store.loginlogout.isAwaitLogin,
})

export default connect(mapStateToProps)(LoginForm)
