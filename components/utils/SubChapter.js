import React from 'react'

import { View , Text, TouchableOpacity, StyleSheet } from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { LalezarRegular } from '../utils/Fonts';

const SubChapter = ({navigation , item , index , changeSelectedExams}) => {

    const changeStyleBasedOnSelected = (item) => {
      if(item.selectedExam) {
        return {
          justifyContent : 'center',
          backgroundColor : '#51344D',
          borderRightWidth : 2,
          paddingRight : 10,
          flex : 1,
        }
      } else {
        return {
          justifyContent : 'center',
          backgroundColor : '#4D7C8A',
          borderRightWidth : 2,
          paddingRight : 10,
          flex : 1,
        }
      }
    }

    return (
        <>
        <View style={styles.block}>
          <View style={changeStyleBasedOnSelected(item)}> 
            <TouchableOpacity 
            onPress={() => changeSelectedExams(index)}
            style={styles.icon}>
                <MaterialIcon size={80} color="white" name="list-alt" />
                <Text style={styles.examText}>آزمون</Text>
            </TouchableOpacity>
          </View>
          
            <View style={styles.info}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Reading')}
                >
                <Text style={styles.myBlockText}>{item.chapter}</Text>
                <Text style={ styles.mySubjectText }>{item.subject}</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    myBlockText : {
        color : 'white',
        fontSize : 45,
        fontFamily : LalezarRegular,
    },
    mySubjectText : {
        color : 'white',
        fontSize : 25,
        fontFamily : LalezarRegular,
        alignSelf : 'flex-start',
    },
    examText : {
        color : 'white',
        fontSize : 25,
        fontFamily : LalezarRegular,
        alignSelf : 'flex-end',
    },    
    info : {
        flexDirection : 'column',
        flex : 2,
        paddingHorizontal : 20,
        paddingVertical : 5,
    },
    block : {
        backgroundColor : '#4D7C8A',
        // backgroundColor : 'yellow',
        flexDirection : 'row',
        borderRadius : 20,
        marginHorizontal : 20,
        marginBottom : 20,
    },
    iconContainer : {
        justifyContent : 'center',
        backgroundColor : 'yellow',
        borderRightWidth : 2,
        paddingRight : 10,
        flex : 1,
    },
    icon : {
        //backgroundColor : 'red',
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
});

export default SubChapter
