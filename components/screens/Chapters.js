import React , { useState } from 'react'

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
import SubChapter from '../utils/SubChapter';

import styled from 'styled-components/native';

import { useSelector } from 'react-redux';

const listOfChapters = [
  { 
    chapter : 'فصل 1',
    subject : 'موضوع',
    selectedExam : false
  },
  { 
    chapter : 'فصل 2',
    subject : 'موضوع',
    selectedExam : false
  },
  { 
    chapter : 'فصل 3',
    subject : 'موضوع',
    selectedExam : false
  },
  { 
    chapter : 'فصل 4',
    subject : 'موضوع',
    selectedExam : false
  },
  { 
    chapter : 'فصل 5',
    subject : 'موضوع',
    selectedExam : false
  }
]



const Header = styled.View`
  height : 180px;
  background-color : ${props => props.theme.BUTTON_COLOR};
  border-bottom-right-radius : 55px;
  border-bottom-left-radius : 55px;
  justify-content : flex-end;
  align-items : center;
  padding : 40px;
`

const Container = styled.View`
  flex : 1;
  background-color : ${props => props.theme.MAIN_BACKGROUND};
`



const Chapters = ({ navigation }) => {

  const whichPage = navigation.getParam('whichPage');

  const [chapters , setChapters] = useState(listOfChapters);

  const theme = useSelector(state => state.ThemeReducer.theme)

  const checkExamsInSelectedOrNot = () => {
    let result = false;
    result = chapters.find( item => {
      if(item.selectedExam) {
        return true;
      }
    })
    return result;
  }

  const changeSelectedExams = (index) => {
    let newChapter = chapters.map( (item , i) => {
      if(index === i) {
        return {
          ...item,
          selectedExam : !item.selectedExam
        }
      } else {
        return item;
      }
    });
    setChapters(newChapter);
  }


  const returnBigTitleText = () => {
    return {
      color : theme.TEXT_COLOR,
      fontSize : 55,
      fontFamily : LalezarRegular,
    }
  }


  const examButtonStyle = () => {
    return {
      backgroundColor : theme.MAIN_BACKGROUND,
      paddingHorizontal : 20,
      paddingVertical : 10,
      borderRadius : 10,
    }
  }


  const examButtonText = () => {
    return {
      color: theme.TEXT_COLOR ,
      fontFamily : LalezarRegular ,
    }
  }

  return (
    <>
      <StatusBar backgroundColor={theme.BUTTON_COLOR} barStyle="light-content" />

      <Container>

        <ImageBackground
          style={styles.image}
          source={require('../images/bg.png')}
        >

        <Header>
          <Text style={returnBigTitleText()}>زیر شاخه</Text>
          
          {
            checkExamsInSelectedOrNot() ?
            <TouchableOpacity
            onPress={() => navigation.navigate('Exam')}
            >
              <View style={examButtonStyle()}>
                <Text style={examButtonText()}>آزمون از فصل های انتخاب شده</Text>
              </View>
            </TouchableOpacity>
            :
            null
          }

        </Header>

        <ScrollView style={styles.scroll}>
            <View style={styles.scrollContent}>
            {chapters.map( ( item , index ) => {
                return (
                    <SubChapter 
                    key={index} 
                    index={index}
                    changeSelectedExams={changeSelectedExams}
                    navigation={navigation} 
                    item={item}/>
                )
            })}
            </View>
        </ScrollView>

        <Footer navigation={navigation} whichPage={whichPage}/>

        </ImageBackground>

      </Container>
      
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
  },
  myText : {
    color : 'white',
    fontSize : 55,
    fontFamily : ShabnamMedium,
  },
  scroll : {
    flex : 1,
  },
  scrollContent : {
    flex : 1,
    paddingTop : 40,
  },
  examButton : {
    backgroundColor : '#4D7C8A',
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderRadius : 10,
  },
  examButtonText : {
    color: 'white',
    fontFamily : LalezarRegular,
  },
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
  },
});

export default Chapters
