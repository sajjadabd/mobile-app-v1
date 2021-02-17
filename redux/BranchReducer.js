import { 
  GET_BRANCHES ,
  UPDATE_SAVE_STANDARD_IN_BRANCH ,
  UPDATE_UNSAVE_STANDARD_IN_BRANCH ,
  SELECT_EXAM ,
  DESELECT_EXAM 
} from "./BranchActions";

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
                season : 1,
                chapter : 'فصل 1',
                subject : 'کوتاهی ابرو',
              },
              {
                id : 2,
                season : 2,
                chapter : 'فصل 2',
                subject : 'رنگ ابرو',
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
              },
              {
                id : 2,
                season : 2 ,
                chapter : 'فصل 2',
                subject : 'سامبره',
              },
              {
                id : 3,
                season : 3 ,
                chapter : 'فصل 3',
                subject : 'بالیاژ',
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
              },
              {
                id : 2,
                season : 2,
                chapter : 'فصل 2',
                subject : 'ذخیره سازی',
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
              },
              {
                id : 2,
                season : 2,
                chapter : 'فصل 2',
                subject : 'لایه ها در فتوشاپ',
              },
              {
                id : 3,
                season : 3,
                chapter : 'فصل 3',
                subject : 'ادغام لایه ها',
              },
            ]
          }
        ]
      } ,
    ]
}


let newState = {};

let branchIndex = undefined;
let standardIndex = undefined;
let seasonIndex = undefined;


const BranchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BRANCHES :
      newState = {
        ...state
      }

      return newState
    case UPDATE_SAVE_STANDARD_IN_BRANCH :
      newState = {
        ...state
      }

      branchIndex = state.branches.findIndex((item , index) => {
        return item.id == action.payload.branch_id
      });


      if( branchIndex >= 0 ) {
        standardIndex = state.branches[branchIndex].standards.findIndex((item,index) => {
          return item.id == action.payload.standard_id 
        });

        newState.branches[branchIndex].standards[standardIndex].save = true;
      }
      
      

      return newState
    case UPDATE_UNSAVE_STANDARD_IN_BRANCH :
      newState = {
        ...state
      }

      branchIndex = state.branches.findIndex((item , index) => {
        return item.id == action.payload.branch_id
      });


      if( branchIndex >= 0 ) {
        standardIndex = state.branches[branchIndex].standards.findIndex((item,index) => {
          return item.id == action.payload.standard_id 
        });

        newState.branches[branchIndex].standards[standardIndex].save = false;
      }
      
      

      return newState
    case SELECT_EXAM :
      newState = {
        ...state
      }

      branchIndex = state.branches.findIndex((item , index) => {
        return item.id == action.payload.branch_id
      });


      if( branchIndex >= 0 ) {
        standardIndex = state.branches[branchIndex].standards.findIndex((item,index) => {
          return item.id == action.payload.standard_id 
        });
      }

      if( standardIndex >= 0) {
        seasonIndex = state.branches[branchIndex].standards[standardIndex].seasons.findIndex((item,index) => {
          return item.id == action.payload.season_id 
        });
      } 

      newState.branches[branchIndex].standards[standardIndex].seasons[seasonIndex].selectedExam = true;

      return newState
    case DESELECT_EXAM :
      newState = {
        ...state
      }

      branchIndex = state.branches.findIndex((item , index) => {
        return item.id == action.payload.branch_id
      });


      if( branchIndex >= 0 ) {
        standardIndex = state.branches[branchIndex].standards.findIndex((item,index) => {
          return item.id == action.payload.standard_id 
        });
      }

      if( standardIndex >= 0) {
        seasonIndex = state.branches[branchIndex].standards[standardIndex].seasons.findIndex((item,index) => {
          return item.id == action.payload.season_id 
        });
      } 

      newState.branches[branchIndex].standards[standardIndex].seasons[seasonIndex].selectedExam = false;

      return newState
    default:
      return state
  }
}

export default BranchReducer