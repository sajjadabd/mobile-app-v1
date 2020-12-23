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
    Animated
  } from 'react-native';
  
import { windowHeight , windowWidth } from '../utils/Dimensions';

import Footer from '../footer/Footer';
import { LalezarRegular } from '../utils/Fonts';

import ExamQuestionContainer from '../utils/ExamQuestionContainer';

const duration = 100;

const fadeAnim = new Animated.Value(0);


const Exam = ({navigation}) => {

  const [ fadeLeft , setFadeLeft ] = useState(0);

  fadeAnim.addListener(({value}) => {
    let roundValue = Math.round(value);
    if(value%5 == 0) {
      setFadeLeft(roundValue);
    }
  });

  // fadeAnim.addListener(({value}) => {
  //   let roundValue = Math.round(value);
  //   console.log(roundValue);
  //   this._value = value;
  //   return _value;
  // });

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();

    console.log("Fade In ...");
  };
  
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: - windowWidth,
      duration: duration,
      useNativeDriver: true,
    }).start();
  
    console.log("Fade Out ...");
  };

    return (
        <>
        <StatusBar backgroundColor="#51344D" barStyle="light-content" />
        <View style={styles.body}>
            <View style={styles.header}>

                <View
                style={{
                  transform : [
                    // { perspective: 850 },
                    { translateX: fadeLeft },
                    // { rotateY: '0deg'},
                  ]
                }}
                >
                  <ExamQuestionContainer />

                </View>

            </View>

            <View style={styles.navigation}>
                <View style={styles.buttonRight}>
                    <TouchableOpacity 
                    onPress={() => fadeOut()}
                    style={styles.touchable}>
                        <Text style={styles.buttonText}>بعدی</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.buttonLeft}>
                    <TouchableOpacity 
                    onPress={() => fadeIn()}
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
      // backgroundColor : 'yellow',
      transform : [
        // { perspective: 850 },
        { translateX: fadeAnim },
        // { rotateY: '0deg'},
      ]
    }
});

export default Exam
