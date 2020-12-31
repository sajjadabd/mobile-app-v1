import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('UserInfo', jsonValue)
  } catch (e) {
    // saving error
  }
}


export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('UserInfo')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}