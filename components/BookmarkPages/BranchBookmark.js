import React from 'react';

import { View , Text , StyleSheet } from 'react-native'
import SubBranch from '../utils/SubBranch';

import { useSelector } from 'react-redux';

// const numbers = [1,2,3,4,5,6,7,8,9,10];

const BranchBookmark = ({navigation}) => {

  const branches = useSelector(state => state.BranchReducer.branches);

  console.log('branches : ' , branches);

  return (
    <>
      <View style={styles.scrollContent}>
        {
          branches.data.map( ( item , index ) => {
            return (
              <SubBranch 
              key={index} 
              navigation={navigation} 
              save={true} 
              item={item} 
              branch={item.branch}
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
