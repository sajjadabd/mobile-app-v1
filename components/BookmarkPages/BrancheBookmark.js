import React from 'react';

import { View , Text , StyleSheet } from 'react-native'
import SubBranch from '../utils/SubBranch';

const numbers = [1,2,3,4,5,6,7,8,9,10];

const BrancheBookmark = ({navigation}) => {


  return (
    <>
      <View style={styles.scrollContent}>
        {
          numbers.map( ( item , index ) => {
            return (
              <SubBranch key={index} navigation={navigation} save={true} />
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
    paddingTop : 20,
  },
});

export default BrancheBookmark
