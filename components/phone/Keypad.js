import React from 'react';

import { 
  View , 
  Text , 
  StyleSheet ,
  TouchableOpacity ,
  PixelRatio
} from 'react-native'

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const numbers1 = ['1','2','3'];
const numbers2 = ['4','5','6'];
const numbers3 = ['7','8','9'];
const numbers4 = ['+','0','C'];

const keySize = windowWidth / 5;

const Keypad = ({addToInputNumber}) => {
  return (
    <>
      <View style={styles.phonePad}>
        <View style={styles.eachRow}>
        {
        numbers1.map( (item,index) => {
          return (
            <View key={index} style={styles.keyContainer}>
              <TouchableOpacity 
              onPressIn={() => addToInputNumber(item)}
              style={styles.key}>
              <View >
              <Text style={styles.keyText}>{item}</Text>
              </View>
              </TouchableOpacity>
            </View>
          )
        })
        }
        </View>

        <View style={styles.eachRow}>
        {
        numbers2.map( (item,index) => {
          return (
            <View key={index} style={styles.keyContainer}>
              <TouchableOpacity 
              onPressIn={() => addToInputNumber(item)}
              style={styles.key}>
              <View >
              <Text style={styles.keyText}>{item}</Text>
              </View>
              </TouchableOpacity>
            </View>
          )
        })
        }
        </View>

        <View style={styles.eachRow}>
        {
        numbers3.map( (item,index) => {
          return (
            <View key={index} style={styles.keyContainer}>
              <TouchableOpacity 
              onPressIn={() => addToInputNumber(item)}
              style={styles.key}>
              <View >
              <Text style={styles.keyText}>{item}</Text>
              </View>
              </TouchableOpacity>
            </View>
          )
        })
        }
        </View>

        <View style={styles.eachRow}>
        {
        numbers4.map( (item,index) => {
          return (
            <View key={index} style={styles.keyContainer}>
              <TouchableOpacity 
              onPressIn={() => addToInputNumber(item)}
              style={styles.key}>
              <View >
              <Text style={styles.keyText}>
                {item == 'C' ?
                <MaterialIcon size={40} color="black" name={'arrow-back'} />
                :
                item}
                </Text>
              </View>
              </TouchableOpacity>
            </View>
          )
        })
        }
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  phonePad : {
    // backgroundColor : 'yellow',
    flex : 2,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
  },
  keyContainer : {
    
  },
  key : {
    // backgroundColor : 'blue',
    margin : 4,
    width : keySize ,
    height : keySize ,
    borderWidth  : 3,
    borderRadius : keySize / PixelRatio.get(),
    justifyContent : 'center',
    alignItems : 'center',
  },
  keyText : {
    color : 'black',
    fontSize : 30,
  },
  eachRow : {
    flexDirection : 'row'
  },
});

export default Keypad
