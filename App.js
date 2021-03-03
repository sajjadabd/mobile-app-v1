import React from 'react'
import MainApp from './MainApp';



import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';


import ThemeReducer from './redux/ThemeReducer';
import UserReducer from './redux/UserReducer';
import BranchReducer from './redux/BranchReducer';
import SavedReducer from './redux/SavedReducer';
import WorkReducer from './redux/WorkReducer';



const rootReducer = combineReducers({ 
  ThemeReducer ,
  BranchReducer ,
  UserReducer ,
  SavedReducer ,
  WorkReducer
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
