import React , { useRef , useEffect , useState , Component }  from 'react';

// import { View, Text } from 'react-native';
import { View , Text, StyleSheet , TouchableOpacity  } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import RadioButtonRN from 'radio-buttons-react-native';

import { useSelector } from 'react-redux';

// import Slider from '@react-native-community/slider';

import { LalezarRegular, ShabnamMedium } from './Fonts';
import { windowWidth } from './Dimensions';



const ExamQuestionContainer = ({question , color , index , save , setNewAnswer}) => {

      const theme = useSelector(state => state.ThemeReducer.theme)

      const questionNumber = index;

      const radioButtonsData = [
        {
          label : question.first ,
          index : 1,
        },
        {
          label : question.second ,
          index : 2,
        },
        {
          label : question.third ,
          index : 3,
        },
        {
          label : question.fourth ,
          index : 4,
        }
      ]

      

      let shuffle = [];

      const shuffleArray = () => {
        let shufflingCounter = 10;

        for(let i=0;i<shufflingCounter;i++) {
          let randomNumber = Math.floor(Math.random() * 4);
          shuffle.push(randomNumber)
        }

        for(let i=0;i<shufflingCounter/2;i++){
          let temp = radioButtonsData[shuffle[i]];
          radioButtonsData[shuffle[i]] = radioButtonsData[shuffle[i+1]];
          radioButtonsData[shuffle[i+1]] = temp;
        }
      }

      shuffleArray();
      // console.log(shuffle);

      

      const returnQuestionTextStyle = () => {
        return {
          color : 'white',
          fontSize : windowWidth / 18,
          fontFamily : ShabnamMedium,
        }
      }
    
    
      const returnAnswerTextStyle = () => {
        return {
          color : 'white',
          fontSize : windowWidth / 15,
          fontFamily : ShabnamMedium,
        }
      }

      return (
        <>
        

        <View style={{backgroundColor : color}}>

        <View style={styles.iconContainer}>


            {/* <TouchableOpacity
            onPress={() => null}
            style={styles.saveButton}
            >
              { 
              save
              ?
              <MaterialIcon size={40} color={theme.TEXT_COLOR} name="bookmark" />
              : 
              <MaterialIcon size={40} color={theme.TEXT_COLOR} name="bookmark-outline" />
              }
            </TouchableOpacity> */}

            {/* <TouchableOpacity
            onPress={() => null}
            style={styles.saveButton}
            >

              <MaterialIcon size={40} color={theme.TEXT_COLOR} name="bookmark" />

                  
            </TouchableOpacity> */}
          </View>

          <View style={styles.Question}>
              <Text style={returnQuestionTextStyle()}>
                {
                  question.question
                }
              </Text>
          </View>
          
          {/* <View style={styles.Answer}>
              <Text style={styles.myTextAnswer}>
              جواب سوال این متن  می باشد
              </Text>
          </View> */}
    
          <View style={styles.questionContainer}>
            <RadioButtonRN
              data={radioButtonsData}
              animationTypes={['shake']}
              selectedBtn={(e) => setNewAnswer(e , questionNumber)}
              style={styles.answers}
              boxStyle={{flexDirection : 'row-reverse'}}
              textStyle={{
                alignSelf : 'flex-end' , 
                fontFamily : ShabnamMedium , 
                fontSize : windowWidth / 25
              }}
              boxActiveBgColor='dodgerblue'
              boxDeactiveBgColor={null}
              textColor='white'
              icon={
                <MaterialIcon size={20} color="white" name="check" />
              }
            />
          </View>
        </View>

        </>
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
  iconContainer : {
    flexDirection : 'row',
    marginRight : 0,
  },
  saveButton : {
    marginRight : 10,
  },
  questionContainer : {
    paddingBottom : 40,
  }
});

export default ExamQuestionContainer
