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
  Image ,
  ActivityIndicator
} from 'react-native';

import Circle from 'react-native-progress/Circle'

import Bar from 'react-native-progress/Bar'

import CircleSnail from 'react-native-progress/CircleSnail'


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

          {/* <Circle 
          style={styles.progressBar} 
          size={30} 
          indeterminate={true} /> */}

          {/* <CircleSnail
          style={styles.progressBar} 
          size={50} 
          color={[ '#595959' , '#F26522' ]}
          /> */}

        <View style={styles.loader}>
          {/* <ActivityIndicator size="large" color="#F26522" /> */}
          <Bar indeterminate={true} />
        </View>

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
  },
  progressBar : {
    marginTop : 40,
  },
  loader : {
    marginTop : 40,
  }
});

export default Splashscreen;
