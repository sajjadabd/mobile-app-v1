import React , { useState } from 'react';

import axios from 'axios';

import { 
  View , 
  Text , 
  StyleSheet , 
  TouchableOpacity ,
  TouchableWithoutFeedback,
  TextInput ,
  PixelRatio ,
  SafeAreaView ,
  Image
} from 'react-native'
import { LalezarRegular, ShabnamMedium, UbuntoMedium, VazirRegularFD } from '../utils/Fonts'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import Circle from 'react-native-progress/Circle'

import CircleSnail from 'react-native-progress/CircleSnail'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { useSelector } from 'react-redux';

import { setData  } from '../AsyncStorage/SecureStorage'

import { CONFIRM_SMS_URL } from '../URL/Urls';
import { windowHeight, windowWidth } from '../utils/Dimensions';



const CELL_COUNT = 4;


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
    console.log("Error on Request to Server ...")
  }
}


const SmsInput = ({phoneNumber , sms , setSMS , scrollSwiper , setPhoneReady}) => {
  

  const theme = useSelector(state => state.ThemeReducer.theme)


  const [send, setSend] = useState(false);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  // ref.current.focus();
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });



  const savePhoneAndSms = async (phoneNumber , sms) => {
    setSend(true);
    let result = await requestToServerForConfirmSms(phoneNumber , sms);
    
    console.log(result.success)
    if( result && result.success == true ) {
      // console.log("There is Success")
      await setData(phoneNumber , sms);
      setPhoneReady(true);
    } else {
      setSend(false);
    }
  }

  
  
  return (
    <TouchableWithoutFeedback
    onPress={() => ref.current.focus()}
    >
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

          <View style={styles.inputContainer}>
            {/* <TextInput
              style={styles.textInputStyle}
              onChangeText={text => setSMS(text)}
              value={sms}
              keyboardType='number-pad'
            /> */}

          <SafeAreaView style={smsStyle.root}>  
            {/* <Text style={smsStyle.title}>Underline example</Text> */}
            <CodeField
              ref={ref}
              {...props}
              value={sms}
              onChangeText={text => setSMS(text)}
              // onContentSizeChange={() => this.refs.list.scrollToEnd()}
              cellCount={CELL_COUNT}
              rootStyle={smsStyle.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[smsStyle.cellRoot, isFocused && smsStyle.focusCell]}>
                  <Text style={smsStyle.cellText}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </SafeAreaView>

          </View>
          

          <View>
            {
              sms.length >= 4
              ?
                send == false 
                ?
                <TouchableOpacity
                onPress={() => {
                  savePhoneAndSms(phoneNumber , sms);
                }}
                >
                  <View style={styles.next}>
                      <Text style={styles.enterButtonText}>ورود</Text>
                      <MaterialIcon size={40} color={theme.BLACK_COLOR} name={'arrow-forward'} />
                  </View>
                </TouchableOpacity>
                :
                <CircleSnail
                  style={styles.progressBar} 
                  size={50} 
                  color={[ '#ffffff' , '#f3f3f3' ]}
                />    
              :
              <Image
                style={styles.logo}
                source={require('../logo/sms.png')}
              />
            }
          </View>

          
        </View>
        {/* <View style={styles.bottomLine}></View> */}
      </View>
    </TouchableWithoutFeedback>
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
    paddingBottom : 0,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    // flex : 1,
  },
  phoneNumberShow : {
    // backgroundColor : 'gray',
    // flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    // flex : 1,
  },
  inputContainer : {
    // flex : 1,
    flexDirection : 'row',
    justifyContent : 'center',
  },
  textInputStyle : {
    // flex : 1,
    fontSize : 20 ,
    width : '50%' ,
    borderWidth : 1 ,
    marginHorizontal : 20 ,
    marginVertical : 20 ,
    paddingHorizontal : 20 ,
    fontFamily : UbuntoMedium ,
    backgroundColor : 'white' ,
    borderRadius : windowWidth / 6 / PixelRatio.get() ,
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
    fontFamily : ShabnamMedium,
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
    fontFamily : ShabnamMedium,
    color : 'white',
    paddingHorizontal : 20,
    paddingVertical : 10,
  },
  next : {
    // paddingVertical : 10,
    flexDirection : 'row',
    marginTop : 20 ,
    backgroundColor : 'white',
    paddingHorizontal : 20 ,
    paddingVertical : 20,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : windowWidth / 6 / PixelRatio.get() ,
    // backgroundColor : 'gray'
  },
  enterButtonText : {
    fontSize : 25,
    fontFamily : ShabnamMedium,
    alignSelf : 'center',
    color : 'black',
    paddingHorizontal : 20,
  },
  logo : {
    width : windowWidth  ,
    height : windowHeight / 3 - 50,
    marginTop : 40,
    resizeMode : 'contain',
  },
  progressBar : {
    marginTop : 20,
  }
})


const smsStyle = StyleSheet.create({
  root: {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    // backgroundColor : 'white'
  },
  title: {
    textAlign: 'center', 
    fontSize: 30
  },
  codeFieldRoot: {
    marginTop: 10,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: 'white',
    fontSize: 36 ,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  }
});

export default SmsInput
