/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useState , useEffect } from 'react';

import Navigator from './components/stack/Homestack';

// import Homepage from './components/homepage/Homepage';
import Splashscreen from './components/splashscreen/Splashscreen';
import Phone from './components/phone/Phone';


const MainApp = () => {

  const [splash , setSplash] = useState(false);

  const [phoneReady , setPhoneReady] = useState(false);

  useEffect( () => {
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
