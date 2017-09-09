import { combineReducers } from 'redux'

import loginlogout from './loginlogout'
import getItems from './getItems'
import getItem from './getItem'

export default combineReducers({
  loginlogout,
  getItems,
  getItem,
})