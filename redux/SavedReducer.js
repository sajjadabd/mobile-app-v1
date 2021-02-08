import { 
  GET_SAVED_QUESTIONS, 
  GET_SAVED_STANDARDS 
} from "./SavedActions";

const initialState = {
  saved : {
    standards : [
      {
        id : 1,
        standard : 'پیرایش مو'
      },
      {
        id : 2,
        standard : 'رنگ مو'
      }
    ],
    questions : [
      {
        id : 1 ,
        branch : 1 ,
        standard : 1 ,
        season : 1 ,
        level : 'متوسط' ,
        question : 'برای رنگ کردن مو باید چه میزان از مواد را به کار برد' ,
        first : '100 گرم' ,
        second : '200 گرم' ,
        third : '300 گرم' ,
        fourth : '400 گرم' ,
      },
    ]
  }
}

let newState = { 

};


const SavedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SAVED_STANDARDS:
      newState = {
        ...state,
      }
      return newState
    case GET_SAVED_QUESTIONS:
      newState = {
        ...state,
      }
      return newState
    default:
      return state
  }
}

export default SavedReducer