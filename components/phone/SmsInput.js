import React from 'react';

import { View , Text , StyleSheet , TouchableOpacity } from 'react-native'
import { LalezarRegular } from '../utils/Fonts'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { setData  } from '../AsyncStorage/SecureStorage'


const SmsInput = ({phoneNumber , sms , scrollSwiper , setPhoneReady}) => {
  
  const savePhoneAndSms = async (phoneNumber , sms) => {
    await setData(phoneNumber , sms);
    setPhoneReady(true);
  }
  
  return (
    <>
      <View style={styles.phoneNumber}>

        <View style={styles.button}>
          <TouchableOpacity
          onPress={() => scrollSwiper(1)}
          >
            <Text style={styles.buttonText}>
              تصحیح شماره موبایل
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.phoneNumberMessage}>
          <Text style={styles.myText}>کد دریافت شده را وارد کنید</Text>
        </View>

        <View style={styles.phoneNumberShow}>
          <Text style={styles.myPhoneNumberText}>{sms}</Text>
          {
            sms.length >= 6
            ?
            <TouchableOpacity
            onPress={() => {
              savePhoneAndSms(phoneNumber , sms);
            }}
            >
            <View style={styles.next}>
                <MaterialIcon size={40} color="black" name={'arrow-forward'} />
            </View>
            </TouchableOpacity>
            :
            null
          }
        </View>
        <View style={styles.bottomLine}></View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  phoneNumber : {
    // backgroundColor : 'purple',
    paddingTop : 10,
    alignItems : 'center',
    flex : 1,
  }, 
  phoneNumberMessage : {
    // backgroundColor : 'gray',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    flex : 1,
  },
  phoneNumberShow : {
    // backgroundColor : 'gray',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    flex : 1,
  },
  myPhoneNumberText : {
    fontSize : 40,
    fontFamily : LalezarRegular,
    alignSelf : 'center',
    paddingHorizontal : 20,
    // borderBottomWidth : 2,
    // borderLeftWidth : 2,
  },
  bottomLine : {
    width : '80%',
    height : 2,
    backgroundColor : 'black',
    paddingLeft : 3,
    marginLeft : 3,
  },
  myText : {
    fontSize : 25,
    fontFamily : LalezarRegular,
    alignSelf : 'center',
  },
  button : {
    backgroundColor : 'teal',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10,
  }, 
  buttonText : {
    fontSize : 20,
    fontFamily : LalezarRegular,
    color : 'white',
    paddingHorizontal : 10,
    paddingVertical : 5,
  },
  next : {
    padding : 10,
    // backgroundColor : 'gray'
  }
})

export default SmsInput
