import React from 'react';

import { View , Text , StyleSheet } from 'react-native'
import { LalezarRegular, ShabnamMedium } from './Fonts';

import { useSelector } from 'react-redux';
import { windowWidth } from './Dimensions';

const EachReadingQuestion = ({question}) => {


  const theme = useSelector(state => state.ThemeReducer.theme);

  const returnQuestionTextStyle = () => {
    return {
      color : 'white',
      fontSize : windowWidth / 15,
      fontFamily : ShabnamMedium,
    }
  }


  const returnAnswerTextStyle = () => {
    return {
      color : 'white',
      fontSize : windowWidth / 20,
      fontFamily : ShabnamMedium,
    }
  }

  return (
    <>
      <View style={styles.Question}>
          <Text style={returnQuestionTextStyle()}>
            {question.question}
          </Text>
      </View>
      
      <View style={styles.Answer}>
          <Text style={returnAnswerTextStyle()}>
            {question.first}
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
