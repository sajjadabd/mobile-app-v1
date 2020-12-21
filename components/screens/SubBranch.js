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

const SubBranch = ({ navigation }) => {
  return (
    <>
      <StatusBar backgroundColor="#51344D" barStyle="light-content" />
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.myText}>زیر شاخه</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Chapters')}
        >
          <View style={styles.block}>
            <View style={styles.iconContainer}>
              <MaterialIcon size={80} color="white" name="list-alt" />
            </View>
            <Text style={styles.myBlockText}>نمونه سوالات</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Exam')}
        >
        <View style={styles.block}>
          <View style={styles.iconContainer}>
            <MaterialIcon size={80} color="white" name="edit" />
          </View>
          <Text style={styles.myBlockText}>آزمون جامع</Text>
        </View>
        </TouchableOpacity>

      </View>
      <Footer navigation={navigation}/>
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
    marginBottom : 40,
  },
  myText : {
    color : 'white',
    fontSize : 55,
    fontFamily : LalezarRegular,
  },
  myBlockText : {
    color : 'white',
    fontSize : 45,
    fontFamily : LalezarRegular,
  },
  block : {
    backgroundColor : '#4D7C8A',
    borderRadius : 20,
    paddingHorizontal : 20,
    paddingVertical : 20,
    marginHorizontal : 20,
    marginVertical : 20,
  },
  iconContainer : {
    position : 'absolute',
    left : 10,
    top : -30,
  }
});

export default SubBranch
