import React from 'react'

import { View , Text , StyleSheet , TouchableOpacity } from 'react-native'
import { LalezarRegular } from '../utils/Fonts'

const NumberInput = ({phoneNumber , scrollSwiper}) => {

  const checkPhoneNumber = () => {
    if( phoneNumber.length < 11 ) {
      return (
        <>
        <Text style={styles.myText}>شماره موبایل خود را وارد کنید</Text>
        </>
      )
    } else {
      return (
        <>
        <View style={styles.button}>
          <TouchableOpacity
          onPress={() => scrollSwiper(2)}
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
          <Text style={styles.myPhoneNumberText}>{phoneNumber}</Text>
        </View>
        <View style={styles.bottomLine}></View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  phoneNumber : {
    // backgroundColor : 'purple',
    alignItems : 'center',
    flex : 1,
  }, 
  phoneNumberMessage : {
    // backgroundColor : 'gray',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection : 'row',
    flex : 2,
  },
  phoneNumberShow : {
    // backgroundColor : 'gray',
    justifyContent : 'center',
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
  }
})

export default NumberInput
