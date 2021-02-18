import React , { useState , useEffect } from 'react';

import { View , Text , StyleSheet } from 'react-native'
import EachSavedStandard from '../utils/EachSavedStandard';

import { useSelector } from 'react-redux';
import { getData } from '../AsyncStorage/SecureStorage';

import { GET_SAVED_STANDARDS } from '../URL/Urls';

import axios from 'axios';

// const numbers = [1,2,3,4,5,6,7,8,9,10];
const standard = [
  {
    branch_id : 1,
    standard_id : 1,
    standard : 'پیرایش مو و ابرو',
    save : true,
  },
  {
    branch_id : 1,
    standard_id : 2,
    standard : 'رنگ مو',
    save : true,
  }
];


const BranchBookmark = ({navigation}) => {

  // const standards = useSelector(state => state.SavedReducer.saved.standards);
  const [standards , setStandards] = useState();

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

  return (
    <>
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
});

export default BranchBookmark
