import React from 'react'
import MainApp from './MainApp';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import ThemeReducer from './redux/Reducers'

const rootReducer = combineReducers({ ThemeReducer });

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}

export default App
