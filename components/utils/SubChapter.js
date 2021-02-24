import React , { useState , useRef } from 'react'

import { View , Text, TouchableOpacity, StyleSheet } from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { LalezarRegular, ShabnamMedium, VazirRegularFD } from '../utils/Fonts';


import styled from 'styled-components/native';


import { useSelector } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';
import { windowWidth } from './Dimensions';



const SeasonButton = styled.View`
  flex-direction : row;
  border-radius : 20px;
  margin : 20px;
`


const ExamButton = styled.View`
  
`


const SubChapter = ({ 
  navigation , 
  item , 
  index  , 
  selectedSeasons , 
  changeSelectedExams , 
  standardID , 
  branchID 
}) => {

    const theme = useSelector(state => state.ThemeReducer.theme);
    

    

    // console.log(item);

    const seasonData = {
      standardID ,
      branchID ,
      seasonID : item.season_number
    }

    const disabledSeason = item.season_number == 1 ? false : true;

    const changeStyleBasedOnSelected = (index) => {
      if(selectedSeasons[index]) {
        return {
          justifyContent : 'center',
          backgroundColor : 'black',
          paddingRight : 10,
          paddingBottom : 5,
          flex : 1,
          borderTopLeftRadius : 20,
          borderBottomLeftRadius : 20,
        }
      } else {
        return {
          justifyContent : 'center',
          paddingRight : 10,
          paddingBottom : 5,
          flex : 1,
          borderTopLeftRadius : 20,
          borderBottomLeftRadius : 20,
        }
      }
    }


    const changeSeasonSelectedStatus = (targetIndex) => {
      let newSelectedSeasons = selectedSeasons.map( (item , index) => {
         if ( targetIndex == index) {
           return true;
         } else {
           return false;
         }
      })
    }



    const seasonTextStyle = () => {
      return {
        color : theme.TEXT_COLOR,
        fontSize : windowWidth / 20,
        fontFamily : VazirRegularFD,
      }
    }


    const subjectTextStyle = () => {
      return {
        color : theme.TEXT_COLOR,
        fontSize : windowWidth / 25,
        fontFamily : ShabnamMedium,
        alignSelf : 'flex-start',
      }
    }



    const returnExamTextStyle = () => {
      return {
        color : 'white',
        fontSize : 20,
        fontFamily : ShabnamMedium,
        alignSelf : 'center',
      }
    }


    const payMoneyOrGoToReading = () => {
      if(disabledSeason == true) {
        alert('هدایت به درگاه پرداخت');
        // openAlert();
      } else {
        navigation.navigate('Reading' , seasonData )
      }
    }

    return (
        <LinearGradient
        colors={[
          'rgba(255,255,255,0.4)', 
          'rgba(255,255,255,0)', 
          'rgba(255,255,255,0.1)', 
          'rgba(255,255,255,0.4)',
        ]}
        style={styles.card}
        >
          <View style={changeStyleBasedOnSelected(index)}> 
            <TouchableOpacity 
              onPress={() => changeSelectedExams(item.season_number-1 , standardID , branchID)}
              // onPress={ () => changeSeasonSelectedStatus(index) }
              style={styles.icon}
            >
                <MaterialIcon size={80} color="white" name="list-alt" />
                <Text style={returnExamTextStyle()}>آزمون</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.info}>
              <TouchableOpacity
              onPress={() => payMoneyOrGoToReading() }
              >
                <Text style={seasonTextStyle()}>
                  فصل
                  { ' ' + item.season_number }
                 </Text>
                <Text style={subjectTextStyle()}>{item.season_title}</Text>
              </TouchableOpacity>
          </View>
         
        </LinearGradient>
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
        fontFamily : VazirRegularFD,
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
        justifyContent : 'center',
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
    },
    card : {
      flexDirection : 'row',
      borderRadius : 20,
      margin : 20,
    }
});

export default SubChapter
