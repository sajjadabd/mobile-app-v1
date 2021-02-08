import React from 'react'
import MainApp from './MainApp';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import ThemeReducer from './redux/ThemeReducer';
import UserReducer from './redux/UserReducer';
import BranchReducer from './redux/BranchReducer';
import SavedReducer from './redux/SavedReducer';

const rootReducer = combineReducers({ 
  ThemeReducer ,
  BranchReducer ,
  UserReducer ,
  SavedReducer
 });

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
