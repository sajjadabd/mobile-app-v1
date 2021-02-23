import React , { useState } from 'react';

import { View , Text , TouchableOpacity , StyleSheet } from 'react-native';

import { windowWidth } from './Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

import { useSelector } from 'react-redux'; 
import { ShabnamMedium } from './Fonts';

import LinearGradient from 'react-native-linear-gradient';
import { SAVE_QUESTIONS, UNSAVE_QUESTIONS } from '../URL/Urls';


import axios from 'axios';


const Container = styled.View`
  padding-left : 30px;
  padding-right : 30px;
  margin-bottom : 20px;
  flex-direction : row;
  justify-content : space-between;
  align-items : center;
  height : 100px;
  border-top-left-radius : 20px;
  border-bottom-left-radius : 20px;
  background-color : ${props => props.theme.BUTTON_COLOR};
`


const EachQuestion = ({navigation , question , userInfo}) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  console.log(question);


  const requestToServerForSaveQuestion = async () => {
    console.log(SAVE_QUESTIONS + question.id + '/' + userInfo.user_id);
    try {
      const result = await axios({
        method: 'GET',
        url: SAVE_QUESTIONS + question.id + '/' + userInfo.user_id,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          
        }
      });
      console.log(result.data)
      // setStandards(result.data.result);
    } catch (e) {
      console.log("Error Happens for save question ...");
    }
  }


  const requestToServerForUnSaveQuestion = async () => {
    console.log(UNSAVE_QUESTIONS + question.id + '/' + userInfo.user_id);
    try {
      const result = await axios({
        method: 'GET',
        url: UNSAVE_QUESTIONS + question.id + '/' + userInfo.user_id,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          
        }
      });
      // setStandards(result.data.result);
    } catch (e) {
      console.log("Error Happens for unsave question ...");
    }
  }


  const unSaveQuestion = async () => {
    // dispatch({ type : UPDATE_UNSAVE_STANDARD_IN_BRANCH , payload : data });
    await requestToServerForUnSaveQuestion();
    setSave(false);
    // updateQuestions();
  }
  
  const saveQuestion = async () => {
    // dispatch({ type : UPDATE_SAVE_STANDARD_IN_BRANCH , payload : data });
    await requestToServerForSaveQuestion();
    // updateQuestions();
    setSave(true);
  }


  const returnTextStyle = () => {
    return {
      fontFamily : ShabnamMedium,
      fontSize : windowWidth / 20,
      color : theme.TEXT_COLOR,
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={ () => navigation.navigate('Reading') }>
        <LinearGradient 
        colors={[
          'rgba(255,255,255,0.1)', 
          'rgba(255,255,255,0.2)', 
          'rgba(255,255,255,0.7)', 
        ]} 
        style={styles.card}
        >
        
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity 
      onPress={ () => navigation.navigate('Reading') }
      style={styles.titleContainer}>
        <Text style={returnTextStyle()}>
          {
            question.question.substring(0, 25) + '...'
          }
        </Text>
      </TouchableOpacity>
      
      <View style={styles.eastIcon}>
        <TouchableOpacity
        onPress={ () => navigation.navigate('Reading') }
        >
        <MaterialIcon size={40} color={theme.TEXT_COLOR} name="east" />
        </TouchableOpacity>
      </View>


      <View style={styles.save}>
      <View
      style={styles.saveButton}
      >
          { 
          question.saved == null ||
          question.saved == undefined ||
          question.saved == false
          ?
          <TouchableOpacity onPress={() => saveQuestion()}>
          <MaterialIcon size={40} color={theme.TEXT_COLOR} name="bookmark-outline" />
          </TouchableOpacity>
          : 
          <TouchableOpacity 
          onPress={() => unSaveQuestion()}
          >
          <MaterialIcon size={40} color={theme.TEXT_COLOR} name="bookmark" />
          </TouchableOpacity>
          }
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    marginBottom : 20,
  },
  titleContainer : {
    position : 'absolute',
    top : '25%',
    paddingLeft : 20,
  },
  card : {
    paddingLeft : 30,
    paddingRight : 30,
    marginBottom : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    height : 100,
    borderTopLeftRadius : 20,
    opacity : 0.7,
    borderWidth : 1,
    borderStyle : 'solid',
    borderColor : 'white',
  },
  branch : {
    paddingHorizontal : 30,
    marginBottom : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    height : 100,
    borderTopLeftRadius : 20,
    borderBottomLeftRadius : 20,
    backgroundColor : 'black',
  },
  subtitle : {
    fontFamily : ShabnamMedium,
    fontSize : windowWidth / 13,
    color : 'black',
  },  
  eastIcon : {
    position : 'absolute',
    right : 0,
    bottom : 0,
    paddingVertical : 30,
    paddingHorizontal : 20,
  },
  save : {
    position : 'absolute',
    bottom : 0,
    left : 10,
  },
  saveButton : {
  }
});

export default EachQuestion
