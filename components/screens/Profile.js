import React , {useState , useRef } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PixelRatio
} from 'react-native';

import { windowHeight, windowWidth } from '../utils/Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// import DropDownPicker from 'react-native-dropdown-picker';

// import { DropDown } from './PickerStyle';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../footer/Footer';
import { LalezarRegular } from '../utils/Fonts';

import {Picker} from '@react-native-picker/picker';

// import SimplePicker from 'react-native-simple-picker';

const provinces = [
  'مازندران'
  , 'تهران'
  , 'اصفهان'
  , 'گلستان'
  , 'گیلان'
];

// Labels is optional
const labels = ['Banana', 'Apple', 'Pear'];



const Profile = ({ navigation }) => {


  const [province , setProvince] = useState(provinces[0]);

  const [ sex , setSex ] = useState('male');

  const picker = useRef();

  return (
    <>
    <StatusBar backgroundColor="#4D7C8A" barStyle="light-content" />
    <View style={styles.body}>
      <View style={styles.header}>

      </View>
      <View style={styles.insideProfile}>
        <View style={styles.profilePic}>
          <MaterialIcon size={100} color="white" name="person" />
        </View>

        <View style={styles.infoCotainer}>
          <View style={styles.info}>
            <Text style={styles.infoText}>زهرا خدادادی</Text>
          </View>
        </View>

        <View style={styles.info}>
          <Picker
            selectedValue={province}
            style={{flex : 1}}
            itemStyle={{fontFamily : LalezarRegular }}
            textStyle={{fontFamily : LalezarRegular }}
            itemTextStyle={{fontFamily : LalezarRegular }}
            activeItemTextStyle={{fontFamily : LalezarRegular }}
            onValueChange={(itemValue, itemIndex) => setProvince(itemValue) }
            >
            {provinces.map( (item,index) => {
              return (
                <Picker.Item label={item} value={item} />
              )
            })}
          </Picker>
        </View> 

        
        


        <View style={styles.buttonContainer}>
            <TouchableOpacity 
            onPress={() => setSex('male')}
            style={styles.activebutton}>
              <Text style={styles.activebuttonText}>مرد</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => setSex('female')}
            style={styles.deactivebutton}>
              <Text style={styles.deactivebuttonText}>زن</Text>
            </TouchableOpacity>
        </View>
        
      </View>
    </View>

    <Footer navigation={navigation}/>
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
  infoCotainer : {
    marginTop : 100,
  },
  info : {
    paddingHorizontal : 20,
    paddingVertical : 10,
    marginHorizontal : 20,
    marginBottom : 20,
    backgroundColor : '#CEE0E5',
    borderWidth : 3,
    height : 70,
    justifyContent : 'center',
    borderRadius : 55,
  },
  buttonContainer : {
    paddingHorizontal : 20,
    paddingVertical : 10,
    marginHorizontal : 20,
    marginBottom : 20,
    height : 70,
    justifyContent : 'center',
    borderRadius : 55,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  infoText : {
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
  },
  activebutton : {
    backgroundColor : '#4D7C8A',
    width : 120,
    borderRadius : 55,
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  deactivebutton : {
    backgroundColor : '#CEE0E5',
    width : 120,
    borderRadius : 55,
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  activebuttonText : {
    color : 'white',
    fontFamily : LalezarRegular,
    fontSize : 20,
  },
  deactivebuttonText : {
    color : 'black',
    fontFamily : LalezarRegular,
    fontSize : 20,
  }
});


export default Profile
