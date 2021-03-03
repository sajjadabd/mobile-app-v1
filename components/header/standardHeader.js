
import React , { useState , useRef } from 'react';

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

import { useSelector } from 'react-redux';
import { ShabnamMedium } from '../utils/Fonts';

import axios from 'axios';

import {
  SEARCH_STANDARDS
} from '../URL/Urls'
import SubChapterLogo from '../utils/SubChapterLogo';

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


const Header = ({ setStandards , requestToServerForStandards , setShowHeaderTitle }) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  // const [text , setText] = useState('');

  const searchInput = useRef();

  const requestToServerForSearchStandards = async (text) => {
    console.log(SEARCH_STANDARDS);
    try {
      const result = await axios({
        method: 'POST',
        url: SEARCH_STANDARDS  ,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          "search" : `${text}`
        }
      });
      // console.log('questions :' , result.data.result.slice(0,10));
      setStandards(result.data.result);
    } catch (e) {
      console.log("Error Happens for fetch questions ...");
    }
  }

  const onChangeText = async (text) => {
    console.log(text);
    if( text == '' ) {
      setShowHeaderTitle(true);
      await requestToServerForStandards();
    } else {
      setShowHeaderTitle(false);
      await requestToServerForSearchStandards(text);
    }
    // await requestToServerForSearchStandards(text);
    // setText(text);
  }

  return (
    <>
      <View style={styles.header}>
        <Searchbar>
          <TextInput 
            ref={searchInput} 
            style={styles.input} 
            onChangeText={text => onChangeText(text)} 
            placeholder='جستجوی استاندارد ها . . .'
          />
          <MaterialICon style={styles.searchIcon} size={40} color={theme.MAIN_BACKGROUND} name="search" />
        </Searchbar>
      </View>
      {/* {
        searchInput == '' 
        ? 
        null
        :
        <View>
          <SubChapterLogo title={title} logo={logo} />
        </View>
      } */}
      
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
    fontSize : 20,
    height : 70,
    fontFamily : ShabnamMedium,
    flex : 1,
  }, 
  searchIcon : {
    paddingLeft : 10
  }
});


export default Header
