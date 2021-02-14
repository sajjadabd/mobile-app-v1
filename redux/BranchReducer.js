import { GET_BRANCHES } from "./BranchActions";

const initialState = {
  branches : [
      {
        id : 1,
        branch : 'مراقبت و زیبایی',
        standards : [
          {
            id : 1,
            standard : 'پیرایش مو و ابرو',
            save : false,
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
            save : false,
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
            save : false,
            seasons : [
              {
                id : 1,
                season : 1 ,
                chapter : 'فصل 1',
                subject : 'تراز بندی',
                selectedExam : false
              },
              {
                id : 2,
                season : 2,
                chapter : 'فصل 2',
                subject : 'ذخیره سازی',
                selectedExam : false
              }
            ]
          },
          {
            id : 2,
            standard : 'کاربر فتوشاپ',
            save : false,
            seasons : [
              {
                id : 1,
                season : 1 ,
                chapter : 'فصل 1',
                subject : 'آشنایی با رنگ ها',
                selectedExam : false
              },
              {
                id : 2,
                season : 2,
                chapter : 'فصل 2',
                subject : 'لایه ها در فتوشاپ',
                selectedExam : false
              },
              {
                id : 3,
                season : 3,
                chapter : 'فصل 3',
                subject : 'ادغام لایه ها',
                selectedExam : false
              },
            ]
          }
        ]
      } ,
    ]
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