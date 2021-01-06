import React from 'react';

import { View , Text , StyleSheet } from 'react-native'
import { LalezarRegular, ShabnamMedium } from './Fonts';

import { useSelector } from 'react-redux';

const EachReadingQuestion = ({question}) => {


  const theme = useSelector(state => state.ThemeReducer.theme);

  const returnQuestionTextStyle = () => {
    return {
      color : 'white',
      fontSize : 35,
      fontFamily : ShabnamMedium,
    }
  }


  const returnAnswerTextStyle = () => {
    return {
      color : 'white',
      fontSize : 20,
      fontFamily : ShabnamMedium,
    }
  }

  return (
    <>
      <View style={styles.Question}>
          <Text style={returnQuestionTextStyle()}>{question.question}</Text>
      </View>
      
      <View style={styles.Answer}>
          <Text style={returnAnswerTextStyle()}>
            {question.answer}
          </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
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
});

export default EachReadingQuestion
