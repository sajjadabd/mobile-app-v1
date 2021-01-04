
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

import styled from 'styled-components/native';

const Searchbar = styled.View`
  background-color : ${props => props.theme.SEARCH_COLOR};
  border-radius : 10px;
  flex-direction : row;
  align-items : center;
  padding : 0 10px;
  margin : 0 20px;
  margin-top : 20px;
  text-align : right;
`


const Header = () => {

  return (
    <>
      <View style={styles.header}>
        <Searchbar>
          <TextInput style={styles.input} />
          <MaterialICon style={styles.searchIcon} size={40} color="white" name="search" />
        </Searchbar>
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
