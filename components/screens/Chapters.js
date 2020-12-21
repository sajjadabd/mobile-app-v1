import React from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Footer from '../footer/Footer';
import { LalezarRegular } from '../utils/Fonts';
import SubChapter from '../utils/SubChapter';

const numbers = [1,2,3,4,5,6,7,8];

const Chapters = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#51344D" barStyle="light-content" />
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.myText}>زیر شاخه</Text>
        </View>

        <ScrollView style={styles.scroll}>
            <View style={styles.scrollContent}>
            {numbers.map( ( item , index ) => {
                return (
                    <SubChapter key={index}/>
                )
            })}
            </View>
        </ScrollView>

        <Footer navigation={navigation}/>
      </View>
      
    </>
  )
}


const styles = StyleSheet.create({
  body : {
    flex : 1,
    backgroundColor : '#6FA6B6',
  },
  header : {
    height : 180,
    backgroundColor : '#51344D',
    borderBottomRightRadius : 55,
    borderBottomLeftRadius : 55,
    justifyContent : 'flex-end',
    alignItems : 'center',
    padding : 40,
  },
  myText : {
    color : 'white',
    fontSize : 55,
    fontFamily : LalezarRegular,
  },
  scroll : {
    flex : 1,
  },
  scrollContent : {
    flex : 1,
    paddingTop : 40,
  }
});

export default Chapters
