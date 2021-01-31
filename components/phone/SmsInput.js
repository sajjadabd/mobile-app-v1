import React from 'react';

import axios from 'axios';

import { 
  View , 
  Text , 
  StyleSheet , 
  TouchableOpacity ,
  TextInput ,
} from 'react-native'
import { LalezarRegular } from '../utils/Fonts'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';

import { setData  } from '../AsyncStorage/SecureStorage'

import { CONFIRM_SMS_URL } from '../URL/Urls';


const requestToServerForConfirmSms = async (phoneNumber , sms) => {
  console.log(phoneNumber) 
  console.log(CONFIRM_SMS_URL) 
  try {
    let result = await axios({
      method: 'POST',
      url: CONFIRM_SMS_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data : {
        "phone" : `${phoneNumber}`,
        "sms" : `${sms}`
      }
    });
    console.log(result.data);
    return result.data;
  } catch (e) {
    console.log("Error on Request to Server...")
  }
}


const SmsInput = ({phoneNumber , sms , setSMS , scrollSwiper , setPhoneReady}) => {
  

  const theme = useSelector(state => state.ThemeReducer.theme)

  const savePhoneAndSms = async (phoneNumber , sms) => {
    let result = await requestToServerForConfirmSms(phoneNumber , sms);
   
    console.log(result.success)
    if( result && result.success == true ) {
      // console.log("There is Success")
      await setData(phoneNumber , sms);
      setPhoneReady(true);
    }
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
          <Text style={[styles.myText , { color : theme.TEXT_COLOR}]}>کد دریافت شده را وارد کنید</Text>
        </View>

        <View style={styles.phoneNumberShow}>
          {/* <Text style={styles.myPhoneNumberText}>{sms}</Text> */}

          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => setSMS(text)}
            value={sms}
            keyboardType='number-pad'
          />

          {
            sms.length >= 6
            ?
            <TouchableOpacity
            onPress={() => {
              savePhoneAndSms(phoneNumber , sms);
            }}
            >
              <View style={styles.next}>
                  <MaterialIcon size={40} color={theme.TEXT_COLOR} name={'arrow-forward'} />
              </View>
            </TouchableOpacity>
            :
            null
          }
        </View>
        {/* <View style={styles.bottomLine}></View> */}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  phoneNumber : {
    // backgroundColor : 'purple',
    paddingTop : 10,
    alignItems : 'center',
    // flex : 1,
  }, 
  phoneNumberMessage : {
    // backgroundColor : 'gray',
    paddingBottom : 20,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    // flex : 1,
  },
  phoneNumberShow : {
    // backgroundColor : 'gray',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    // flex : 1,
  },
  textInputStyle : {
    flex : 1,
    fontSize : 20,
    borderWidth : 1,
    marginHorizontal : 20,
    paddingHorizontal : 10,
    backgroundColor : 'white',
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
    marginBottom : 20,
  }, 
  buttonText : {
    fontSize : 20,
    fontFamily : LalezarRegular,
    color : 'white',
    paddingHorizontal : 10,
    paddingVertical : 5,
  },
  next : {
    // paddingVertical : 10,
    paddingHorizontal : 30,
    // backgroundColor : 'gray'
  }
})

export default SmsInput
