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


const App = () => {

  const [splash , setSplash] = useState(true);

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
