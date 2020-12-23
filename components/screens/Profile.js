import React , {useState , useRef } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
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

// import {Picker} from '@react-native-picker/picker';

// import SimplePicker from 'react-native-simple-picker';

const defaultProvince = 'مازندران';





const Profile = ({ navigation }) => {

  const [province , setProvince] = useState(defaultProvince);

  const [ sex , setSex ] = useState('male');

  const [ name , setName ] = useState('');

  const picker = useRef();

  const [showProvinceModal , setShowProvinceModal] = useState(false);

  const [showNameChangeModal , setShowNameChangeModal] = useState(false);

  const whichPage = navigation.getParam('whichPage');

  const changeSex = () => {
    if (sex == 'male') {
      setSex('female')
    } else {
      setSex('male')
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
    <StatusBar backgroundColor="#4D7C8A" barStyle="light-content" />


    <ProvinceModal 
    visible={showProvinceModal} 
    SubmitProvinceFromModal={SubmitProvinceFromModal}
    />

    <NameChangeModal 
    visible={showNameChangeModal}
    changeName={changeName}
    />

    <View style={styles.body}>
      <View style={styles.header}>

      </View>
      <View style={styles.insideProfile}>
        <View style={styles.profilePic}>
          <MaterialIcon size={100} color="white" name="person" />
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
                <ActiveButton sex={sex} changeSex={changeSex} />
                <DeactiveButton sex={sex} changeSex={changeSex}/>
              </>
            ) : (
              <>
                <DeactiveButton sex={sex} changeSex={changeSex}/>
                <ActiveButton sex={sex} changeSex={changeSex} />
              </>
            )
          }
          
                         
        </View>
        
      </View>
    </View>

    <Footer navigation={navigation} whichPage={whichPage}/>
    </>
  )
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    justifyContent : 'space-between',
    backgroundColor  : '#6FA6B6'
    // backgroundColor : 'red',
  },
  header : {
    backgroundColor  : '#4D7C8A',
    flex : 1,
  },
  insideProfile : {
    flex : 3,
  },
  profilePic : {
    width : windowWidth / 2.5 ,
    height : windowWidth / 2.5 ,
    backgroundColor : '#CEE0E5' ,
    borderRadius : windowWidth / 2.5 / PixelRatio.get(),
    position : 'absolute',
    // borderWidth : 3,
    alignSelf : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    top : -70
  },
  myText : {
    color : 'black',
    padding : 20,
    fontSize : 25,
  } , 
  infoContainer : {
    marginTop : 100,
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
