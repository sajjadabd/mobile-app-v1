import React from 'react';

import { 
  View , 
  Text , 
  StyleSheet , 
  Modal , 
  TouchableOpacity , 
  ImageBackground,
  ScrollView, 
  TouchableOpacityBase 
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import RadioButtonRN from 'radio-buttons-react-native';
import { LalezarRegular } from '../utils/Fonts';

import styled from 'styled-components/native';

import { useSelector } from 'react-redux';

import {
  PURPLE_THEME , 
  DARK_BLUE_THEME , 
  DARK_GREEN_THEME , 
  DARK_THEME , 
  MAGENTA_THEME , 
  GRAY_THEME, 
  ORANGE_THEME 
} from '../../redux/Actions';


const themes = [
  {
    label: PURPLE_THEME
  },
  {
    label: DARK_BLUE_THEME
  },
  {
    label: DARK_GREEN_THEME
  },
  {
    label: DARK_THEME
  },
  {
    label: MAGENTA_THEME
  },
  {
    label: GRAY_THEME
  },
  {
    label : ORANGE_THEME
  }
];


const Container = styled.View`
  background-color : ${props => props.theme.MAIN_BACKGROUND};
  flex : 1;
`

const CloseButton = styled.View`
  padding : 10px;
  margin : 20px 40px;
  justify-content : center;
  align-items : center;
  border-radius : 35px;
  background-color : ${props => props.theme.BUTTON_COLOR};
`


const ThemeChangeModal = ({visible , SubmitThemeFromModal}) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  return (
    <Modal 
    animationType="slide"
    visible={visible}>
      <Container>

        <ImageBackground
        style={styles.image}
        source={require('../images/bg.png') }
        >

        <TouchableOpacity
          onPress={() => {
            SubmitThemeFromModal()
          }}>
          <CloseButton>
          <Text
          style={styles.buttonText}>
            بستن
          </Text>
          </CloseButton>
        </TouchableOpacity>
      
        <ScrollView>
        <View style={styles.themes}>
          <RadioButtonRN
            data={themes}
            animationTypes={['shake']}
            selectedBtn={(e) => {
              setTimeout( () => {
                SubmitThemeFromModal(e.label);
              },500);
            }}
            style={styles.answers}
            boxStyle={{flexDirection : 'row-reverse'}}
            textStyle={{alignSelf : 'flex-end' , fontFamily : LalezarRegular , fontSize : 20 , color : theme.SEARCH_COLOR}}
            boxActiveBgColor='rgba(255,255,255,0.2)'
            boxDeactiveBgColor={null}
            textColor='black'
            icon={
              <MaterialIcon size={20} color="black" name="check" />
            }
          />
        </View>
        </ScrollView>

        </ImageBackground>

      </Container>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#6FA6B6',
    flex : 1,
  },
  button : {
    padding : 10,
    marginVertical : 20,
    marginHorizontal : 40,
    backgroundColor : 'black',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 35,
    backgroundColor : '#4D7C8A',
  },
  buttonText : {
    color : 'white',
    fontSize : 30,
    fontFamily : LalezarRegular,
  },
  themes : {
    marginHorizontal : 20,
    paddingHorizontal : 20,
    paddingVertical : 20,
  },
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
  },
});

export default ThemeChangeModal
