import React , { useState , useRef , useEffect } from 'react';

import { 
  View , 
  Text , 
  StyleSheet , 
  TextInput,
  Modal , 
  TouchableOpacity , 
  ImageBackground,
  ScrollView, TouchableOpacityBase 
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { LalezarRegular, ShabnamMedium } from '../utils/Fonts';


import styled from 'styled-components/native';

import { useSelector } from 'react-redux';

const Container = styled.View`
  background-color : ${props => props.theme.MAIN_BACKGROUND};
  flex : 1;
`

const CloseButton = styled.View`
  padding : 10px;
  margin : 20px 40px;
  justify-content : center;
  align-items : center;
  border-radius : 35px;
  background-color : ${props => props.theme.BUTTON_COLOR};
`


const NameChangeModal = ({visible , changeName , username}) => {

  const [name , setName] = useState(username);

  const theme = useSelector(state => state.ThemeReducer.theme);

  // const inputBox = useRef(null);

  

  const returnTextStyle = () => {
    return {
      fontFamily : ShabnamMedium ,
      fontSize : 20,
      marginBottom : 10,
      color : theme.SEARCH_COLOR
    }
  }

  return (
    <>
    <Modal visible={visible}>
      
      <Container>

      <ImageBackground
      style={styles.image}
      source={require('../images/bg.png') }
      >

        <TouchableOpacity
          onPress={() => changeName()}>
          <CloseButton>
            <Text
            style={styles.buttonText}>
              بستن
            </Text>
          </CloseButton>
        </TouchableOpacity>

        <View style={styles.wrapper}>
          <Text style={returnTextStyle()}>
            نام جدید خود را وارد کنید :
          </Text>
          <TextInput 
          ref={input => input && input.focus()}
          // autoFocus 
          value={name}
          onChangeText={(value) => setName(value)}
          style={styles.input}/>
          <TouchableOpacity 
          onPress={() => changeName(name)}>
            <CloseButton>
            <Text style={styles.buttonText}>تغییر نام</Text>
            </CloseButton>
          </TouchableOpacity>
        </View>
        
        </ImageBackground>

      </Container>
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
    fontFamily : ShabnamMedium ,
    fontSize : 20,
    marginBottom : 10,
  },
  input : {
    height : 70 ,
    backgroundColor : '#E5E5E5',
    borderWidth : 2,
    borderRadius : 35,
    fontFamily : ShabnamMedium ,
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
  },
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
  },
});

export default NameChangeModal
