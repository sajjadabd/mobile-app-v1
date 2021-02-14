import React from 'react';

import { View , Text , StyleSheet } from 'react-native'
import EachQuestion from '../utils/EachQuestion';

// const numbers = [1,2,3,4,5,6,7,8,9,10];

import { useSelector } from 'react-redux';

const QuestionsBookmark = ({navigation}) => {

  const questions = useSelector(state => state.SavedReducer.saved.questions);

  console.log('questions : ' , questions);

  return (
    <>
      <View style={styles.scrollContent}>
        {
          questions.map( ( item , index ) => {
            return (
              <EachQuestion 
              key={index} 
              navigation={navigation} 
              item={item}
              />
            )
          })
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  myText : {
    fontSize : 20,
  },
  scrollContent : {
    marginLeft : 80,
    marginTop : 40,
    flex : 1,
  },
});

export default QuestionsBookmark
