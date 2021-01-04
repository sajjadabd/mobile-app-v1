import React , { useState , useRef } from 'react'
import { 
  View , 
  Text , 
  TouchableOpacity , 
  StyleSheet ,
  PixelRatio , 
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';
import { LalezarRegular } from '../utils/Fonts';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NumberInput from './NumberInput';
import Keypad from './Keypad';

import Swiper from 'react-native-swiper'
import SmsInput from './SmsInput';



const Phone = ({setPhoneReady}) => {



  const [ page , setPage ] = useState(1);

  const [phoneNumber , setPhoneNumber] = useState('');

  const [sms , setSMS] = useState('');

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
          setSMS(sms+item)
        }
      }
    }
  }

  return (
    <>
      <View style={styles.container}>

          { 
          page == 1 
          ?
          <NumberInput phoneNumber={phoneNumber} scrollSwiper={scrollSwiper}/>
          :
          <SmsInput phoneNumber={phoneNumber} sms={sms} scrollSwiper={scrollSwiper} setPhoneReady={setPhoneReady}/>
          }
          
          
        
          <Keypad addToInputNumber={addToInputNumber}/>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    // backgroundColor : 'red',
    flex : 1,
  },
  
})


export default Phone
