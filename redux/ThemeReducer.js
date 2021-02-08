
import { 
  PURPLE_THEME , 
  DARK_BLUE_THEME , 
  DARK_GREEN_THEME , 
  DARK_THEME , 
  MAGENTA_THEME , 
  GRAY_THEME ,
  ORANGE_THEME
} from './ThemeActions'


import {
  purpleTheme,
  darkBlueTheme ,
  darkGreenTheme ,
  darkTheme ,
  magentaTheme ,
  grayTheme ,
  orangeTheme
} from './Theme'

const initialState = {
  theme: { ...darkBlueTheme }
}

let newState = {};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case PURPLE_THEME:
      newState = {
        ...state,
        theme: { ...purpleTheme }
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
    case ORANGE_THEME :
      newState = {
        ...state,
        theme: { ...orangeTheme }
      }
    return newState
    default:
      return state
  }
}

export default ThemeReducer