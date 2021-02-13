import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'


export const setData = async (phoneNumber , sms) => {
  try {
    await RNSecureStorage.set("phoneNumber", phoneNumber,{
      accessible: ACCESSIBLE.WHEN_UNLOCKED
    });
  
    await RNSecureStorage.set("sms", sms, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED
    });
  } catch (e) {
    
  }

  console.log('Storing Data ...');
}

export const setTheme = async (theme) => {
  try {
    await RNSecureStorage.set("theme", theme, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED
    });
  
  } catch (e) {
    
  }

  console.log('Storing Data ...');
}


export const getData = async () => {
  let phoneNumber = null;
  let sms = null;

  try {
    phoneNumber = await RNSecureStorage.get("phoneNumber");
    sms = await RNSecureStorage.get("sms");
  } catch (e) {
    
  }

  return {
    phoneNumber , 
    sms
  }
}



export const getTheme = async () => {
  let theme = null;

  try {
    theme = await RNSecureStorage.get("theme");
  } catch (e) {
    
  }

  return {
    theme
  }
}


export const removeData = async () => {
  try {
    await RNSecureStorage.remove("phoneNumber");
    await RNSecureStorage.remove("sms");
    await RNSecureStorage.remove("theme");
  } catch (e) {
    
  }
}


export const existsData = async () => {

  let phoneNumber = false;
  let sms = false;

  try {
    phoneNumber = await RNSecureStorage.exists("phoneNumber")
    sms = await RNSecureStorage.exists("sms")
  } catch (e) {
    
  }

  return {
    phoneNumber , 
    sms
  }
}