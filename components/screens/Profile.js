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
  Modal
} from 'react-native';

import { windowHeight, windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// import DropDownPicker from 'react-native-dropdown-picker';

// import { DropDown } from './PickerStyle';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../footer/Footer';
import { LalezarRegular } from '../utils/Fonts';
import ProvinceModal from '../Modals/ProvinceModal';

import { ActiveButton , DeactiveButton } from '../utils/Buttons';
import NameChangeModal from '../Modals/NameChangeModal';

import { launchImageLibrary } from 'react-native-image-picker';

import { useSelector } from 'react-redux'

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

  const [imageURI , setImageURI] = useState('https://reactjs.org/logo-og.png');

  const [province , setProvince] = useState(defaultProvince);

  const [ sex , setSex ] = useState('male');

  const [ name , setName ] = useState('');

  const picker = useRef();

  const [showProvinceModal , setShowProvinceModal] = useState(false);

  const [showNameChangeModal , setShowNameChangeModal] = useState(false);

  const whichPage = navigation.getParam('whichPage');


  const theme = useSelector(state => state.ThemeReducer.theme)

  const changeSex = (title) => {

    let theTitleOfButton = title == 'مرد' ? 'male' : 'female'

    console.log(theTitleOfButton);
    console.log(sex);
    
    if( theTitleOfButton == sex ) {
      if (sex == 'male') {
        setSex('female')
      } else {
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

  const SubmitProvinceFromModal = (data) => {
    if(data !== undefined ) {
      setProvince(data);
    }
    setShowProvinceModal(false);
  }


  

  return (
    <>
    <StatusBar backgroundColor={theme.BUTTON_COLOR} barStyle="light-content" />


    <ProvinceModal 
    visible={showProvinceModal} 
    SubmitProvinceFromModal={SubmitProvinceFromModal}
    />

    <NameChangeModal 
    visible={showNameChangeModal}
    changeName={changeName}
    />

    <Container>
      <Header>

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
            
              <View style={styles.info}>
                <TouchableOpacity
                onPress={() => setShowNameChangeModal(true)}
                >
                  <Text style={styles.infoText}>
                    { name == '' 
                    ?
                    'نام خود را وارد کنید'   
                    :
                    name
                    }
                  </Text>
                </TouchableOpacity>
              </View>
            
          </View>
        
        



        <TouchableOpacity
        onPress={() => {setShowProvinceModal(true)}}
        >
          <View style={styles.info}>
            <Text style={styles.infoText}>{province}</Text>
          </View>
        </TouchableOpacity>
        

        
        


        <View style={styles.buttonContainer}>
          {
            sex == 'male' ? (
              <>
                <ActiveButton sex={sex} title={'زن'} changeSex={changeSex} />
                <DeactiveButton sex={sex} title={'مرد'} changeSex={changeSex}/>
              </>
            ) : (
              <>
                <DeactiveButton sex={sex} title={'زن'} changeSex={changeSex}/>
                <ActiveButton sex={sex} title={'مرد'} changeSex={changeSex} />
              </>
            )
          }
          
                         
        </View>
        
      </View>
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
  insideProfile : {
    flex : 3,
  },
  profilePictureContainer : {
    width : windowWidth / 2.5 ,
    height : windowWidth / 2.5 ,
    backgroundColor : '#CEE0E5' ,
    borderRadius : windowWidth / 2 / PixelRatio.get(),
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
    marginTop : windowHeight / 5,
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
    fontSize : 25,
    fontFamily : LalezarRegular,
  } ,
  dropDownItem : {
    color : 'black',
    textAlign : 'right',
    fontSize : 40,
  },  
  dropDown : {
    color : 'black',
    marginHorizontal : 20,
    backgroundColor : '#CEE0E5',
  }
});


export default Profile
