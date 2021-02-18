import React from 'react';

import { View , Text , TouchableOpacity , StyleSheet } from 'react-native';

import { windowWidth } from './Dimensions';


import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

import { useSelector } from 'react-redux';
import { LalezarRegular, ShabnamMedium } from './Fonts';

import LinearGradient from 'react-native-linear-gradient';



const Container = styled.View`
  padding-left : 30px;
  padding-right : 30px;
  margin-bottom : 20px;
  flex-direction : row;
  justify-content : space-between;
  align-items : center;
  height : 100px;
  border-top-left-radius : 20px;
  background-color : ${props => props.theme.BUTTON_COLOR};
  opacity : 0.7;
  border-width : 1px;
  border-style : solid;
  border-color : white;
`

// background-color : ${props => props.theme.BUTTON_COLOR};


const SubBranch = ({navigation, branchName , branchID , standards }) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  const branchData = {
    branchName , 
    branchID , 
  }


  const returnTextStyle = () => {
    return {
      fontFamily : ShabnamMedium ,
      fontSize : windowWidth / 15 ,
      color : theme.TEXT_COLOR ,
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={ () => navigation.navigate('Standard' , branchData ) }
        >
        <LinearGradient 
          colors={[
            'rgba(255,255,255,0.1)', 
            'rgba(255,255,255,0.2)', 
            'rgba(255,255,255,0.7)'
          ]}
          style={styles.card}
        >
        
        </LinearGradient>
      </TouchableOpacity>
      
      
      <TouchableOpacity 
      onPress={ () => navigation.navigate('Standard' , branchData) }
      style={styles.titleContainer}>
        <Text style={returnTextStyle()}>
          {
            branchName
          }
        </Text>
      </TouchableOpacity>
      

      <View style={styles.eastIcon}>
        <TouchableOpacity
        onPress={ () => navigation.navigate('Standard' , branchData ) }
        >
        <MaterialIcon size={40} color={theme.TEXT_COLOR} name="east" />
        </TouchableOpacity>
      </View>

      {
      /* <View style={styles.save}>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View> */
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    marginBottom : 20,
  },
  titleContainer : {
    position : 'absolute',
    paddingHorizontal : 20,
    paddingVertical : 20,
  },
  card : {
    paddingLeft : 30,
    paddingRight : 30,
    marginBottom : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    height : 100,
    borderTopLeftRadius : 20,
    opacity : 0.7,
    borderWidth : 1,
    borderStyle : 'solid',
    borderColor : 'white',
  },
  branch : {
    paddingHorizontal : 30,
    marginBottom : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    height : 100,
    borderTopLeftRadius : 20,
    borderBottomLeftRadius : 20,
    backgroundColor : 'black',
  },
  subtitle : {
    fontFamily : ShabnamMedium ,
    fontSize : windowWidth / 13 ,
    color : 'white' ,
  },  
  save : {
    position : 'absolute',
    bottom : 0,
    left : 10,
  },
  eastIcon : {
    position : 'absolute',
    right : 0,
    bottom : 0,
    paddingVertical : 30,
    paddingHorizontal : 20,
  },
  saveButton : {
  }
});

export default SubBranch;
