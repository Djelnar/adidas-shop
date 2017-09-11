import React from 'react'
import { connect } from 'react-redux'
import checkHours from '../actions/checkHours'
import styled from 'styled-components'
import { Spinner, WhiteButton, White, Red, Green } from '../style'

export const Box = styled.div`
  margin: 0 20px 20px;
  padding: 20px;
  background-color: #000;
  border-radius: 20px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-stretch: condensed;
  font-size: 20px;
  max-width: 480px;
  overflow: hidden;
  position: relative;
`

const hours = [...Array(24).keys()]

const TimeChecker = props => {
  const { isAwaitHours, isError, hour } = props
  let select = null
  return (
    <Box>
      {isError ?
      <Red>Please choose another time to deliver(from 10:00 till 20:00):</Red> :
      <White>Time to deliver:</White>  }
      <select ref={n => select = n } >
        {hours.map(v => <option key={v} value={v} >About {v}:00</option>)}
      </select>
      <WhiteButton
        onClick={_ => props.onCheckHours({
          hour: select.value
        })}
      >Check if delivery is possible</WhiteButton>
      {hour ? <Green>Delivery is possible at about {hour}:00</Green> : null }
      {isAwaitHours ? <Spinner /> : null}
    </Box>
  )
}

const mapStateToProps = store => ({
  isAwaitHours: store.delivery.isAwaitHours,
  isError: store.delivery.isError,
  hour: store.delivery.hour,
})

const mapDispatchToProps = dispatch => ({
  onCheckHours: (h) => {
    dispatch(checkHours(h))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeChecker)