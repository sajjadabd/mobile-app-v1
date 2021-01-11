import React , { useState , useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PixelRatio
} from 'react-native';
import Footer from '../footer/Footer';


import { useSelector } from 'react-redux';

import styled from 'styled-components/native';

import Karyabi from '../WorkPages/Karyabi';

import KarAfarini from '../WorkPages/KarAfarini';

import SwitchSelector from "react-native-switch-selector";
import { LalezarRegular } from '../utils/Fonts';


const options = [
  { label: "کارآفرینی", value: "karafarini" },
  { label: "کاریابی", value: "karyabi" },
];


const Container = styled.View`
  flex : 1;
  background-color  : ${props => props.theme.MAIN_BACKGROUND};
`


const Work = ({ navigation }) => {

  const [selectedIndex , setSelectedIndex] = useState(1);

  const theme = useSelector(state => state.ThemeReducer.theme)

  const whichPage = navigation.getParam('whichPage');


  const handleIndexChange = (value) => {
    let index = 0;
    if ( value == "karyabi" ) {
      index = 1;
    } else {
      index = 0;
    }
    console.log(selectedIndex , index);
    setSelectedIndex(index);
  };

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
        <View style={styles.scroll}>
          <ScrollView style={styles.scrollContent}>
            {
              selectedIndex == 0 
              ?
              <KarAfarini />
              :
              <Karyabi  />
            }
          </ScrollView>
        </View>

      </Container>

      <Footer navigation={navigation} whichPage={whichPage}/>
    </>
  )
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
  },
  scroll : {
    flex : 1,
  },
  scrollContent : {
    flex : 1,
    

  }
});


export default Work
