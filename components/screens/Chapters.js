import React , { useState , useRef , useEffect , useMemo } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Footer from '../footer/Footer';
import { LalezarRegular, ShabnamMedium } from '../utils/Fonts';
import SubChapter from '../utils/SubChapter';

import styled from 'styled-components/native';

import { useSelector , useDispatch } from 'react-redux';

import { SELECT_EXAM , DESELECT_EXAM } from '../../redux/BranchActions'

import { GET_SEASONS } from '../URL/Urls';

import axios from 'axios';

import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert'



const Header = styled.View`
  height : 180px;
  background-color : ${props => props.theme.BUTTON_COLOR};
  border-bottom-right-radius : 55px;
  border-bottom-left-radius : 55px;
  justify-content : flex-end;
  align-items : center;
  padding : 40px;
`

const Container = styled.View`
  flex : 1;
  background-color : ${props => props.theme.MAIN_BACKGROUND};
`



const Chapters = ({ navigation }) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  const dispatch = useDispatch();

  const whichPage = navigation.getParam('whichPage');
  // const seasons = navigation.getParam('seasons');
  const standardID = navigation.getParam('standardID');
  const standardName = navigation.getParam('standardName');
  const branchID = navigation.getParam('branchID');

  const [seasons , setSeasons] = useState(undefined);
  const [selectedSeasons , setSelectedSeasons] = useState([]);
  
  //Array(seasons.length).fill(false)
  const [ showSCLAlert , setShowSCLAlert] = useState(false);
  
  
  

  const requestToServerForSeasons = async () => {
    console.log(GET_SEASONS + branchID + '/' + standardID);
    try {
      const result = await axios({
        method: 'GET',
        url: GET_SEASONS + branchID + '/' + standardID,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          
        }
      });
      console.log('standards :' , result.data.result);
      setSeasons(result.data.result);
    } catch (e) {
      console.log("Error Happens for fetch seasons ...");
    }
  }

  useEffect( () => {
    const fetchSeasons = async () => {
      await requestToServerForSeasons();
    }
    if(seasons == undefined) {
      fetchSeasons();
    }
  });

  
  

  const checkExamsInSelectedOrNot = () => {
    let result = false;
    result = selectedSeasons.find( (item , index) => {
      if(item == true) {
        return true;
      }
    })
    return result;
  }

  const changeSelectedExams = (targetIndex , standardID , branchID) => {
    const data = { 
      standard_id : standardID , 
      branch_id : branchID , 
      season_id : targetIndex 
    };

    console.log(data);

    let newSelectedSeasons = selectedSeasons.map( (item,index) => {
      return item;
    })

    if ( 
      newSelectedSeasons[targetIndex] == undefined ||
      newSelectedSeasons[targetIndex] == null ||
      newSelectedSeasons[targetIndex] == false 
      ) {
      newSelectedSeasons[targetIndex] = true;
    } else if ( newSelectedSeasons[targetIndex] == true ) {
      newSelectedSeasons[targetIndex] = false;
    }

    

    console.log(newSelectedSeasons);

    setSelectedSeasons(newSelectedSeasons);
  }


  const returnBigTitleText = () => {
    return {
      color : theme.TEXT_COLOR,
      fontSize : windowWidth / 13,
      fontFamily : LalezarRegular,
    }
  }


  const examButtonStyle = () => {
    return {
      backgroundColor : theme.MAIN_BACKGROUND,
      marginTop : 10,
      paddingHorizontal : 20,
      paddingVertical : 10,
      borderRadius : 10,
    }
  }


  const examButtonText = () => {
    return {
      color: theme.TEXT_COLOR ,
      fontFamily : ShabnamMedium ,
    }
  }

  const openAlert = () => {
    paymentAlert.open();
  }


  const showLoaderOrContent = () => {
    if( seasons != undefined ) {
      return (
        <>
        <ScrollView style={styles.scroll}>
            <View style={styles.scrollContent}>
            {
            seasons && seasons.map( ( item , index ) => {
                return (
                    <SubChapter 
                      key={index} 
                      index={index}
                      changeSelectedExams={changeSelectedExams}
                      navigation={navigation} 
                      item={item}
                      standardID={standardID}
                      branchID={branchID}
                      selectedSeasons={selectedSeasons}
                      openAlert={openAlert}
                    />
                )
            })}
            </View>
        </ScrollView>

        <SCLAlert
          theme="info"
          show={showSCLAlert}
          title="سطح بندی"
          subtitle="سطح بندی سوال را انتخاب کنید"
          onRequestClose={() => setShowSCLAlert(false)}
        >
          <SCLAlertButton 
            theme="info" 
            onPress={(e) => {
              setShowSCLAlert(false);
              navigation.navigate('Exam' , {
                branchID ,
                standardID , 
                selectedSeasons ,
                level : 'آسان'
              })
            }
            }>
            آسان
          </SCLAlertButton>
          <SCLAlertButton 
            theme="info" 
            onPress={(e) => {
              setShowSCLAlert(false)
              navigation.navigate('Exam' , {
                branchID , 
                standardID , 
                selectedSeasons , 
                level : 'متوسط'
              })
            }
            }>
            متوسط
          </SCLAlertButton>
          <SCLAlertButton 
            theme="info" 
            onPress={(e) => {
              setShowSCLAlert(false)
              navigation.navigate('Exam' , {
                branchID ,
                standardID , 
                selectedSeasons ,
                level : 'سخت'
              })
            }
            }>
            سخت
          </SCLAlertButton>
        </SCLAlert>
        
        </>
      )
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
      <StatusBar backgroundColor={theme.BUTTON_COLOR} barStyle="light-content" />

      <Container>

        <ImageBackground
          style={styles.image}
          source={require('../images/bg.png')}
        >

        <Header>
          <Text style={returnBigTitleText()}>
            {
              standardName
            }
          </Text>
          
          {
            checkExamsInSelectedOrNot() ?
            <TouchableOpacity
            onPress={() => setShowSCLAlert(true)}
            >
              <View style={examButtonStyle()}>
                <Text style={examButtonText()}>آزمون از فصل های انتخاب شده</Text>
              </View>
            </TouchableOpacity>
            :
            null
          }

        </Header>

        {showLoaderOrContent()}

        

        <Footer navigation={navigation} whichPage={whichPage}/>

        </ImageBackground>

      </Container>
      
    </>
  )
}


const styles = StyleSheet.create({
  body : {
    flex : 1,
    backgroundColor : '#6FA6B6',
  },
  header : {
    height : 180,
    backgroundColor : '#51344D',
    borderBottomRightRadius : 55,
    borderBottomLeftRadius : 55,
    justifyContent : 'flex-end',
    alignItems : 'center',
    padding : 40,
  },
  myText : {
    color : 'white',
    fontSize : 55,
    fontFamily : ShabnamMedium,
  },
  scroll : {
    flex : 1,
  },
  scrollContent : {
    flex : 1,
    paddingTop : 40,
  },
  examButton : {
    backgroundColor : '#4D7C8A',
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderRadius : 10,
  },
  examButtonText : {
    color: 'white',
    fontFamily : LalezarRegular,
  },
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
  },
  loader : {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
  }
});

export default Chapters
