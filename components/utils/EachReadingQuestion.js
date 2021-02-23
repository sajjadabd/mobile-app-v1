import React , { useState , useEffect } from 'react';

import { 
  View , 
  Text , 
  StyleSheet ,
  TouchableOpacity ,
} from 'react-native'
import { LalezarRegular, ShabnamMedium } from './Fonts';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


import { useSelector } from 'react-redux';
import { windowWidth } from './Dimensions';
import { getData } from '../AsyncStorage/SecureStorage';

import { SAVE_QUESTIONS, UNSAVE_QUESTIONS } from '../URL/Urls';

import axios from 'axios';


const Icons = {
  home : 'home',
  altHome : 'house-siding',
  work : 'work',
  altWork : 'work-outline',
  bookmark : 'bookmark',
  altBookmark : 'bookmark-outline',
  person : 'person',
  altPerson : 'person-outline'
}








const EachReadingQuestion = ({question , userInfo , updateQuestions }) => {

  console.log('userInfo' , userInfo);

  const theme = useSelector(state => state.ThemeReducer.theme);

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


  const unSaveQuestion = async (data) => {
    console.log(data);
    // dispatch({ type : UPDATE_UNSAVE_STANDARD_IN_BRANCH , payload : data });
    await requestToServerForUnSaveQuestion();
    // setSave(false);
    updateQuestions();
  }
  
  const saveQuestion = async (data) => {
    console.log(data);
    // dispatch({ type : UPDATE_SAVE_STANDARD_IN_BRANCH , payload : data });
    await requestToServerForSaveQuestion();
    updateQuestions();
    // setSave(true);
  }


  const returnQuestionTextStyle = () => {
    return {
      color : 'white' ,
      fontSize : windowWidth / 18 ,
      fontFamily : ShabnamMedium ,
    }
  }


  const returnAnswerTextStyle = () => {
    return {
      color : 'white',
      fontSize : windowWidth / 25,
      fontFamily : ShabnamMedium,
      padding : 10,
      borderWidth : 1,
      borderColor : 'white',
      borderRadius : 10,
      marginBottom : 10,
    }
  }

  const returnCorrectAnswerStyle = () => {
    return {
      backgroundColor : '#f3f3f3',
      color : theme.MAIN_BACKGROUND ,
    }
  }

  


  return (
    <View style={styles.QuestionContainer}>
      
        { 
        question.saved == null || 
        question.saved == undefined || 
        question.saved == false
        ?
        <TouchableOpacity
          onPress={() => saveQuestion()}
          style={styles.saveButton}
        >
          <MaterialIcon size={40} color={theme.TEXT_COLOR} name="bookmark-outline" />
        </TouchableOpacity>
        : 
        <TouchableOpacity
          onPress={() => unSaveQuestion()}
          style={styles.saveButton}
        >
          <MaterialIcon size={40} color={theme.TEXT_COLOR} name="bookmark" />
        </TouchableOpacity>
      }

      <View style={styles.Question}>
          <Text style={returnQuestionTextStyle()}>
            {question.question}
          </Text>
      </View>
      
      <View style={styles.Answer}>
          <Text style={[returnAnswerTextStyle() , returnCorrectAnswerStyle() ]}>
            {question.first}
          </Text>
          <Text style={returnAnswerTextStyle()}>
            {question.second}
          </Text>
          <Text style={returnAnswerTextStyle()}>
            {question.third}
          </Text>
          <Text style={returnAnswerTextStyle()}>
            {question.fourth}
          </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  QuestionContainer : {

  },
  Question : {

  },
  Answer : {
      paddingTop : 40,
  },
  myTextQuestion : {
      color : 'white',
      fontSize : 55,
      fontFamily : LalezarRegular,
  },
  myTextAnswer : {
      color : 'white',
      fontSize : 25,
      fontFamily : LalezarRegular,
  },
  saveButton : {
    alignSelf : 'flex-start'
  }
});

export default EachReadingQuestion
