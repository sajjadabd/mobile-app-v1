
import { 
  MAIN_THEME , 
  DARK_BLUE_THEME , 
  DARK_GREEN_THEME , 
  DARK_THEME , 
  MAGENTA_THEME , 
  GRAY_THEME 
} from './Actions'


import {
  mainTheme,
  darkBlueTheme ,
  darkGreenTheme ,
  darkTheme ,
  magentaTheme ,
  grayTheme
} from './Theme'

const initialState = {
  theme: { ...grayTheme }
}

let newState = {};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_THEME:
      newState = {
        ...state,
        theme: { ...mainTheme }
      }
      return newState
    case DARK_BLUE_THEME:
      newState = {
        ...state,
        theme: { ...darkBlueTheme }
      }
      return newState
    case DARK_GREEN_THEME:
      newState = {
        ...state,
        theme: { ...darkGreenTheme }
      }
    return newState
    case DARK_THEME:
      newState = {
        ...state,
        theme: { ...darkTheme }
      }
    return newState
    case MAGENTA_THEME:
      newState = {
        ...state,
        theme: { ...magentaTheme }
      }
    return newState
    case GRAY_THEME:
      newState = {
        ...state,
        theme: { ...grayTheme }
      }
    return newState
    default:
      return state
  }
}

export default ThemeReducer