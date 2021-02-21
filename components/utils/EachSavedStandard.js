import React , { useState , useEffect } from 'react';

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
import { getData } from '../AsyncStorage/SecureStorage';

import { SAVE_STANDARD , UNSAVE_STANDARD } from '../URL/Urls';


import axios from 'axios';


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

let userInfo ;

const EachSavedStandard = ({ 
  navigation , 
  item , 
  index ,
  removeStandards
}) => {

  const theme = useSelector( state => state.ThemeReducer.theme );

  const dispatch = useDispatch();

  const [ save , setSave ] = useState(item.saved);


  useEffect( () => {
    const getUserData = async () => {
      userInfo = await getData();
      console.log(userInfo);
    }

    getUserData();
  });


  const standardData = {
    seasons : item.seasons
  }

  const { 
    branch_id , 
    standard_id , 
    standard_name , 
  } = item;

  const branchID = branch_id;
  const standardID = standard_id ;

  console.log(item);

  const returnTextStyle = () => {
    return {
      fontFamily : ShabnamMedium,
      fontSize : windowWidth / 22,
      color : theme.TEXT_COLOR,
    }
  }

  const requestToServerForSaveStandards = async () => {
    console.log(SAVE_STANDARD + branchID + '/' + standardID + '/' + userInfo.user_id);
    try {
      const result = await axios({
        method: 'GET',
        url: SAVE_STANDARD + branchID + '/' + standardID + '/' + userInfo.user_id,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          
        }
      });
      console.log(result.data)
      // setStandards(result.data.result);
    } catch (e) {
      console.log("Error Happens for save standard ...");
    }
  }


  const requestToServerForUnSaveStandards = async () => {
    console.log(UNSAVE_STANDARD + branchID + '/' + standardID + '/' + userInfo.user_id);
    try {
      const result = await axios({
        method: 'GET',
        url: UNSAVE_STANDARD + branchID + '/' + standardID + '/' + userInfo.user_id,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          
        }
      });
      // setStandards(result.data.result);
    } catch (e) {
      console.log("Error Happens for unsave standard ...");
    }
  }


  const unSaveStandard = async (data) => {
    console.log(data);
    // dispatch({ type : UPDATE_UNSAVE_STANDARD_IN_BRANCH , payload : data });
    await requestToServerForUnSaveStandards();
    setSave(false);
  }

  const saveStandard = async (data) => {
    console.log(data);
    // dispatch({ type : UPDATE_SAVE_STANDARD_IN_BRANCH , payload : data });
    await requestToServerForSaveStandards();
    setSave(true);
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
            standard_name
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
            standard_id ,
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

