import React from 'react'
import { connect } from 'react-redux'
import { White, Center, WhiteButton } from '../style'
import logout from '../actions/logout'


const LoginLabel = (props) => (
  <div>
    <Center>
      <White>
        {props.username}
      </White>
    </Center>
    <WhiteButton onClick={logout} >Sign out</WhiteButton>
  </div>
)

export default connect()(LoginLabel)
