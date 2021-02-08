import React , {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';
import Footer from '../footer/Footer';

import { LalezarRegular } from '../utils/Fonts';

import QuestionsBookmark from '../BookmarkPages/QuestionsBookmark';
import BranchBookmark from '../BookmarkPages/BranchBookmark';

import { useSelector } from 'react-redux';

import styled from 'styled-components/native';

import SwitchSelector from "react-native-switch-selector";

const options = [
  { label: "سوالات", value: "questions" },
  { label: "زیر شاخه", value: "standards" },
];


const Container = styled.View`
  flex : 7;
  background-color  : ${props => props.theme.MAIN_BACKGROUND};
`


const Bookmark = ({ navigation }) => {

  const [selectedIndex , setSelectedIndex] = useState(1);

  const theme = useSelector(state => state.ThemeReducer.theme)

  const handleIndexChange = (value) => {
    let index = 0;
    if ( value == "standards" ) {
      index = 1;
    } else {
      index = 0;
    }
    setSelectedIndex(index);
  };

  const whichPage = navigation.getParam('whichPage');

  const returnTabStyle = () => {
    return {
      backgroundColor : theme.MAIN_BACKGROUND,
      borderRadius : 0,
    }
  }

  const returnActiveTabStyle = () => {
    return {
      backgroundColor : theme.MAIN_BACKGROUND,
      borderWidth : 0,
    }
  }


  const switchStyle = () => {
    return {
      backgroundColor : theme.MAIN_BACKGROUND,
    }
  }

  const switchSelectedTextStyle = () => {
    return {
      color : theme.TEXT_COLOR,
      fontSize : 20,
      fontFamily : LalezarRegular,
    }
  }

  const switchTextStyle = () => {
    return {
      color : theme.MAIN_BACKGROUND,
      fontSize : 20,
      fontFamily : LalezarRegular,
    }
  }

  return (
    <>
    <StatusBar backgroundColor={theme.MAIN_BACKGROUND} barStyle="light-content" />
    
    <View style={styles.body}>

      <SwitchSelector
        initial={1}
        onPress={value => handleIndexChange(value)}
        textColor={theme.TEXT_COLOR}
        selectedColor={theme.TEXT_COLOR}
        buttonColor={theme.BUTTON_COLOR}
        borderColor='transparent'
        buttonMargin={0}
        borderRadius={0}
        animationDuration={100}
        textStyle={switchTextStyle()}
        selectedTextStyle={switchSelectedTextStyle()}
        hasPadding={true}
        options={options}
        height={70}
        fontSize={20}
        style={switchStyle()}
      />


      <Container>

        <ImageBackground
          style={styles.image}
          source={require('../images/bg.png') }
        >
        

        <ScrollView style={styles.scroll}>
          
          {
            selectedIndex == 0 
            ?
            <QuestionsBookmark navigation={navigation} />
            :
            <BranchBookmark navigation={navigation} />
          }


        </ScrollView>

        <Footer navigation={navigation} whichPage={whichPage} />
        
        
        </ImageBackground>

      </Container>
      
      
    </View>
    
    </>
  )
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    justifyContent : 'space-between',
    backgroundColor  : '#6FA6B6'
  },
  myText : {
    color : 'black',
    padding : 20,
    fontSize : 25,
  },
  tabs : {
    flex : 1,
    backgroundColor : '#4D7C8A',
    flexDirection : 'row-reverse',
  }, 
  item : {
    flex : 1,
    // borderWidth : 1,
    borderBottomWidth : 2,
    
  },
  seperatorContainer : {
    borderBottomWidth : 2,
    height : '100%',
    alignItems : 'center',
    justifyContent : 'center'
  },
  seperator : {
    width : 2,
    height : '80%',
    marginVertical : 10,
    backgroundColor : 'black',
  },
  itemText : {
    color : 'white',
    fontSize : 20,
    fontFamily : LalezarRegular,
  },
  container : {
    paddingLeft : 50,
    flex : 7,
    backgroundColor : '#6FA6B6',
  },
  scroll : {
    flex : 1,
  },
  touchableButton : {
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center',
  },
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
  },
});




const tabStyles = StyleSheet.create({
  tabsContainerStyle: {
    height : 70,
    borderRadius : 0,
  },
  tabStyle: {
    backgroundColor : 'rgba(255,255,255,0.1)',
    borderColor : 'rgba(255,255,255,0.1)',
    borderRadius : 0,
  },
  firstTabStyle: {
    borderWidth : 0,
  },
  lastTabStyle: {
    borderWidth : 0,
  },
  tabTextStyle: {
    color : 'black',
    fontFamily : LalezarRegular,
    fontSize : 15,
  },
  activeTabStyle: {
    backgroundColor : '#51344D',
    borderWidth : 0,
  },
  activeTabTextStyle: {
    color : 'white',
    fontFamily : LalezarRegular,
    fontSize : 30,
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  }
});


export default Bookmark
