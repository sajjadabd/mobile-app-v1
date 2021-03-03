import React , { useState , useEffect } from 'react';

import { 
  View , 
  Text , 
  StyleSheet , 
  ScrollView ,
  ActivityIndicator
} from 'react-native'

import EachQuestion from '../utils/EachQuestion';

// const numbers = [1,2,3,4,5,6,7,8,9,10];

import { useSelector } from 'react-redux';
import { getData } from '../AsyncStorage/SecureStorage';

import axios from 'axios';
import { GET_SAVED_QUESTIONS } from '../URL/Urls';
import { windowWidth } from '../utils/Dimensions';
import { ShabnamMedium } from '../utils/Fonts';

let userInfo ;


const QuestionsBookmark = ({navigation}) => {

  // const questions = useSelector(state => state.SavedReducer.saved.questions);

  const [questions , setQuestions] = useState();
  const theme = useSelector(state => state.ThemeReducer.theme);

  console.log('questions :' , questions);




  const requestToServerForGetSavedQuestions = async () => {
    console.log(GET_SAVED_QUESTIONS + userInfo.user_id);
    try {
      const result = await axios({
        method: 'GET',
        url: GET_SAVED_QUESTIONS + userInfo.user_id,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          
        }
      });
      console.log('questions :' , result.data.result);
      return result.data.result;
    } catch (e) {
      console.log("Error Happens for fetch questions ...");
    }
  }


  useEffect( () => {
    const getUserData = async () => {
      userInfo = await getData();
      await fetchQuestions();
      console.log(userInfo);
    }


    const fetchQuestions = async () => {
      const result = await requestToServerForGetSavedQuestions();

      if(questions == undefined ) {
        setQuestions(result);
      } else if(result.length != questions.length) {
        setQuestions(result);
      }
    }
    

    getUserData();

  });

  const returnTextStyle = () => {
    return {
      color : theme.TEXT_COLOR,
      padding : 30,
      fontSize : windowWidth / 24,
      fontFamily : ShabnamMedium
    }
  }

  const returnMessageContainerStyle = () => {
    return {
      backgroundColor : theme.FOOTER,
      marginHorizontal : 20,
      marginVertical : 50,
      borderRadius : 20,
      justifyContent : 'center',
      alignItems : 'center'
    }
  }

  const showLoaderOrContent = () => {
    if ( questions != undefined ) {
      if(questions.length == 0) {
        return (
          <View style={returnMessageContainerStyle()}>
            <Text style={returnTextStyle()}>
              هیچ سوال ذخیره شده ای وجود ندارد
            </Text>
          </View>
        )
      } else {
        return (
          <ScrollView>
            <View style={styles.scrollContent}>
              {
                questions && questions.map( ( item , index ) => {
                  return (
                    <EachQuestion 
                      key={index} 
                      question={item}
                      userInfo={userInfo}
                      navigation={navigation} 
                      item={item}
                    />
                  )
                })
              }
            </View>
          </ScrollView>
        )
      }
    } else {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )
    }
  }

  return (
    <>
      {showLoaderOrContent()}
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  myText : {
    fontSize : 20,
  },
  scrollContent : {
    marginLeft : 80,
    marginTop : 40,
    flex : 1,
  },
  loader : {
    flex : 1,
    marginTop : 100,
    justifyContent : 'center',
    alignItems : 'center'
  }
});

export default QuestionsBookmark
