import React from 'react'

import { View , Text, TouchableOpacity, StyleSheet } from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { LalezarRegular, ShabnamMedium } from '../utils/Fonts';


import styled from 'styled-components/native';


import { useSelector } from 'react-redux';


const SeasonButton = styled.View`
  background-color : ${props => props.theme.BUTTON_COLOR};
  flex-direction : row;
  border-radius : 20px;
  margin : 20px;
`


const ExamButton = styled.View`
  
`


const SubChapter = ({navigation , item , index , changeSelectedExams}) => {

    const theme = useSelector(state => state.ThemeReducer.theme)

    const changeStyleBasedOnSelected = (item) => {
      if(item.selectedExam) {
        return {
          justifyContent : 'center',
          backgroundColor : 'black',
          borderRightWidth : 2,
          paddingRight : 10,
          flex : 1,
        }
      } else {
        return {
          justifyContent : 'center',
          backgroundColor : theme.BUTTON_COLOR,
          borderRightWidth : 2,
          paddingRight : 10,
          flex : 1,
        }
      }
    }



    const seasonTextStyle = () => {
      return {
        color : theme.TEXT_COLOR,
        fontSize : 35,
        fontFamily : ShabnamMedium,
      }
    }


    const subjectTextStyle = () => {
      return {
        color : theme.TEXT_COLOR,
        fontSize : 25,
        fontFamily : ShabnamMedium,
        alignSelf : 'flex-start',
      }
    }



    const returnExamTextStyle = () => {
      return {
        color : 'white',
        fontSize : 20,
        fontFamily : ShabnamMedium,
        alignSelf : 'flex-end',
      }
    }

    return (
        <>
        <SeasonButton>
          <View style={changeStyleBasedOnSelected(item)}> 
            <TouchableOpacity 
            onPress={() => changeSelectedExams(index)}
            style={styles.icon}>
                <MaterialIcon size={80} color="white" name="list-alt" />
                <Text style={returnExamTextStyle()}>آزمون</Text>
            </TouchableOpacity>
          </View>
          
            <View style={styles.info}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Reading')}
                >
                <Text style={seasonTextStyle()}>{item.chapter}</Text>
                <Text style={subjectTextStyle()}>{item.subject}</Text>
                </TouchableOpacity>
            </View>
        </SeasonButton>
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
