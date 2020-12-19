/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';


const Splashscreen = () => {

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.body}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../logo/logo.png")}
          />
        </View>
        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  block : {
    backgroundColor : '#6FA6B6',
    padding : 20,
    borderColor : 'black',
    borderWidth : 3,
  },
  body : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor  : '#fff'
  },
  scroll : {
    flex : 3,
  },
  myText : {
    color : 'white',
    fontSize : 25,
  },
  logo : {
    width : 200,
    height : 100,
  },
  logoContainer : {
    justifyContent : 'center',
    alignItems : 'center',
  }
});

export default Splashscreen;
