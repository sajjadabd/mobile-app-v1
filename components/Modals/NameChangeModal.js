import React , { useState } from 'react';

import { 
  View , 
  Text , 
  StyleSheet , 
  TextInput,
  Modal , 
  TouchableOpacity , 
  ScrollView, TouchableOpacityBase 
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { LalezarRegular } from '../utils/Fonts';

const NameChangeModal = ({visible , changeName}) => {

  const [name , setName] = useState('');

  return (
    <>
    <Modal visible={visible}>
      <View style={styles.container}>

        <TouchableOpacity
          onPress={() => changeName()}
          style={styles.button}>
          <Text
          style={styles.buttonText}>
            بستن
          </Text>
        </TouchableOpacity>

        <View style={styles.wrapper}>
          <Text style={styles.myText}>
            نام جدید خود را وارد کنید :
          </Text>
          <TextInput 
          value={name}
          onChangeText={(value) => setName(value)}
          style={styles.input}/>
          <TouchableOpacity 
          onPress={() => changeName(name)}
          style={styles.button}>
            <Text style={styles.buttonText}>تغییر نام</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#6FA6B6',
    flex : 1,
    
  },
  wrapper : {
    marginVertical : 20,
    marginHorizontal : 20,
    justifyContent : 'center',
    flex : 1,
    marginVertical : 20,
  },
  myText : {
    fontFamily : LalezarRegular ,
    fontSize : 20,
    marginBottom : 10,
  },
  input : {
    height : 70 ,
    backgroundColor : '#E5E5E5',
    borderWidth : 2,
    borderRadius : 35,
    fontFamily : LalezarRegular ,
    fontSize : 25,
    paddingHorizontal : 30,
    paddingVertical : 10,
  },  
  button : {
    padding : 10,
    marginVertical : 20,
    marginHorizontal : 40,
    backgroundColor : 'black',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 35,
    backgroundColor : '#4D7C8A',
  },
  buttonText : {
    color : 'white',
    fontSize : 30,
    fontFamily : LalezarRegular,
  },
  provinces : {
    marginHorizontal : 20,
    paddingHorizontal : 20,
    paddingVertical : 20,
  }
});

export default NameChangeModal
