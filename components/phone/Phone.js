import React , { useState , useRef } from 'react'
import { 
  View , 
  Text , 
  TouchableOpacity , 
  StyleSheet , 
  PixelRatio , 
  ImageBackground ,
  StatusBar ,
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';
import { LalezarRegular } from '../utils/Fonts';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NumberInput from './NumberInput';
import Keypad from './Keypad';

import Swiper from 'react-native-swiper';
import SmsInput from './SmsInput';

import { useSelector } from 'react-redux';



const Phone = ({setPhoneReady}) => {

  const [ page , setPage ] = useState(1);
  const [ phoneNumber , setPhoneNumber ] = useState('');
  const [ sms , setSMS ] = useState('');

  const theme = useSelector(state => state.ThemeReducer.theme)

  // const mySwiper = useRef(null);

  const scrollSwiper = (value) => {
    // mySwiper.current.scrollBy(value);
    setPage(value);
  }

  const addToInputNumber = (item) => {
    if( page == 1 ) {
      if(item == 'C') {
        setPhoneNumber(phoneNumber.substring(0, phoneNumber.length - 1))
      } else {
        if(phoneNumber.length >= 11) {
          return;
        } else {
          setPhoneNumber(phoneNumber+item)
        }
      }
    } else if ( page == 2 ) {
      if(item == 'C') {
        setSMS(sms.substring(0, sms.length - 1))
      } else {
        if(sms.length >= 6) {
          return;
        } else {
          setSMS(sms+item);
        }
      }
    }
  }

  return (
    <>
      <StatusBar backgroundColor={theme.MAIN_BACKGROUND} barStyle="light-content" />

      <ImageBackground
        style={[ styles.image , { backgroundColor : theme.MAIN_BACKGROUND }]}
        source={require('../images/bg.png') }
      >

        
      <View style={styles.container}>

        

          { 
            page == 1 
            ?
            <NumberInput 
              phoneNumber={phoneNumber} 
              setPhoneNumber={setPhoneNumber}
              scrollSwiper={scrollSwiper}
            />
            :
            <SmsInput 
              phoneNumber={phoneNumber} 
              sms={sms} 
              setSMS={setSMS}
              scrollSwiper={scrollSwiper} 
              setPhoneReady={setPhoneReady}
            />
          }
        
          {/* <Keypad addToInputNumber={addToInputNumber}/> */}

        

      </View>

      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    paddingTop : 40 ,
    // backgroundColor : 'red',
    // flex : 1,
    // justifyContent : 'flex-start',
  },
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
  },
})


export default Phone
