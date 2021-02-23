import React , { useRef , useEffect , useState } from 'react'

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

import Footer from '../footer/Footer';
import { LalezarRegular } from '../utils/Fonts';

import ExamQuestionContainer from '../utils/ExamQuestionContainer';

import Swiper from 'react-native-swiper';


import styled from 'styled-components/native';

import { useSelector } from 'react-redux';

import { 
  GET_QUESTIONS_FOR_ALL_SEASONS,
  GET_QUESTIONS_FOR_SELECTED_SEASONS
} from '../URL/Urls';

import axios from 'axios';

const duration = 100;


const Header = styled.View`
  flex : 4;
  background-color : ${props => props.theme.QUESTION_CONTAINER};
  border-bottom-left-radius : 55px;
  border-bottom-right-radius : 55px;
  padding : 30px;
  margin-bottom : 40px;
`

const Container = styled.View`
  flex : 1;
  background-color : ${props => props.theme.QUESTION_BACKGROUND};
`


let answers ;

let numberOfRightAnswers ;
let numberOfDontAnswers ;
let numberOfWrongAnswers ;


const Exam = ({navigation}) => {

    
    const branchID = navigation.getParam('branchID');
    const standardID = navigation.getParam('standardID');
    const selectedSeasons = navigation.getParam('selectedSeasons');

    const [questions, setQuestions] = useState([]);
    const [questionIndex , setQuestionIndex] = useState(0);
    
    const [ examFinished , setExamFinished ] = useState(false);
    

    //Array(seasons.length).fill(false)
    console.log( branchID , standardID  );

    const setNewAnswer = (e , questionNumber) => {
      console.log(e , questionNumber)
      answers[questionNumber] = e.index;
      console.log(answers);
    }

    const requestToServerForGetQuestions = async () => {
      console.log(GET_QUESTIONS_FOR_ALL_SEASONS + branchID + '/' + standardID );
      try {
        const result = await axios({
          method: 'GET',
          url: GET_QUESTIONS_FOR_ALL_SEASONS + branchID + '/' + standardID ,
          headers: {
            'Content-Type': 'application/json'
          },
          data : {
            
          }
        });
        console.log('questions :' , result.data.result.slice(0,10));
        setQuestions(result.data.result.slice(0,10));
      } catch (e) {
        console.log("Error Happens for fetch questions ...");
      }
    }


    const requestToServerForGetQuestionsForSelectedSeasons = async () => {
      console.log(GET_QUESTIONS_FOR_SELECTED_SEASONS + branchID + '/' + standardID );
      try {
        const result = await axios({
          method: 'POST',
          url: GET_QUESTIONS_FOR_SELECTED_SEASONS + branchID + '/' + standardID ,
          headers: {
            'Content-Type': 'application/json'
          },
          data : {
            "seasons" : selectedSeasons
          }
        });
        console.log('questions :' , result.data.result.slice(0,10));
        setQuestions(result.data.result.slice(0,10));
      } catch (e) {
        console.log("Error Happens for fetch selected seasons questions ...");
      }
    }
  
    useEffect( () => {

      answers = Array(10).fill(false);
      numberOfRightAnswers = 0 ;
      numberOfDontAnswers = 0 ;
      numberOfWrongAnswers = 0 ;

      const seasons = navigation.getParam('selectedSeasons');

      console.log('seasons :' , seasons);
      
      const fetchQuestions = async () => {
        if( seasons == undefined || seasons == null ) {
          await requestToServerForGetQuestions();
        } else {
          await requestToServerForGetQuestionsForSelectedSeasons();
        }
      }

      if(questions == undefined || questions.length == 0) {
        fetchQuestions();
      }
    });


    const calculateAnswersData = () => {
      for(let i=0;i<answers.length;i++) {
        if( answers[i] == 1 ){
          numberOfRightAnswers++;
        } else if ( answers[i] == false ) {
          numberOfDontAnswers++;
        } else {
          numberOfWrongAnswers++;
        }
      }
    }


    const returnButtonCenter = () => {
      return {
        backgroundColor : theme.QUESTION_CONTAINER ,
        borderRadius : 25,
      } 
    }


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
        borderTopRightRadius : 25,
        borderBottomRightRadius : 25,
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

    const returnTextStyle = () => {
      return {
        color : 'white',
        fontFamily : LalezarRegular,
        fontSize : windowWidth / 15,
        paddingHorizontal : 20,
      }
    }

    const showLoaderOrContent = () => {
      if(questions.length != 0) {
        return (
              <Header>
                <View style={styles.swiperContainer}>
                  {/* <Swiper 
                  horizontal={true}
                  ref={mySwiper}
                  style={styles.swiper} 
                  showsButtons={false}
                  paginationStyle={styles.pagination}
                  dotStyle={styles.dotStyle}
                  activeDotStyle={returnDotStyle()}
                  scrollEnabled={false}
                  index={questionIndex}
                  >
                    <ScrollView>
                    {
                    questions && questions.map( (item , index) => {
                      return (
                        <ExamQuestionContainer 
                          question={item}
                          key={index} 
                          style={styles.slide}
                        />
                      )
                    })
                    }
                    </ScrollView>
                  </Swiper> */}
                  <ScrollView>
                    {
                    questions && questions.map( (item , index) => {
                      return (
                        <ExamQuestionContainer 
                          question={item}
                          key={index} 
                          index={index}
                          style={styles.slide}
                          setNewAnswer={setNewAnswer}
                        />
                      )
                    })
                    }
                    </ScrollView>
                </View>
            </Header>
        )
      } else {
        return (
          <Header>
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          </Header>
        )
      }
    }

    const theme = useSelector(state => state.ThemeReducer.theme)

    const currentIndex = useRef(0);
    currentIndex.current = 1;
    // console.log(radioButtonsData.length);

    const mySwiper = useRef(null);
    // const prevButton = useRef(null);
    // const [myIndex , setIndex] = useState(0);

    return (
        <>
        <StatusBar backgroundColor={theme.QUESTION_CONTAINER} barStyle="light-content" />

        <Container>

            {
              examFinished == false 
              ?
              showLoaderOrContent()
              :
              <Header>
                <View>
                  <Text style={returnTextStyle()}>تعداد سوال صحیح :</Text>
                  <Text style={returnTextStyle()}>
                    {numberOfRightAnswers}
                  </Text>

                  <Text style={returnTextStyle()}>تعداد سوال غلط :</Text>
                  <Text style={returnTextStyle()}>
                    {numberOfWrongAnswers}
                  </Text>

                  <Text style={returnTextStyle()}>تعداد سوال پاسخ داده نشده :</Text>
                  <Text style={returnTextStyle()}>
                    {numberOfDontAnswers}
                  </Text>
                </View>
              </Header>
            }
            

            

            <View style={styles.navigation}>
              <View>
                <View 
                style={returnButtonCenter()}>
                    <TouchableOpacity 
                    onPress={() => {
                      calculateAnswersData();
                      setExamFinished(true);
                      console.log('Exam Finished :' , examFinished);
                    }}
                    style={styles.touchable}>
                        <Text style={styles.buttonText}>اتمام آزمون</Text>
                    </TouchableOpacity>
                </View>
              </View>
                {/* <View 
                style={returnButtonRight()}>
                    <TouchableOpacity 
                    onPress={() => {
                      if(questionIndex < questions.length - 1) {
                        let newIndex = questionIndex + 1;
                        mySwiper.current.scrollBy(1);
                        console.log(questionIndex);
                        setQuestionIndex(newIndex);
                      }
                    }}
                    style={styles.touchable}>
                        <Text style={styles.buttonText}>بعدی</Text>
                    </TouchableOpacity>
                </View>
                
                <View 
                style={returnButtonLeft()}>
                    <TouchableOpacity 
                    onPress={() => {
                      if(questionIndex > 0) {
                        let newIndex = questionIndex - 1;
                        mySwiper.current.scrollBy(-1);
                        console.log(questionIndex);
                        setQuestionIndex(newIndex);
                      }
                    }}
                    style={styles.touchable}>
                        <Text style={styles.buttonText}>قبلی</Text>
                    </TouchableOpacity>
                </View> */}
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
        // justifyContent : 'flex-start',
        // alignItems : 'flex-end',
        padding : 40,
        marginBottom : 40,
    },
    myTextAnswer : {
        color : 'white',
        fontSize : 25,
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
    navigation : {
        flexDirection : 'row-reverse',
        flex : 1,
        justifyContent : 'center',
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
        fontSize : windowWidth / 15,
        paddingHorizontal : 20,
    },
    touchable : {
        paddingHorizontal : 20,
        paddingVertical : 10,
        // backgroundColor : 'red',
    },
    QuestionContainer : {

    },
    swiperContainer : {
      flex : 1,
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
      flex : 1 ,
      justifyContent : 'center' ,
      alignItems : 'center' ,
    }
});

export default Exam
