import React , { useState , Fragment } from 'react'

import { 
  View , 
  Text , 
  StyleSheet , 
  TouchableOpacity ,
  TextInput ,
  SafeAreaView
} from 'react-native'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import { LalezarRegular } from '../utils/Fonts'

import axios from 'axios';


import { useSelector } from 'react-redux';


import { GET_SMS_URL } from '../URL/Urls';

const requestToServerForSms = async (phoneNumber) => {
  console.log(phoneNumber)
  try {
    await axios({
      method: 'POST',
      url: GET_SMS_URL,
      headers: {
        'Content-Type': 'application/json'
      },
      data : {
        "to" : `${phoneNumber}`
      }
    });
  } catch (e) {
    
  }
}


const CELL_COUNT = 11;

const NumberInput = ({phoneNumber , setPhoneNumber , scrollSwiper}) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const sendSms = (phoneNumber) => {
    requestToServerForSms(phoneNumber);
    scrollSwiper(2);
  }

  const checkPhoneNumber = () => {
    if( phoneNumber.length < 11 ) {
      return (
        <>
          <Text style={[styles.myText , { color : theme.TEXT_COLOR}]}>شماره موبایل خود را وارد کنید</Text>
        </>
      )
    } else {
      return (
        <>
        <View style={styles.button}>
          <TouchableOpacity
          onPress={() => {
            sendSms(phoneNumber);
          }}
          >
            <Text style={styles.buttonText}>
              دریافت کد تایید
            </Text>
          </TouchableOpacity>
        </View>
        </>
      )
    }
  }

  return (
    <>
      <View style={styles.phoneNumber}>
        <View style={styles.phoneNumberMessage}>
          {checkPhoneNumber()}
        </View>
        <View style={styles.phoneNumberShow}>
          {/* <Text style={styles.myPhoneNumberText}>{phoneNumber}</Text> */}
          {/* <TextInput 
            style={styles.textInputStyle}
            onChangeText={text => setPhoneNumber(text)}
            value={phoneNumber}
            keyboardType='number-pad'
          /> */}
          <SafeAreaView style={phoneStyle.root}>
            {/* <Text style={phoneStyle.title}>Social Security number</Text> */}
            <CodeField
              ref={ref}
              {...props}
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              cellCount={CELL_COUNT}
              rootStyle={phoneStyle.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Fragment key={index}>
                  <Text
                    key={`value-${index}`}
                    style={[phoneStyle.cell, isFocused && phoneStyle.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                  {index === 3 || index === 6 ? (
                    <View key={`separator-${index}`} style={phoneStyle.separator} />
                  ) : null}
                </Fragment>
              )}
            />
          </SafeAreaView>
        </View>
        {/* <View style={styles.bottomLine}></View> */}
      </View>
    </>
  )

  
}

const styles = StyleSheet.create({
  phoneNumber : {
    // backgroundColor : 'purple',
    // alignItems : 'center',
    // flex : 1,
  }, 
  phoneNumberMessage : {
    // backgroundColor : 'gray',
    paddingBottom : 30,
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    // flex : 2,
  },
  phoneNumberShow : {
    // backgroundColor : 'gray',
    
    justifyContent : 'center',
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
    paddingHorizontal : 10,
    paddingVertical : 5,
  },
  button : {
    backgroundColor : 'teal',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10,
  }, 
  buttonText : {
    fontSize : 25,
    fontFamily : LalezarRegular,
    color : 'white',
    paddingHorizontal : 10,
    paddingVertical : 5,
  }
})


const phoneStyle = StyleSheet.create({
  root: {
    padding: 10, 
    // minHeight: 300
  },
  title: {
    textAlign: 'center', 
    fontSize: 30
  },
  codeFieldRoot: {
    marginTop: 20
  },
  cell: {
    width: 30,
    height: 35,
    lineHeight: 35,
    fontSize: 30,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#00000030',
    backgroundColor : 'white',
    textAlign: 'center',
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginHorizontal : 3,
  },
  focusCell: {
    borderColor: 'white',
  },
});

export default NumberInput
