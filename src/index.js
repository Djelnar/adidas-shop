import React from 'react'
import { render } from 'react-dom'
import Adidas from './Adidas.jsx'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

render(
  <Provider store={store} >
    <Adidas />
  </Provider>,  document.querySelector('#root')
)