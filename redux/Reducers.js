
import { DARK_THEME , LIGHT_THEME } from './Actions'

const initialState = {
  theme: { ...LIGHT_THEME }
}

let newState = {};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_THEME:
      newState = {
        ...state,
        theme: { ...DARK_THEME }
      }
      return newState
    case LIGHT_THEME:
      newState = {
        ...state,
        theme: { ...LIGHT_THEME }
      }
      return newState
    default:
      return state
  }
}

export default themeReducer