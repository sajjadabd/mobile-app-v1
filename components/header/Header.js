
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import MaterialICon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {

  return (
    <>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} />
          <MaterialICon style={styles.searchIcon} size={40} color="white" name="search" />
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  header : {
    
  },
  searchBar : {
    backgroundColor : '#E5E5E5', //E5E5E5
    borderRadius : 10,
    flexDirection : 'row',
    alignItems : 'center',
    paddingHorizontal : 10,
    marginHorizontal : 20,
    marginTop : 20,
    textAlign : 'right',
  },
  input : {
    fontSize : 25,
    height : 70,
    fontFamily : 'Lalezar-Regular',
    flex : 1,
  }, 
  searchIcon : {
    color : 'black'
  }
});


export default Header
