import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Adidas from './Adidas.jsx'
import reducer from './reducers'
/* global document */

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

render(
  (
    <Provider store={store} >
      <Adidas />
    </Provider>
  ), document.querySelector('#root'),
)
