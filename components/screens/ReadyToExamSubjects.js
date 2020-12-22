import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Footer from '../footer/Footer';


const ReadyToExamSubjects = ({ navigation }) => {
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.myText}>Edit</Text>
      </View>
      <Footer navigation={navigation} />
    </>
  )
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    justifyContent : 'space-between',
    backgroundColor  : '#6FA6B6'
  },
  myText : {
    color : 'black',
    padding : 20,
    fontSize : 25,
  }
});


export default ReadyToExamSubjects
