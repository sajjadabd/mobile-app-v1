/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import { windowHeight , windowWidth } from '../utils/Dimensions';

// import styled from 'styled-components/native'

import Carousel from 'react-native-snap-carousel';
import { NavigationEvents } from 'react-navigation';

import Footer from '../footer/Footer';
import Header from '../header/branchHeader';
import { LalezarRegular } from '../utils/Fonts';




const Homepage = ({ navigation }) => {

  const whichPage = navigation.getParam('whichPage');

  const [entries , setEntries] = useState([
    { title : 'خدمات' , logo : require('../logo/worker.png') , items : 52 } , 
    { title : 'صنعت' , logo : require('../logo/factory.png') , items : 52 } , 
    { title : 'کشاورزی' , logo : require('../logo/tractor.png') , items : 52 }  , 
    { title : 'هنر' , logo : require('../logo/flower.png') , items : 52 } , 
  ]);

  const _renderItem = ({item, index}) => {
      return (
        <TouchableOpacity 
        onPress={() => navigation.navigate('Branch', item)}
        style={styles.parentSlide}>
          <View style={styles.slide}>
              <Image
                style={styles.chapterLogo}
                source={item.logo}
              />
              <View style={styles.information}>
                <Text style={styles.title}>{ item.title }</Text>
                <Text style={styles.numberOfItems}>{ item.items } مورد</Text>
              </View>
          </View>
        </TouchableOpacity>
      );
  }

  return (
    <>
      <StatusBar backgroundColor="#6FA6B6" barStyle="light-content" />
      <View style={styles.body}>
        <Header />

        <View style={styles.carouselContainer} >
          <Carousel
            style={styles.carousel}
            ref={(c) => { _carousel = c; }}
            data={entries}
            renderItem={_renderItem}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 70}
          />
        </View>
        

        <Footer navigation={navigation} whichPage={whichPage}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    justifyContent : 'space-between',
  },
  block : {
    backgroundColor : '#6FA6B6',
    padding : 20,
    borderColor : 'black',
  },
  body : {
    flex : 1,
    justifyContent : 'space-between',
    backgroundColor  : '#6FA6B6',
  },
  scroll : {
    flex : 3,
  },
  myText : {
    color : 'white',
    fontSize : 25,
  },
  carouselContainer : {
    overflow : 'visible',
    alignItems : 'center',
    justifyContent : 'center',
  }, 
  carousel : {
  },
  parentSlide : {
    paddingTop : 70 ,
    // borderColor : 'black',
    // borderWidth : 1,
    width : windowWidth - 70,
    height : windowHeight - 200,
    justifyContent : 'center',
    alignItems : 'center',
  },
  slide : {
    // borderColor : 'red',
    // borderWidth : 1,
    width : windowWidth - 70 ,
    height : windowHeight / 2 - 40,
    justifyContent : 'flex-end',
    alignContent : 'flex-end',
    backgroundColor : '#4D7C8A',
    borderRadius : 20,
    overflow : 'visible',
    position : 'relative',
  }, 
  chapterLogo : {
    position : 'absolute',
    top : -110,
    alignSelf : 'center',
    width : windowWidth ,
    height : windowHeight / 2 - 50,
    flex : 1,
    resizeMode : 'contain',
  },  
  information : {
    flexDirection : 'row-reverse',
    justifyContent : 'space-between',
    paddingHorizontal : 20,
    paddingBottom : 20,
  },  
  title : {
    fontFamily : LalezarRegular,
    fontSize : windowWidth / 9,
    color : 'white',
  },
  numberOfItems : {
    fontFamily : LalezarRegular,
    alignSelf : 'flex-end',
    fontSize : windowWidth / 15,
    color : 'white',
  }
});

export default Homepage;
