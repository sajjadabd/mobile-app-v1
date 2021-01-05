import React from 'react'

import { View , StyleSheet } from 'react-native'

import WorkCard from '../utils/WorkCard';

const numbers = [1,2,3,4,5,6,7,8,9,10];

const Karyabi = () => {
  return (
    <>
      <View style={styles.scrollContent}>
        {
          numbers.map( (item , index) => {
            return (
              <WorkCard key={index} />
            )
          })
        }
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  scrollContent : {
    paddingTop : 20,
  }
});

export default Karyabi
