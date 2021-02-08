import { GET_BRANCHES } from "./BranchActions";

const initialState = {
  branches : {
    data : [
      {
        id : 1,
        branch : 'مراقبت و زیبایی',
        standards : [
          {
            id : 1,
            standard : 'پیرایش مو و ابرو',
            seasons : [
              {
                id : 1,
                season : 1 ,
                chapter : 'فصل 1',
                subject : 'کوتاهی ابرو',
                selectedExam : false
              },
              {
                id : 2,
                season : 2,
                chapter : 'فصل 2',
                subject : 'رنگ ابرو',
                selectedExam : false
              }
            ]
          },
          {
            id : 2,
            standard : 'رنگ مو',
            seasons : [
              {
                id : 1,
                season : 1 ,
                chapter : 'فصل 1',
                subject : 'آمبره',
                selectedExam : false
              },
              {
                id : 2,
                season : 2 ,
                chapter : 'فصل 2',
                subject : 'سامبره',
                selectedExam : false
              },
              {
                id : 3,
                season : 3 ,
                chapter : 'فصل 3',
                subject : 'بالیاژ',
                selectedExam : false
              },
            ]
          }
        ]
      } ,
      {
        id : 2,
        branch : 'کاربر رایانه',
        standards : [
          {
            id : 1,
            standard : 'کاربر آفیس',
            seasons : [
              {
                id : 1,
                season : 1 
              },
              {
                id : 2,
                season : 2 
              },
            ]
          },
          {
            id : 2,
            standard : 'کاربر فتوشاپ',
            seasons : [
              {
                id : 1,
                season : 1 
              },
              {
                id : 2,
                season : 2 
              },
              {
                id : 3,
                season : 3 
              },
            ]
          }
        ]
      } ,
    ]
  }
}


let newState = {};


const BranchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANCHES :
      newState = {
        ...state
      }
      return newState
    default:
      return state
  }
}

export default BranchReducer