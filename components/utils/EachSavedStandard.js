import React from 'react';

import { View , Text , TouchableOpacity , StyleSheet } from 'react-native';

import { windowWidth } from './Dimensions';


import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';

import { useSelector , useDispatch } from 'react-redux';
import { LalezarRegular, ShabnamMedium } from './Fonts';

import LinearGradient from 'react-native-linear-gradient';

import { 
  UPDATE_SAVE_STANDARD , 
  UPDATE_UNSAVE_STANDARD 
} from '../../redux/SavedActions';


const Container = styled.View`
  padding-left : 30px;
  padding-right : 30px;
  margin-bottom : 20px;
  flex-direction : row;
  justify-content : space-between;
  align-items : center;
  height : 100px;
  border-top-left-radius : 20px;
  border-bottom-left-radius : 20px;
  background-color : ${props => props.theme.BUTTON_COLOR};
`


const TextBlock = styled.Text`
  font-family : 'ShabnamMedium';
  font-size : windowWidth / 13;
  color : 'white';
`

const EachSavedStandard = ({ navigation , item , branchName , branchID }) => {

  const theme = useSelector( state => state.ThemeReducer.theme );

  const dispatch = useDispatch();

  const standardData = {
    seasons : item.seasons
  }

  const { 
    branch_id , 
    standard_id , 
    standard , 
    save  
  } = item;

  console.log(item);

  const returnTextStyle = () => {
    return {
      fontFamily : ShabnamMedium,
      fontSize : windowWidth / 15,
      color : theme.TEXT_COLOR,
    }
  }

  const unSaveStandard = (data) => {
    dispatch({ type : UPDATE_UNSAVE_STANDARD , payload : data });
  }

  const saveStandard = (data) => {
    dispatch({ type : UPDATE_SAVE_STANDARD , payload : data });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={ () => navigation.navigate('SubBranch' , standardData ) }>
        <LinearGradient 
        colors=
          {[
           'rgba(255,255,255,0.1)', 
           'rgba(255,255,255,0.2)', 
           'rgba(255,255,255,0.7)', 
          ]} 
          style={styles.card}
        >
          
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={ () => navigation.navigate('SubBranch' , standardData) }
      style={styles.titleContainer}>
        <Text style={returnTextStyle()}>
          {
            standard
          }
        </Text>
      </TouchableOpacity>
      
      <View style={styles.eastIcon}>
        <TouchableOpacity
          onPress={ () => navigation.navigate('SubBranch' , standardData) }
        >
        <MaterialIcon size={40} color={theme.TEXT_COLOR} name="east" />
        </TouchableOpacity>
      </View>

      <View style={styles.save}>
      <View
        style={styles.saveButton}
      >
        {
        save
        ?
        <TouchableOpacity
          onPress={() => unSaveStandard({
            branch_id ,
            standard_id
          })}
        >
          <MaterialIcon 
            size={40}
            color={theme.TEXT_COLOR}
            name="bookmark"
          />
        </TouchableOpacity>
        : 
        <TouchableOpacity
          onPress={() => saveStandard({
            branch_id ,
            standard_id
          })}
        >
          <MaterialIcon 
            size={40}
            color={theme.TEXT_COLOR}
            name="bookmark-outline" 
          />
        </TouchableOpacity>
        }
      </View>
      </View>
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
    fontFamily : ShabnamMedium,
    fontSize : windowWidth / 13,
    color : 'white',
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

export default EachSavedStandard
