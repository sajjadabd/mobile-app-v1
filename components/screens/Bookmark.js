import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../footer/Footer';

import { LalezarRegular } from '../utils/Fonts';
import SubBranch from '../utils/SubBranch';


const Bookmark = ({ navigation }) => {

  const numbers = [1,2,3,4,5,6,7,8,9,10];


  return (
    <>
    <StatusBar backgroundColor="#4D7C8A" barStyle="light-content" />
    <View style={styles.body}>

      <View style={styles.tabs}>

        <View style={styles.item}>
          <TouchableOpacity 
          onPress={() => null}
          style={styles.touchableButton}
          >
            <Text style={styles.itemText}>زیر شاخه</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.seperatorContainer}>
          <View style={styles.seperator}>

          </View>
        </View>
        

        <View style={styles.item}>
          <TouchableOpacity 
          onPress={() => null}
          style={styles.touchableButton}
          >
            <Text style={styles.itemText}>سوالات</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.container}>

        <ScrollView style={styles.scroll}>
          <View style={styles.scrollContent}>
            {
              numbers.map( ( item , index ) => {
                return (
                  <SubBranch key={index} navigation={navigation} save={true} />
                )
              })
            }
          </View>

        </ScrollView>
      </View>
      
      
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
  },
  tabs : {
    flex : 1,
    backgroundColor : '#4D7C8A',
    flexDirection : 'row-reverse',
  }, 
  item : {
    flex : 1,
    // borderWidth : 1,
    borderBottomWidth : 2,
    
  },
  seperatorContainer : {
    borderBottomWidth : 2,
    height : '100%',
    alignItems : 'center',
    justifyContent : 'center'
  },
  seperator : {
    width : 2,
    height : '80%',
    marginVertical : 10,
    backgroundColor : 'black',
  },
  itemText : {
    color : 'white',
    fontSize : 20,
    fontFamily : LalezarRegular,
  },
  container : {
    paddingLeft : 50,
    flex : 7,
    backgroundColor : '#6FA6B6',
  },
  scroll : {
    flex : 1,
  },
  scrollContent : {
    paddingTop : 20,
  },
  touchableButton : {
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center',
  }
});


export default Bookmark
