/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useRef ,  useState , useEffect , createContext } from 'react';

import Navigator from './components/stack/Homestack';

// import Homepage from './components/homepage/Homepage';
import Splashscreen from './components/splashscreen/Splashscreen';
import Phone from './components/phone/Phone';

import axios from 'axios';



import { useSelector , useDispatch } from 'react-redux'

import { CONFIRM_SMS_URL } from './components/URL/Urls';

import { 
  getData , 
  removeData , 
  existsData ,
  getTheme ,
} from './components/AsyncStorage/SecureStorage';

import { UPDATE_USER } from './redux/UserActions';

import { ThemeProvider } from 'styled-components';



const requestToServerForConfirmSms = async (userInfo) => {
  try {
    let result = await axios({
      method: 'POST',
      url: CONFIRM_SMS_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data : {
        "phone" : `${userInfo.phoneNumber}`,
        "sms" : `${userInfo.sms}`
      }
    });
    // console.log(result.data);
    return result.data;
  } catch (e) {
    console.log("Error on Request to Server...")
  }
}


const MainApp = () => {

  const theme = useSelector(state => state.ThemeReducer.theme);
  
  const dispatch = useDispatch();
  

  const ThemeContext = createContext(theme);

  const [splash , setSplash] = useState(true);
  const [phoneReady , setPhoneReady] = useState(false);

  /* const [info , setInfo] = useState({
    splash : true,
    phoneReady : false,
  }); */


  /* const setPhoneReady = (value) => {
    setInfo({
      splash : false,
      phoneReady : value,
    })
  } */

  // const [savedTheme , setSavedTheme] = useState(restoreTheme);

  /* const fetchTheme = async () => {
    let savedTheme = await getTheme();
    console.log( 'theme : ' , savedTheme.theme );
    dispatch({ type : savedTheme.theme });
  }

  fetchTheme(); */
  

  useEffect( () => {

    const doTheJob = async () => {
      // await removeData();
      let userInfo = await getData();
      console.log('userInfo :' , userInfo);
      let result = await requestToServerForConfirmSms(userInfo);
      dispatch({ type : UPDATE_USER , payload : result.user });

      let savedTheme = await getTheme();
      console.log( 'theme :' , savedTheme.theme );
      
      if ( savedTheme == undefined || savedTheme == null ) {
        
      } else {
        if( savedTheme.theme != theme.name ) {
          dispatch({ type : savedTheme.theme });
        }
      }


      console.log('result :' , result);
      if( userInfo && userInfo.phoneNumber && userInfo.sms ) {
        if ( result && result.success == true ) {
          setSplash(false);
          setPhoneReady(true);
          /* setInfo({
            splash : false,
            phoneReady : true,
          }) */
          console.log(1);
        } else {
          setSplash(false);
          setPhoneReady(false);
          /* setInfo({
            splash : false, 
            phoneReady : false,
          }); */
          console.log(2);
        }
      } else {
        // removeData();
        setSplash(false);
        /* setInfo({
          splash : false,
          phoneReady : false,
        }); */
        console.log(3);
      }
    }

    doTheJob();
    
    // setTimeout( () => {
    //   setSplash(false);
    // } , 1000)
  } );

  
  

  if(splash) {
    return (
      <Splashscreen />
    );
  } else if( phoneReady == false ) {
    return (
      <Phone setPhoneReady={setPhoneReady} />
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    );
  }
  
};


export default MainApp;
