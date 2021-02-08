import React , {useState , useRef } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  PixelRatio,
  ImageBackground,
  Modal
} from 'react-native';

import { windowHeight, windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// import DropDownPicker from 'react-native-dropdown-picker';

// import { DropDown } from './PickerStyle';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../footer/Footer';
import { LalezarRegular, ShabnamMedium } from '../utils/Fonts';

import ProvinceModal from '../Modals/ProvinceModal';
import NameChangeModal from '../Modals/NameChangeModal';
import ThemeChangeModal from '../Modals/ThemeChangeModal';
import CityModal from '../Modals/CityModal';

import { ActiveButton , DeactiveButton } from '../utils/Buttons';


import { launchImageLibrary } from 'react-native-image-picker';

import { useSelector , useDispatch } from 'react-redux';

import styled from 'styled-components/native';


const Header = styled.View`
  background-color  : ${props => props.theme.BUTTON_COLOR};
  flex : 1;
`

const Container = styled.View`
  flex : 1;
  justify-content : space-between;
  background-color  : ${props => props.theme.MAIN_BACKGROUND};
`

const defaultProvince = 'مازندران';


const Profile = ({ navigation }) => {

  const theme = useSelector(state => state.ThemeReducer.theme);

  const UserInformation = useSelector(state => state.UserReducer.user);

  const [ imageURI , setImageURI ] = useState('https://randomuser.me/api/portraits/women/67.jpg');

  const [ province , setProvince ] = useState(UserInformation.province);

  const [ city , setCity] = useState(UserInformation.city);

  const [ sex , setSex ] = useState(UserInformation.gender);

  const [ name , setName ] = useState(UserInformation.username);

  const picker = useRef();

  const [ showProvinceModal , setShowProvinceModal ] = useState(false);

  const [ showCityModal , setShowCityModal ] = useState(false);

  const [ showNameChangeModal , setShowNameChangeModal ] = useState(false);

  const [ showThemeChangeModal , setShowThemeChangeModal ] = useState(false);

  const whichPage = navigation.getParam('whichPage');

  

  const dispatch = useDispatch();

  const changeSex = (title) => {

    let theTitleOfButton = ( title == 'مرد' ? 'male' : 'female' )

    console.log(theTitleOfButton);
    console.log(sex);
    
    if( theTitleOfButton == sex ) {
      
    } else {
      if (sex == 'male') {
        setSex('female')
      } else if (sex == 'female') {
        setSex('male')
      }
    }
  }

  const changeName = (data) => {
    if(data != undefined) {
      setName(data);
    }
    setShowNameChangeModal(false);
  }

  const SubmitCityFromModal = (data) => {
    if(data !== undefined ) {
      setCity(data);
    }
    setShowCityModal(false);
  }

  const SubmitProvinceFromModal = (data) => {
    if(data !== undefined ) {
      setProvince(data);
    }
    setShowProvinceModal(false);
  }

  const SubmitThemeFromModal = (data) => {
    if(data !== undefined ) {
      console.log(data);
      dispatch({
        type : data
      })
    }
    setShowThemeChangeModal(false);
  }
  

  return (
    <>
    <StatusBar backgroundColor={theme.MAIN_BACKGROUND} barStyle="light-content" />
    

    <CityModal
    visible={showCityModal} 
    SubmitCityFromModal={SubmitCityFromModal}
    />

    <ProvinceModal 
    visible={showProvinceModal} 
    SubmitProvinceFromModal={SubmitProvinceFromModal}
    province={province}
    />

    <NameChangeModal 
    visible={showNameChangeModal}
    changeName={changeName}
    username={name}
    />

    <ThemeChangeModal 
    visible={showThemeChangeModal}
    SubmitThemeFromModal={SubmitThemeFromModal}
    />

    <Container>

    

      <ImageBackground
      style={styles.image}
      source={require('../images/bg.png') }
      >

      

      <Header>

      <ImageBackground
        style={styles.image}
        source={require('../images/night.jpg') }
      >
      
        <View style={styles.iconContainer}>
          <TouchableOpacity
          onPress={() => setShowThemeChangeModal(true)}
          style={styles.pallete}
          >
            <MaterialIcon 
              size={40} 
              color={'white'} 
              name={'palette'} />
          </TouchableOpacity>
        </View>

      </ImageBackground>

      </Header>

      


      <View style={styles.insideProfile}>
        
        <View style={styles.profilePictureContainer}>
          <TouchableOpacity
          onPress={() =>
            launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                maxHeight: 200,
                maxWidth: 200,
              },
              (response) => {
                if(response.uri !== undefined) {
                  setImageURI(response.uri);
                }
                console.log(response);
              },
            )
          }
          >
          {/* <MaterialIcon size={100} color="white" name="person" /> */}
          {/* <Image 
          style={styles.profilePicture}
          source={require('../logo/worker.png')} /> */}

          <Image 
          style={styles.profilePicture}
          source={{ uri : imageURI }}
          />

          </TouchableOpacity>
        </View>

        
        
        
        <View style={styles.infoContainer}>

        <ScrollView >

            <View>
              <Text style={[styles.infoText , styles.infoTextWhite]}>نام کاربری : </Text>
            </View>
          
            <View style={styles.info}>
              <TouchableOpacity
              onPress={() => setShowNameChangeModal(true)}
              >
                <Text style={styles.infoText}>
                  { 
                  name == '' 
                  ?
                  'نام کاربری خود را انتخاب کنید'   
                  :
                  name
                  }
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={[styles.infoText , styles.infoTextWhite]}>استان : </Text>
            </View>

            <View style={styles.info}>
              <TouchableOpacity
              onPress={() => {setShowProvinceModal(true)}}
              >
                  <Text style={styles.infoText}>
                  { 
                    province == '' 
                    ?
                    'نام استان خود را وارد کنید'   
                    :
                    province
                  }
                  </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={[styles.infoText , styles.infoTextWhite]}>شهر : </Text>
            </View>

            <View style={styles.info}>
              <TouchableOpacity
              onPress={() => {setShowCityModal(true)}}
              >
                  <Text style={styles.infoText}>
                  { 
                    city == '' 
                    ?
                    'نام شهر خود را وارد کنید'   
                    :
                    city
                  }
                  </Text>
              </TouchableOpacity>
            </View>


            <View>
              <Text style={[styles.infoText , styles.infoTextWhite]}>جنسیت : </Text>
            </View>

            <View style={styles.buttonContainer}>
            {
              sex == 'male' ? (
                <>
                  <DeactiveButton sex={sex} title={'زن'} changeSex={changeSex}/>
                  <ActiveButton sex={sex} title={'مرد'} changeSex={changeSex} />
                </>
              ) : (
                <>
                <ActiveButton sex={sex} title={'زن'} changeSex={changeSex} />
                <DeactiveButton sex={sex} title={'مرد'} changeSex={changeSex}/>
              </>
              )
            }             
          </View>

          </ScrollView>
          
        </View>

        

    
        
        
      </View>

      
      
      </ImageBackground>

      

    </Container>

    <Footer navigation={navigation} whichPage={whichPage}/>
    </>
  )
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    justifyContent : 'space-between',
    backgroundColor  : 'black'
    // backgroundColor : 'red',
  },
  header : {
    backgroundColor  : 'blue',
    flex : 1,
  },
  iconContainer : {
    position : 'absolute' ,
    right : -windowWidth / 10 ,
    top : -windowWidth / 10 ,
  },
  pallete : {
    backgroundColor : 'black',
    borderRadius : windowWidth / 2 / PixelRatio.get(),
    paddingRight : 50 ,
    paddingTop : 50 ,
    paddingBottom : 20,
    paddingLeft : 20,
  },
  insideProfile : {
    flex : 3,
  },
  profilePictureContainer : {
    width : windowWidth / 2.5 ,
    height : windowWidth / 2.5 ,
    backgroundColor : 'transparent' ,
    borderRadius : windowWidth / 2 / PixelRatio.get(),
    position : 'absolute',
    // borderWidth : 3,
    alignSelf : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    top : -70,
    overflow : 'hidden',
  },
  profilePicture : {
    flex : 1,
    width : windowWidth / 2.5 ,
    height : windowWidth / 2.5 ,
    // resizeMode : 'contain',
  },
  myText : {
    color : 'black',
    padding : 20,
    fontSize : 25,
  } , 
  infoContainer : {
    marginTop : windowHeight / 8,
  },
  info : {
    marginHorizontal : 20,
    marginBottom : 20,
    backgroundColor : '#CEE0E5',
    borderWidth : 3,
    justifyContent : 'center',
    borderRadius : 55,
  },
  buttonContainer : {
    paddingHorizontal : 20,
    paddingVertical : 10,
    marginHorizontal : 20,
    marginBottom : 20,
    height : 70,
    borderRadius : 55,
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  infoText : {
    paddingHorizontal : 20,
    paddingVertical : 10,
    fontSize : 20,
    fontFamily : ShabnamMedium,
  } ,
  infoTextWhite : {
    color : 'white',
  },
  dropDownItem : {
    color : 'black',
    textAlign : 'right',
    fontSize : 40,
  },  
  dropDown : {
    color : 'black',
    marginHorizontal : 20,
    backgroundColor : '#CEE0E5',
  },
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
  },
});


export default Profile
