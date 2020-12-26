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

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Footer from '../footer/Footer';
import { LalezarRegular } from '../utils/Fonts';
import EachReadingQuestion from '../utils/EachReadingQuestion';

import Swiper from 'react-native-swiper'

const questions = [
  {
    question : 'سوال 1',
    answer : 'جواب 1'
  },
  {
    question : 'سوال 2',
    answer : 'جواب 2'
  },
  {
    question : 'سوال 3',
    answer : 'جواب 3'
  }
]

const Reading = ({navigation}) => {

    const mySwiper = useRef(null);

    const currentIndex = useRef(0);
    currentIndex.current = 1;

    return (
        <>
        <StatusBar backgroundColor="#51344D" barStyle="light-content" />
        <View style={styles.body}>
            <View style={styles.header}>

                <View style={styles.swiperContainer}>
                  <Swiper 
                  horizontal={true}
                  ref={mySwiper}
                  style={styles.swiper} 
                  showsButtons={false}
                  paginationStyle={styles.pagination}
                  dotStyle={styles.dotStyle}
                  activeDotStyle={styles.activeDotStyle}
                  scrollEnabled={true}
                  >
                    {
                    questions.map( (item , index) => {
                      return (
                        <EachReadingQuestion 
                        question={questions[index]}
                        key={index} 
                        style={styles.slide}
                        />
                      )
                    })
                    }
                  </Swiper>

                </View>
                
            
            </View>

            <View style={styles.navigation}>
                <View style={styles.buttonRight}>
                    <TouchableOpacity 
                    onPress={() => {
                      // if(currentIndex.current < questions.length) {
                        mySwiper.current.scrollBy(1);
                        // currentIndex.current++;
                        // console.log(currentIndex.current);
                      // }
                    }}
                    style={styles.touchable}>
                        <Text style={styles.buttonText}>بعدی</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.buttonLeft}>
                    <TouchableOpacity 
                      onPress={() => {
                        // if(currentIndex.current > 1) {
                          mySwiper.current.scrollBy(-1);
                          // currentIndex.current--;
                          // console.log(currentIndex.current);
                        // }
                      }}
                      style={styles.touchable}>
                        <Text style={styles.buttonText}>قبلی</Text>
                    </TouchableOpacity>
                </View>
            </View>

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

export default Reading
