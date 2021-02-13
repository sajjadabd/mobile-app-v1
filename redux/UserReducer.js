import { 
  UPDATE_USER 
} from "./UserActions";


const initialState = {
  user : {
    username : 'سجاد عبداللهی' ,
    province : 'مازندران' ,
    city : 'نکا' ,
    gender : 'male' ,
  }
}

let newState = { 

};


const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      newState = {
        ...state,
        user : action.payload
      }
      return newState
    default:
      return state
  }
}

export default UserReducer