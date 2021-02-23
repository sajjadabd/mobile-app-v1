import React , { useState , useEffect } from 'react';

import { 
  View , 
  Text , 
  StyleSheet,
  ActivityIndicator
 } from 'react-native'


import EachSavedStandard from '../utils/EachSavedStandard';

import { useSelector } from 'react-redux';
import { getData } from '../AsyncStorage/SecureStorage';

import { GET_SAVED_STANDARDS } from '../URL/Urls';

import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { windowWidth } from '../utils/Dimensions';
import { ShabnamMedium } from '../utils/Fonts';

// const numbers = [1,2,3,4,5,6,7,8,9,10];


const BranchBookmark = ({navigation}) => {

  // const standards = useSelector(state => state.SavedReducer.saved.standards);
  const [standards , setStandards] = useState();

  const theme = useSelector(state => state.ThemeReducer.theme);

  let userInfo ;

  const requestToServerForGetStandards = async () => {
    console.log(GET_SAVED_STANDARDS + userInfo.user_id);
    try {
      const result = await axios({
        method: 'GET',
        url: GET_SAVED_STANDARDS + userInfo.user_id,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          
        }
      });
      console.log('result :' , result.data.result);
      setStandards(result.data.result);
    } catch (e) {
      console.log("Error Happens for fetch saved standard ...");
    }
  }

  

  useEffect( () => {
    const getUserData = async () => {
      userInfo = await getData();
      console.log(userInfo);
    }

    const getStandards = async () => {
      await requestToServerForGetStandards();
    }

    const getUserInfoAndGetStandards = async () => {
      await getUserData();
      if ( standards == null ) {
        await getStandards();
      }
    }

    getUserInfoAndGetStandards();
    
  });


  const removeStandards = (targetIndex) => {
    let newStandards = standards.filter( (item,index) => {
      return targetIndex != index
    } );
    setStandards(newStandards);
  }

  console.log('standards : ' , standards);


  const returnTextStyle = () => {
    return {
      color : theme.TEXT_COLOR,
      padding : 30,
      fontSize : windowWidth / 24,
      fontFamily : ShabnamMedium
    }
  }

  const returnMessageContainerStyle = () => {
    return {
      backgroundColor : theme.FOOTER,
      marginHorizontal : 20,
      marginVertical : 50,
      borderRadius : 20,
      justifyContent : 'center',
      alignItems : 'center'
    }
  }


  const showLoaderOrContent = () => {
    if(standards != undefined) {
      if( standards.length == 0) {
        return (
          <View style={returnMessageContainerStyle()}>
            <Text style={returnTextStyle()}>
              هیچ استاندارد ذخیره شده ای وجود ندارد
            </Text>
          </View>
        )
      } else {
        return (
          <ScrollView>
            <View style={styles.scrollContent}>
              {
                standards && standards.map( ( item , index ) => {
                  return (
                    <EachSavedStandard 
                    key={index} 
                    navigation={navigation} 
                    item={item} 
                    removeStandards={removeStandards}
                    index={index}
                    />
                  )
                })
              }
            </View>
          </ScrollView>
        )
      }
    } else {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )
    }
  }

  return (
    <>
      {showLoaderOrContent()}
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  myText : {
    fontSize : 20,
  },
  scrollContent : {
    marginLeft : 80,
    marginTop : 40,
    flex : 1,
  },
  loader : {
    flex : 1,
    marginTop : 100,
    justifyContent : 'center',
    alignItems : 'center'
  }
});

export default BranchBookmark
