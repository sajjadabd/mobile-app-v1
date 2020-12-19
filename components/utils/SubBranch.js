import React from 'react';

import { View , Text , TouchableOpacity , StyleSheet } from 'react-native';

import { windowWidth } from './Dimensions';


import MaterialICon from 'react-native-vector-icons/MaterialIcons';


const SubBranch = () => {
  return (
    <TouchableOpacity 
      onPress={ () => null }
      style={styles.branch}> 
      <Text style={styles.subtitle}>زیر شاخه</Text>
      <View>
        <MaterialICon size={40} color="white" name="east" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  branch : {
    paddingHorizontal : 30,
    marginBottom : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    height : 100,
    borderTopLeftRadius : 20,
    borderBottomLeftRadius : 20,
    backgroundColor : '#4D7C8A',
  },
  subtitle : {
    fontFamily : 'Lalezar-Regular',
    fontSize : windowWidth / 13,
    color : 'white',
  },  
});

export default SubBranch
