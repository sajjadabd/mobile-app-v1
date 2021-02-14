import React from 'react';

import { View , Text , StyleSheet } from 'react-native'
import EachSavedStandard from '../utils/EachSavedStandard';

import { useSelector } from 'react-redux';

// const numbers = [1,2,3,4,5,6,7,8,9,10];

const BranchBookmark = ({navigation}) => {

  const standards = useSelector(state => state.SavedReducer.saved.standards);

  console.log('standards : ' , standards);

  return (
    <>
      <View style={styles.scrollContent}>
        {
          standards.map( ( item , index ) => {
            return (
              <EachSavedStandard 
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

export default BranchBookmark
