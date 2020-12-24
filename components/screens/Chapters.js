import React , { useState } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Footer from '../footer/Footer';
import { LalezarRegular } from '../utils/Fonts';
import SubChapter from '../utils/SubChapter';



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





const Chapters = ({ navigation }) => {

  const whichPage = navigation.getParam('whichPage');

  const [chapters , setChapters] = useState(listOfChapters);


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


  return (
    <>
      <StatusBar backgroundColor="#51344D" barStyle="light-content" />
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.myText}>زیر شاخه</Text>
          
          {
            checkExamsInSelectedOrNot() ?
            <TouchableOpacity
            onPress={() => navigation.navigate('Exam')}
            >
              <View style={styles.examButton}>
                <Text style={styles.examButtonText}>آزمون از فصل های انتخاب شده</Text>
              </View>
            </TouchableOpacity>
            :
            null
          }

        </View>

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
      </View>
      
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
    fontFamily : LalezarRegular,
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
  }
});

export default Chapters
