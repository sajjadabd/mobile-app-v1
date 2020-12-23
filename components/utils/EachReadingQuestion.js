import React from 'react';

import { View , Text , StyleSheet } from 'react-native'
import { LalezarRegular } from './Fonts';

const EachReadingQuestion = ({question}) => {
  return (
    <>
      <View style={styles.Question}>
          <Text style={styles.myTextQuestion}>{question.question}</Text>
      </View>
      
      <View style={styles.Answer}>
          <Text style={styles.myTextAnswer}>
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
