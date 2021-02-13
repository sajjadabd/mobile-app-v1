import React , { useState } from 'react'

import { View , StyleSheet } from 'react-native'
import WorkCard from '../utils/WorkCard';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';

const Karyabi = () => {

  const worksFromRedux = useSelector(state => state.WorkReducer.works);

  const [works , setWorks] = useState(worksFromRedux);

  console.log('works : ' , works);


  return (
    <>
      <View style={styles.scrollContent}>
        {
          works.map( (item , index) => {
            return (
              <WorkCard key={index} item={item} />
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
