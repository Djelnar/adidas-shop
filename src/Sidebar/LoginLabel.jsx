import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { White, Center } from '../style'
import logout from '../actions/logout'
import { WhiteButton } from '../style'

const LoginLabel = props =>
  <div>
    <Center>
      <White>
        {props.username}
      </White>
    </Center>
    <WhiteButton onClick={_ => { props.onLogout() }} >Sign out</WhiteButton>
  </div>
const mapStateToProps = store => ({
  store
})

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginLabel)