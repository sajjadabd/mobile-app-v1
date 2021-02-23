import React , { useRef , useEffect , useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    PixelRatio ,
    ActivityIndicator
  } from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Footer from '../footer/Footer';
import { LalezarRegular, ShabnamMedium } from '../utils/Fonts';
import EachReadingQuestion from '../utils/EachReadingQuestion';

import Swiper from 'react-native-swiper';


import styled from 'styled-components/native';

import { useSelector } from 'react-redux';

import { GET_QUESTIONS , GET_SAVED_QUESTIONS } from '../URL/Urls';


import axios from 'axios';
import { getData } from '../AsyncStorage/SecureStorage';


const Header = styled.View`
  flex : 3;
  background-color : ${props => props.theme.QUESTION_CONTAINER};
  border-bottom-left-radius : 55px;
  border-bottom-right-radius : 55px;
  padding : 40px;
  margin-bottom : 40px;
`

const LoaderHeader = styled.View`
  flex : 3;
  background-color : ${props => props.theme.QUESTION_CONTAINER};
  border-bottom-left-radius : 55px;
  border-bottom-right-radius : 55px;
  justify-content : center;
  align-items : center;
  padding : 40px;
  margin-bottom : 40px;
`


const Container = styled.View`
  flex : 1;
  background-color : ${props => props.theme.QUESTION_BACKGROUND};
`

let userInfo;

