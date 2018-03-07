import { combineReducers } from 'redux'

import loginlogout from './loginlogout'
import getItems from './getItems'
import getItem from './getItem'
import cart from './cart'
import delivery from './delivery'
import tryCheckout from './tryCheckout'


export default combineReducers({
  loginlogout,
  getItems,
  getItem,
  cart,
  delivery,
  tryCheckout,
})
