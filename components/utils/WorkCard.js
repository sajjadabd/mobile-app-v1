import React from 'react'

import { 
  View , 
  Text , 
  StyleSheet , 
  PixelRatio ,
  Image
} from 'react-native'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { LalezarRegular, ShabnamMedium } from '../utils/Fonts';

import { windowHeight, windowWidth } from '../utils/Dimensions';

import styled from 'styled-components/native';

import { useSelector } from 'react-redux';

const Item = styled.View`
  background-color : ${props => props.theme.BUTTON_COLOR};
  flex : 1;
  padding : 10px 20px;
  margin : 20px;
  border-radius : 20px;
  flex-direction : row;
  justify-content : space-between;
`

const TextBlock = styled.Text`
    color : ${props => props.theme.TEXT_COLOR};
    font-family : 'ShabnamMedium';
    font-size : 25px;
`

const width = 70;

const WorkCard = () => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  const returnTextStyle = () => {
    return {
      fontFamily : ShabnamMedium,
      fontSize : windowWidth / 17,
      color : theme.TEXT_COLOR,
    }
  }

  return (
    <>
      <Item>
          <View style={styles.profile}>
            {/* <MaterialIcon size={50} color="black" name="person" /> */}
            <Image 
            style={styles.profilePicture}
            source={{ uri : 'https://reactjs.org/logo-og.png' }}
            />
            <View style={styles.blueTick}>
              <MaterialIcon size={width/3} color="white" name="check" />
            </View>
          </View>
          <View style={styles.info}>
            <View style={styles.name}>
              <Text style={returnTextStyle()}>محمد اکبری</Text>
            </View>
            <View style={styles.otherInfo}>
              <Text style={returnTextStyle()}>ساری</Text>
              <Text style={returnTextStyle()}>جوشکاری</Text>
            </View>
          </View>
      </Item>
    </>
  )
}

const styles = StyleSheet.create({
  item : {
    backgroundColor : 'rgba(255,255,255,0.2)',
    flex : 1,
    paddingHorizontal : 20,
    paddingVertical : 10,
    marginHorizontal : 20,
    marginVertical : 20,
    borderRadius : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  profile : {
    backgroundColor : '#6FA6B6',
    width : width,
    height : width,
    borderRadius : width / PixelRatio.get(),
    alignSelf : 'center',
    justifyContent : 'center',
    alignItems : 'center',
  },
  blueTick : {
    position : 'absolute',
    backgroundColor : 'dodgerblue',
    width : width / 2.5,
    height : width / 2.5,
    borderRadius : width / PixelRatio.get(),
    justifyContent : 'center',
    alignItems : 'center',
    right : -5,
    bottom : -5,
  },
  info : {
    flex : 1,
    paddingLeft : 30,
  },
  otherInfo : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  myText : {
    color : '#CEE0E5',
    fontFamily : LalezarRegular,
    fontSize : 25,
  },
  profilePictureContainer : {
    // width : windowWidth / 2.5 ,
    // height : windowWidth / 2.5 ,
    backgroundColor : '#CEE0E5' ,
    borderRadius : width / PixelRatio.get(),
    position : 'absolute',
    // borderWidth : 3,
    alignSelf : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    top : -70,
    overflow : 'hidden'
  },
  profilePicture : {
    flex : 1,
    width : width ,
    height : width ,
    borderRadius : width / PixelRatio.get(),
    // resizeMode : 'contain',
  },
});

export default WorkCard
