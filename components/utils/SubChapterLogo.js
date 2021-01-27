import React from 'react';

import { View , Text , Image , StyleSheet } from 'react-native'
import { windowHeight, windowWidth } from './Dimensions';

import LinearGradient from 'react-native-linear-gradient';
import { withTheme } from 'styled-components/native';


const SubChapterLogo = ({ title , logo }) => {

  return (
    <LinearGradient 
    colors={['transparent', 'transparent', 'rgba(255,255,255,0.3)']}
    style={styles.slide}>
        <Image
          style={styles.chapterLogo}
          source={logo}
        />
        <View style={styles.information}>
          <Text style={styles.title}>{ title }</Text>
        </View>
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  slide : {
    // borderColor : 'red',
    // borderWidth : 1,
    // borderColor : 'black',
    // borderWidth : 1,
    paddingHorizontal : 10,
    marginHorizontal : 20,
    marginTop : 30,
    height : 100 ,
    justifyContent : 'flex-end',
    alignContent : 'flex-end',
    // backgroundColor : '#4D7C8A',
    borderRadius : 20,
    borderBottomColor : 'white',
    overflow : 'visible',
    position : 'relative',
  }, 
  chapterLogo : {
    position : 'absolute',
    top : -15,
    left : -130,
    alignSelf : 'center',
    width : windowWidth ,
    height : windowHeight / 5 - 50,
    flex : 1,
    resizeMode : 'contain',
  },  
  information : {
    flex : 1,
    // borderColor : 'black',
    // borderWidth : 1,
    paddingTop : 15,
    paddingHorizontal : 20,
  },  
  title : {
    // borderColor : 'black',
    // borderWidth : 1,
    alignSelf : 'flex-end',
    fontFamily : 'Lalezar-Regular',
    fontSize : windowWidth / 9,
    color : 'white',
  },
});

export default SubChapterLogo
