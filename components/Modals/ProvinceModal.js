import React from 'react';

import { 
  View , 
  Text , 
  StyleSheet , 
  Modal , 
  TouchableOpacity , 
  ScrollView, TouchableOpacityBase 
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import RadioButtonRN from 'radio-buttons-react-native';
import { LalezarRegular } from '../utils/Fonts';

import styled from 'styled-components/native';


const provinces = [
  {
    label: 'مازندران'
  },
  {
    label: 'تهران'
  },
  {
    label: 'اصفهان'
  },
  {
    label: 'گلستان'
  },
  {
    label: 'خراسان رضوی'
  },
  {
    label: 'قم'
  },
  {
    label: 'زنجان'
  },
  {
    label: 'مرکزی'
  },
  {
    label: 'قزوین'
  },
  {
    label: 'اردبیل'
  },
  {
    label: 'هرمزگان'
  },
  {
    label: 'ایلام'
  },
  {
    label: 'خوزستان'
  },
  {
    label: 'کردستان'
  },
  {
    label: 'کرمانشاه'
  },
];


const Container = styled.View`
  background-color : ${props => props.theme.SECOND_BACKGROUND};
  flex : 1;
`

const CloseButton = styled.View`
  padding : 10px;
  margin : 20px 40px;
  justify-content : center;
  align-items : center;
  border-radius : 35px;
  background-color : ${props => props.theme.FIRST_BACKGROUND};
`


const ProvinceModal = ({visible , SubmitProvinceFromModal}) => {

  const SubmitProvince = (e) => {
    setShowProvinceModal(false);
  }

  return (
    <Modal 
    
    animationType="slide"
    visible={visible}>
      <Container>

        <TouchableOpacity
          onPress={() => SubmitProvinceFromModal()}>
          <CloseButton>
          <Text
          style={styles.buttonText}>
            بستن
          </Text>
          </CloseButton>
        </TouchableOpacity>
      
        <ScrollView>
        <View style={styles.provinces}>
          <RadioButtonRN
            data={provinces}
            animationTypes={['shake']}
            selectedBtn={(e) => {
              setTimeout( () => {
                SubmitProvinceFromModal(e.label);
              },500);
            }}
            style={styles.answers}
            boxStyle={{flexDirection : 'row-reverse'}}
            textStyle={{alignSelf : 'flex-end' , fontFamily : LalezarRegular , fontSize : 20}}
            boxActiveBgColor='rgba(255,255,255,1)'
            boxDeactiveBgColor={null}
            textColor='black'
            icon={
              <MaterialIcon size={20} color="black" name="check" />
            }
          />
        </View>
        </ScrollView>

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
  provinces : {
    marginHorizontal : 20,
    paddingHorizontal : 20,
    paddingVertical : 20,
  }
});

export default ProvinceModal
