import React , { useRef , useState } from 'react'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    PixelRatio
  } from 'react-native';
  
import { windowHeight , windowWidth } from '../utils/Dimensions';

import Footer from '../footer/Footer';
import { LalezarRegular } from '../utils/Fonts';

import ExamQuestionContainer from '../utils/ExamQuestionContainer';

import Swiper from 'react-native-swiper';


import styled from 'styled-components/native';

import { useSelector } from 'react-redux';

const duration = 100;


const Header = styled.View`
  flex : 3;
  background-color : ${props => props.theme.FIRST_BACKGROUND};
  border-bottom-left-radius : 55px;
  border-bottom-right-radius : 55px;
  padding : 40px;
  margin-bottom : 40px;
`

const Container = styled.View`
  flex : 1;
  background-color : ${props => props.theme.SECOND_BACKGROUND};
`


// const numbers = [1,2,3];

const radioButtonsData = [
    [
      {
        label: 'گزینه ی اول'
      },
      {
        label: 'گزینه ی دوم'
      },
      {
        label: 'گزینه ی سوم'
      },
      {
        label: 'گزینه ی چهارم'
      }
    ],
    [
      {
        label: 'سلام'
      },
      {
        label: 'خوبی'
      },
      {
        label: 'چطوری'
      },
      {
        label: 'چه خبر ؟'
      }
    ],
    [
      {
        label: '1'
      },
      {
        label: '2'
      },
      {
        label: '3'
      },
      {
        label: '4'
      }
    ]
];


const Exam = ({navigation}) => {


    const returnButtonRight = () => {
      return {
        backgroundColor : theme.FIRST_BACKGROUND ,
        borderTopLeftRadius : 25 ,
        borderBottomLeftRadius : 25 ,
      } 
    }


    const returnButtonLeft = () => {
      return {
        backgroundColor : theme.FIRST_BACKGROUND ,
        borderTopRightRadius : 25,
        borderBottomRightRadius : 25,
      }
    }


    const returnDotStyle = () => {
      return {
        backgroundColor: theme.FIRST_BACKGROUND, 
        width: 22, 
        height: 22,
        borderRadius: 22 / PixelRatio.get(), 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3,
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
        <StatusBar backgroundColor={theme.FIRST_BACKGOURND} barStyle="light-content" />

        <Container>

            <Header>

                <View style={styles.swiperContainer}>
                  <Swiper 
                  horizontal={true}
                  ref={mySwiper}
                  style={styles.swiper} 
                  showsButtons={false}
                  paginationStyle={styles.pagination}
                  dotStyle={styles.dotStyle}
                  activeDotStyle={returnDotStyle()}
                  scrollEnabled={false}
                  >
                    {
                    radioButtonsData.map( (item , index) => {
                      return (
                        <ExamQuestionContainer 
                        radioButtonsData={radioButtonsData[index]}
                        key={index} 
                        style={styles.slide}/>
                      )
                    })
                    }
                  </Swiper>

                </View>

            </Header>

            <View style={styles.navigation}>
                <View 
                style={returnButtonRight()}>
                    <TouchableOpacity 
                    onPress={() => {
                      if(currentIndex.current < radioButtonsData.length) {
                        mySwiper.current.scrollBy(1);
                        currentIndex.current++;
                        console.log(currentIndex.current);
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
                      if(currentIndex.current > 1) {
                        mySwiper.current.scrollBy(-1);
                        currentIndex.current--;
                        console.log(currentIndex.current);
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
    }
});

export default Exam
