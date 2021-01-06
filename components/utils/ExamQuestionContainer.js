import React , { useRef , Component }  from 'react';

// import { View, Text } from 'react-native';
import { View , Text, StyleSheet  } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import RadioButtonRN from 'radio-buttons-react-native';

import { useSelector } from 'react-redux';

// import Slider from '@react-native-community/slider';

import { LalezarRegular, ShabnamMedium } from './Fonts';




const ExamQuestionContainer = ({radioButtonsData , color}) => {

      const theme = useSelector(state => state.ThemeReducer.theme)

      const returnQuestionTextStyle = () => {
        return {
          color : 'white',
          fontSize : 35,
          fontFamily : ShabnamMedium,
        }
      }
    
    
      const returnAnswerTextStyle = () => {
        return {
          color : 'white',
          fontSize : 20,
          fontFamily : ShabnamMedium,
        }
      }

      return (
        <View style={{backgroundColor : color}}>
          <View style={styles.Question}>
              <Text style={returnQuestionTextStyle()}>سوال</Text>
          </View>
          
          {/* <View style={styles.Answer}>
              <Text style={styles.myTextAnswer}>
              جواب سوال این متن  می باشد
              </Text>
          </View> */}
    
          <View >
            <RadioButtonRN
              data={radioButtonsData}
              animationTypes={['shake']}
              selectedBtn={() => null}
              style={styles.answers}
              boxStyle={{flexDirection : 'row-reverse'}}
              textStyle={{alignSelf : 'flex-end' , fontFamily : ShabnamMedium , fontSize : 15}}
              boxActiveBgColor='dodgerblue'
              boxDeactiveBgColor={null}
              textColor='white'
              icon={
                <MaterialIcon size={20} color="white" name="check" />
              }
            />
          </View>
        </View>
      )
}


const styles = StyleSheet.create({
  QuestionContainer : {
    
  },
  answers : {
      
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
});

export default ExamQuestionContainer
