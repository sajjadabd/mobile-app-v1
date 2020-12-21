import React from 'react'

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

const Exam = ({navigation}) => {
    return (
        <>
        <StatusBar backgroundColor="#51344D" barStyle="light-content" />
        <View style={styles.body}>
            <View style={styles.header}>

                <View style={styles.Question}>
                    <Text style={styles.myTextQuestion}>سوال</Text>
                </View>
                
                <View style={styles.Answer}>
                    <Text style={styles.myTextAnswer}>
                    جواب سوال این متن  می باشد
                    </Text>
                </View>
            
            </View>

            <View style={styles.navigation}>
                <View style={styles.buttonRight}>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.buttonText}>بعدی</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.buttonLeft}>
                    <TouchableOpacity style={styles.touchable}>
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
    Question : {

    },
    Answer : {
        paddingTop : 40,
    },
    myTextQuestion : {
        color : 'white',
        fontSize : 55,
        fontFamily : LalezarRegular,
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
    }
});

export default Exam
