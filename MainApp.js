/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useRef ,  useState , useEffect } from 'react';

import Navigator from './components/stack/Homestack';

// import Homepage from './components/homepage/Homepage';
import Splashscreen from './components/splashscreen/Splashscreen';
import Phone from './components/phone/Phone';

import { getData , removeData , existsData } from './components/AsyncStorage/SecureStorage';

const MainApp = () => {

  const [splash , setSplash] = useState(true);

  const [phoneReady , setPhoneReady]   = useState(false);

  useEffect( () => {
    const doTheJob = async () => {
      // await removeData();
      let userInfo = await getData();
      console.log(userInfo);
      if( userInfo && userInfo.phoneNumber && userInfo.sms ) {
        setPhoneReady(true);
      } else {
        setPhoneReady(false);
      }
    }
    doTheJob();
    setTimeout( () => {
      setSplash(false);
    } , 1000)
  } );

  if(splash) {
    return (
      <Splashscreen />
    );
  } else if(phoneReady == false) {
    return (
      <Phone setPhoneReady={setPhoneReady}/>
    );
  } else {
    return (
      <Navigator />
    );
  }
  
};


export default MainApp;