const Reading = ({navigation}) => {

    const theme = useSelector(state => state.ThemeReducer.theme);

    const mySwiper = useRef(null);

    // const currentIndex = useRef(0);
    // currentIndex.current = 1;

    const standardID = navigation.getParam('standardID');
    const branchID = navigation.getParam('branchID');
    const sesaonID = navigation.getParam('seasonID');

    console.log( branchID , standardID , sesaonID );

    const readingSavedQuestions = !(branchID || standardID || sesaonID);

    console.log('readingSavedQuestions' , readingSavedQuestions);

    const [questions, setQuestions] = useState();
    const [questionIndex , setQuestionIndex] = useState(0);


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
        console.log('questions :' , result.data.result.slice(0,5));
        setQuestions(result.data.result.slice(0,5));
      } catch (e) {
        console.log("Error Happens for fetch questions ...");
      }
    }


    const requestToServerForGetQuestions = async () => {
      console.log(GET_QUESTIONS + branchID + '/' + standardID 
      + '/' + sesaonID + '/' + userInfo.user_id);
      try {
        const result = await axios({
          method: 'GET',
          url: GET_QUESTIONS + branchID + '/' + standardID + '/' + sesaonID + '/' + userInfo.user_id,
          headers: {
            'Content-Type': 'application/json'
          },
          data : {
            
          }
        });
        console.log('questions :' , result.data.result.slice(0,5));
        setQuestions(result.data.result.slice(0,5));
      } catch (e) {
        console.log("Error Happens for fetch questions ...");
      }
    }



    const updateQuestions = async () => {
      if ( readingSavedQuestions ) {
        await requestToServerForGetSavedQuestions();
      } else {
        await requestToServerForGetQuestions();
      }
    }

  
    useEffect( () => {
      const getUserData = async () => {
        userInfo = await getData();
        await fetchQuestions();
        
        console.log(userInfo);
      }


      const fetchQuestions = async () => {
        if ( readingSavedQuestions ) {
          await requestToServerForGetSavedQuestions();
        } else {
          await requestToServerForGetQuestions();
        }
        
      }
      
      if(questions == undefined) {
        getUserData();
      }

      // getUserData();

    });




    const returnButtonRight = () => {
      return {
        backgroundColor : theme.QUESTION_CONTAINER ,
        borderTopLeftRadius : 25 ,
        borderBottomLeftRadius : 25 ,
      } 
    }


    const returnButtonLeft = () => {
      return {
        backgroundColor : theme.QUESTION_CONTAINER ,
        borderTopRightRadius : 25 ,
        borderBottomRightRadius : 25 ,
      }
    }


    const returnDotStyle = () => {
      return {
        backgroundColor: theme.QUESTION_CONTAINER, 
        width: 22, 
        height: 22,
        borderRadius: 22 / PixelRatio.get(), 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3,
      }
    }


    const calculateQuestionIndexString = () => {

      if(questions == undefined) {
        return;
      }


      let currentQuestionIndex = questionIndex + 1;
      let calculatedString = 
        ' سوال '
        +
        currentQuestionIndex
        +
        ' از '
        +
        questions.length

      if(questions.length != 0) {
        return (
          <View style={styles.questionInfo}>
            <Text style={styles.questionInfoText}>
                
                {calculatedString}

            </Text>
          </View>
        )
      } else {
        return (
          <View>
            
          </View>
        )
      }
    }

    const returnMessageContainer = () => {
      return {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
      }
    }

    const returnTextStyle = () => {
      return {
        fontFamily : ShabnamMedium,
        fontSize : windowWidth / 20,
        color : theme.TEXT_COLOR
      }
    }


    const showLoaderOrContent = () => {
      if( questions != undefined ) {
        if(questions.length == 0) {
          if( readingSavedQuestions ) {
            return (
              <Header>
                <View style={returnMessageContainer()}>
                  <Text style={returnTextStyle()}>سوالی موجود نمی باشد</Text>
                </View>
              </Header>
            )
          } else {
            return (
              <LoaderHeader>
                <View style={styles.loader}>
                  <ActivityIndicator size="large" color="#ffffff" />
                </View>
              </LoaderHeader>
            )
          }
        } else {
          return (
            <Header>
              <ScrollView>
            <View style={styles.swiperContainer}>
            {/* <Swiper 
              horizontal={true}
              ref={mySwiper}
              style={styles.swiper} 
              showsButtons={false}
              paginationStyle={styles.pagination}
              dotStyle={styles.dotStyle}
              activeDotStyle={returnDotStyle()}
              scrollEnabled={true}
              index={questionIndex}
              showsPagination={false}
            >
              {
              questions && questions.map( (item , index) => {
                return (
                  <EachReadingQuestion 
                    question={item} 
                    key={index} 
                    style={styles.slide} 
                  />
                )
              })
              }
            </Swiper>  */}
  
              {
                questions 
                && 
                <EachReadingQuestion 
                  question={questions[questionIndex]} 
                  userInfo={userInfo}
                  updateQuestions={updateQuestions}
                  style={styles.slide} 
                />
              }
          </View>
          </ScrollView>
          </Header>
          )
        }
      } else {
        return (
          <LoaderHeader>
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          </LoaderHeader>
        )
      }
    }

    return (
        <>
        <StatusBar backgroundColor={theme.QUESTION_CONTAINER} barStyle="light-content" />

        <Container>

            {showLoaderOrContent()}

        

            {calculateQuestionIndexString()}

            

            <View style={styles.navigation}>
                <View style={returnButtonRight()}>
                    <TouchableOpacity 
                    onPress={() => {
                      if(questionIndex < questions.length - 1) {
                        let newIndex = questionIndex + 1;
                        // mySwiper.current.scrollBy(1);
                        console.log(questionIndex);
                        setQuestionIndex(newIndex);
                      } else {
                        setQuestionIndex(0);
                      }
                    }}
                    style={styles.touchable}>
                        <Text style={styles.buttonText}>بعدی</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={returnButtonLeft()}>
                    <TouchableOpacity 
                      onPress={() => {
                        if(questionIndex > 0) {
                          let newIndex = questionIndex - 1;
                          // mySwiper.current.scrollBy(-1);
                          console.log(questionIndex);
                          setQuestionIndex(newIndex);
                        } else {
                          setQuestionIndex(questions.length - 1);
                        }
                      }}
                      style={styles.touchable}>
                        <Text style={styles.buttonText}>قبلی</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
        flex : 3,
        backgroundColor : '#51344D',
        borderBottomRightRadius : 55,
        borderBottomLeftRadius : 55,
        justifyContent : 'flex-start',
        alignItems : 'flex-end',
        padding : 40,
        marginBottom : 40,
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
    navigation : {
        flexDirection : 'row-reverse',
        flex : 1,
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    buttonRight : {
        backgroundColor : '#51344D',
        // backgroundColor : 'yellow',
        borderTopLeftRadius : 25,
        borderBottomLeftRadius : 25,
        
    },
    buttonLeft : {
        backgroundColor : '#51344D',
        // backgroundColor : 'yellow',
        borderTopRightRadius : 25,
        borderBottomRightRadius : 25,
    },
    buttonText : {
        color : 'white',
        fontFamily : LalezarRegular,
        fontSize : 30,
        paddingHorizontal : 20,
    },
    touchable : {
        paddingHorizontal : 20,
        paddingVertical : 10,
        // backgroundColor : 'red',
    },
    swiperContainer : {
      flex : 1,
      width : '100%'
    },
    pagination : {
      position : 'absolute',
      bottom : -90,
    },
    dotStyle : {
      backgroundColor:'rgba(0,0,0,.2)', 
      width: 22, 
      height: 22,
      borderRadius: 22 / PixelRatio.get(), 
      marginLeft: 3, 
      marginRight: 3, 
      marginTop: 3, 
      marginBottom: 3,
    },
    activeDotStyle : {
      backgroundColor: '#51344D', 
      width: 22, 
      height: 22,
      borderRadius: 22 / PixelRatio.get(), 
      marginLeft: 3, 
      marginRight: 3, 
      marginTop: 3, 
      marginBottom: 3,
    },
    loader : {
    },
    questionInfo : {

    },
    questionInfoText : {
      textAlign : 'center',
      fontSize : 25,
      fontFamily : ShabnamMedium
    }
});

export default Reading
