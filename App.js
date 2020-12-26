/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useState , useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Navigator from './components/stack/Homestack';

// import Homepage from './components/homepage/Homepage';
import Splashscreen from './components/splashscreen/Splashscreen';
import Phone from './components/phone/Phone';


const App = () => {

  const [splash , setSplash] = useState(true);

  const [phoneReady , setPhoneReady] = useState(false);

  useEffect( () => {
    setTimeout( () => {
      setSplash(false);
    } , 1000)
  } );

  if(splash) {
    return (
      <>
        <Splashscreen />
      </>
    );
  } else if(phoneReady == false) {
    return (
      <>
        <Phone setPhoneReady={setPhoneReady}/>
      </>
    );
  } else {
    return (
      <>
        <Navigator />
      </>
    );
  }
  
};

const styles = StyleSheet.create({

});

export default App;
