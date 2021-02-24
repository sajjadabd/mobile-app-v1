import React from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Footer from '../footer/Footer';
import { LalezarRegular, ShabnamMedium } from '../utils/Fonts';

import styled from 'styled-components/native';

import { useSelector } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';


const Header = styled.View`
  height : 180px;
  background-color : ${props => props.theme.BUTTON_COLOR};
  border-bottom-right-radius : 55px;
  border-bottom-left-radius : 55px;
  justify-content : flex-end;
  align-items : center;
  padding : 40px;
  margin-bottom : 40px;
`

const Container = styled.View`
  flex : 1;
  background-color : ${props => props.theme.MAIN_BACKGROUND};
`


const BlockButton = styled.View`
  background-color : ${props => props.theme.BUTTON_COLOR};
  border-radius : 20px;
  padding : 20px;
  margin : 20px;
`

const SubBranch = ({ navigation }) => {

  const whichPage = navigation.getParam('whichPage');

  const standardID = navigation.getParam('standardID');
  const branchID = navigation.getParam('branchID');
  const standardName = navigation.getParam('standardName');
  // const seasons = navigation.getParam('seasons');

  console.log('standardName' , standardName);

  const chapterData = {
    standardID ,
    standardName ,
    branchID
  }

  const theme = useSelector(state => state.ThemeReducer.theme)

  const returnTextStyle = () => {
    return {
      color : theme.TEXT_COLOR,
      fontSize : windowWidth / 13,
      fontFamily : ShabnamMedium,
    }
  }

  const returnTitleTextStyle = () => {
    return {
      color : theme.TEXT_COLOR,
      fontSize : windowWidth / 13,
      fontFamily : LalezarRegular,
    }
  }

  return (
    <>
      <StatusBar backgroundColor={theme.BUTTON_COLOR} barStyle="light-content" />

      <Container>

        <ImageBackground
        style={styles.image}
        source={require('../images/bg.png') }
        >

        <Header>
          <Text style={returnTitleTextStyle()}>
            {
              standardName
            }
          </Text>
        </Header>

        

        <View style={styles.touchableContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chapters' , chapterData )}
          >
            <View >
            <LinearGradient 
              colors={[
                'rgba(255,255,255,0.3)', 
                'rgba(255,255,255,0)', 
                'rgba(255,255,255,0.3)',
              ]} 
              style={styles.blockButton}
            >
              <View style={styles.iconContainer}>
                <MaterialIcon size={80} color={theme.TEXT_COLOR} name="list-alt" />
              </View>
              <Text style={returnTextStyle()}>نمونه سوالات</Text>
            </LinearGradient>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Exam' , chapterData )}
          >
          <View>
            <LinearGradient 
              colors={[
                'rgba(255,255,255,0.3)', 
                'rgba(255,255,255,0)', 
                'rgba(255,255,255,0.3)']} 
              style={styles.blockButton}
            >
            <View style={styles.iconContainer}>
              <MaterialIcon size={80} color={theme.TEXT_COLOR} name="edit" />
            </View>
            <Text style={returnTextStyle()}>آزمون جامع</Text>
            </LinearGradient>
          </View>
          </TouchableOpacity>
        </View>

        </ImageBackground>

      </Container>
      <Footer navigation={navigation} whichPage={whichPage}/>
    </>
  )
}


const styles = StyleSheet.create({
  body : {
    flex : 1,
    backgroundColor : '#6FA6B6',
  },
  header : {
    height : 180,
    backgroundColor : '#51344D',
    borderBottomRightRadius : 55,
    borderBottomLeftRadius : 55,
    justifyContent : 'flex-end',
    alignItems : 'center',
    padding : 40,
    marginBottom : 40,
  },
  myText : {
    color : 'white',
    fontSize : 55,
    fontFamily : LalezarRegular,
  },
  myBlockText : {
    color : 'white',
    fontSize : 45,
    fontFamily : LalezarRegular,
  },
  block : {
    backgroundColor : '#4D7C8A',
    borderRadius : 20,
    paddingHorizontal : 20,
    paddingVertical : 20,
    marginHorizontal : 20,
    marginVertical : 20,
  },
  iconContainer : {
    position : 'absolute',
    left : 10,
    top : -30,
  },
  touchableContainer : {
    flex : 1,
    justifyContent : 'center',
  },
  blockButton : {
    borderRadius : 20,
    paddingHorizontal : 20,
    paddingVertical : 25,
    margin : 20,
  },
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
  },
});

export default SubBranch
