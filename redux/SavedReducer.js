import { 
  GET_SAVED_QUESTIONS, 
  GET_SAVED_STANDARDS,
  UPDATE_SAVE_STANDARD,
  UPDATE_UNSAVE_STANDARD,
} from './SavedActions';

const initialState = {
  saved : {
    standards : [
      {
        branch_id : 1,
        standard_id : 1,
        standard : 'پیرایش مو و ابرو',
        save : true,
      },
      {
        branch_id : 1,
        standard_id : 2,
        standard : 'رنگ مو',
        save : true,
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
    case UPDATE_SAVE_STANDARD :

      newState = {
        ...state ,
      }

      newState.saved.standards = state.saved.standards.map((item , index) => {
        if ( item.standard_id == action.payload.standard_id ) {
          return {
            ...item ,
            save : true,
          }
        } else {
          return item;
        }
      })

      return newState
    case UPDATE_UNSAVE_STANDARD :

      newState = {
        ...state ,
      }

      /* newState.saved.standards = state.saved.standards.map((item , index) => {
        if ( item.standard_id == action.payload.standard_id ) {
          return {
            ...item ,
            save : false ,
          }
        } else {
          return item;
        }
      }) */

      newState.saved.standards = state.saved.standards.filter((item , index) => {
        return item.standard_id != action.payload.standard_id 
      })

      /* newState = newState.saved.standards.map( (item , index) => {
        if ( item.standard_id == action.payload.standard_id ) {
          return {
            ...item ,
            save : false,
          }
        } else {
          return item;
        }
      } ); */

      return newState
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