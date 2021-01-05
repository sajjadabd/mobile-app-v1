import React from 'react';

import { View , Text , StyleSheet } from 'react-native'
import { LalezarRegular } from '../utils/Fonts';

const KarAfarini = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.myText}>This is Test Kar Afarini</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    padding : 20,
  },
  myText : {
    fontSize : 20,
    fontFamily : LalezarRegular
  }
});

export default KarAfarini
