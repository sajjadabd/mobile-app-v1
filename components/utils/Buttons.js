import React from 'react'

import { View , Text , TouchableOpacity , StyleSheet } from 'react-native'
import { windowWidth } from './Dimensions'
import { LalezarRegular } from './Fonts'

import { useSelector } from 'react-redux';

export const ActiveButton = ({sex , title , changeSex}) => {

  const theme = useSelector(state => state.ThemeReducer.theme);

  const activeButtonStyle = () => {
    return {
      backgroundColor : theme.BUTTON_COLOR,
      width : windowWidth / 2,
      borderRadius : 55,
      justifyContent : 'center',
      alignItems : 'center'
    }
  }


  const activeButtonText = () => {
    return {
      color : theme.TEXT_COLOR,
      fontFamily : LalezarRegular,
      fontSize : 20,
    }
  }

  return (
    <TouchableOpacity 
      onPress={() => changeSex(title)}
      style={activeButtonStyle()} >
      <Text style={activeButtonText()}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}


export const DeactiveButton = ({sex , title , changeSex}) => {
  
  const theme = useSelector(state => state.ThemeReducer.theme);

  
  const deactiveButtonStyle = () => {
    return {
      backgroundColor : theme.BUTTON_COLOR,
      width : windowWidth / 4,
      borderRadius : 55,
      justifyContent : 'center',
      alignItems : 'center'
    }
  }

  const deactiveButtonText = () => {
    return {
      color : theme.MAIN_BACKGROUND,
      fontFamily : LalezarRegular,
      fontSize : 20,
    }
  }

  
  return (
    <TouchableOpacity 
      onPress={() => changeSex(title)}
      style={deactiveButtonStyle()}>
      <Text style={deactiveButtonText()}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  activebutton : {
    backgroundColor : '#4D7C8A',
    width : windowWidth / 2,
    borderRadius : 55,
    justifyContent : 'center',
    alignItems : 'center'
  },
  deactivebutton : {
    backgroundColor : '#CEE0E5',
    width : windowWidth / 4,
    borderRadius : 55,
    justifyContent : 'center',
    alignItems : 'center'
  },
  activebuttonText : {
    color : 'white',
    fontFamily : LalezarRegular,
    fontSize : 20,
  },
  deactivebuttonText : {
    color : 'black',
    fontFamily : LalezarRegular,
    fontSize : 20,
  }
});