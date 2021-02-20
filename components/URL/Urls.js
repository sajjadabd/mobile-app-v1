const localHost = 'http://192.168.2.10:3000';

const herokuHost = 'https://fanniherfei.herokuapp.com';

export const GET_SMS_URL = 
localHost + '/auth/signup';


export const CONFIRM_SMS_URL = 
localHost + '/auth/login';


export const UPDATE_USER_URL =
localHost + '/users/update';


export const GET_ALL_BRANCHES = 
localHost + '/home/branches/getAll';


export const GET_STANDARDS = 
localHost + '/home/standards/';


export const GET_SEASONS = 
localHost + '/home/seasons/'


export const GET_SAVED_QUESTIONS = 
localHost + '/saved/questions/'

export const GET_SAVED_STANDARDS = 
localHost + '/saved/standards/'


export const SAVE_STANDARD = 
localHost + '/saved/add/standards/';
// /add/standards/:branch_id/:standard_id/:user_id

export const UNSAVE_STANDARD = 
localHost + '/saved/remove/standards/';

export const SAVE_QUESTIONS = 
localHost + '/saved/add/questions/';

export const UNSAVE_QUESTIONS = 
localHost + '/saved/remove/questions/';

export const GET_QUESTIONS = 
localHost + '/home/questions/';

export const GET_QUESTIONS_FOR_ALL_SEASONS = 
localHost + '/home/exam/questions/';

export const GET_QUESTIONS_FOR_SELECTED_SEASONS =
localHost + '/home/exam/questions/'