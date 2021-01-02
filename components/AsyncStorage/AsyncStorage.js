import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  console.log('Stroring Data ...');
  console.log(value.phoneNumber);
  console.log(value.sms);
  try {
    // const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@phoneNumber', phoneNumber)
    await AsyncStorage.setItem('@sms', sms)
  } catch (e) {
    // saving error
  }
}


export const getData = async () => {
  try {
    const phoneNumber = await AsyncStorage.getItem('@phoneNumber')
    const sms = await AsyncStorage.getItem('@sms')
    
    console.log(phoneNumber , sms);
    
    return phoneNumber != null ? {
      phoneNumber , 
      sms
    } : null;
  } catch(e) {
    // error reading value
  }
}

export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('@phoneNumber')
    await AsyncStorage.removeItem('@sms')
    console.log('Done Removing Key...')
  } catch(e) {
    // remove error
  }

  
}