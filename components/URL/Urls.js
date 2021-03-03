const localHost = 'http://192.168.2.10:3000';

const herokuHost = 'https://fanniherfei.herokuapp.com';

const mainHost = herokuHost;

export const GET_SMS_URL = 
mainHost + '/auth/signup';


export const CONFIRM_SMS_URL = 
mainHost + '/auth/login';


export const UPDATE_USER_URL =
mainHost + '/users/update';


export const GET_ALL_BRANCHES = 
mainHost + '/home/branches/getAll';


export const GET_STANDARDS = 
mainHost + '/home/standards/';


export const GET_SEASONS = 
mainHost + '/home/seasons/'


export const GET_SAVED_QUESTIONS = 
mainHost + '/saved/questions/'

export const GET_SAVED_STANDARDS = 
mainHost + '/saved/standards/'


export const SAVE_STANDARD = 
mainHost + '/saved/add/standards/';
// /add/standards/:branch_id/:standard_id/:user_id

export const UNSAVE_STANDARD = 
mainHost + '/saved/remove/standards/';

export const SAVE_QUESTIONS = 
mainHost + '/saved/add/questions/';

export const UNSAVE_QUESTIONS = 
mainHost + '/saved/remove/questions/';

export const GET_QUESTIONS = 
mainHost + '/home/questions/';

export const GET_QUESTIONS_FOR_ALL_SEASONS = 
mainHost + '/home/exam/questions/';

export const GET_QUESTIONS_FOR_SELECTED_SEASONS =
mainHost + '/home/exam/seasons/questions/'

export const GET_USER_DATA = 
mainHost + '/users/getUser/'

export const SEARCH_BRANCHES = 
mainHost + '/home/search/branches/'

export const SEARCH_STANDARDS = 
mainHost + '/home/search/standards/'