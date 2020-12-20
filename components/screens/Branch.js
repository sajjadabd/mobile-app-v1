import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import Header from '../header/Header';


import { windowHeight , windowWidth } from '../utils/Dimensions';
import SubBranch from '../utils/SubBranch';
import { FlatList } from 'react-native-gesture-handler';

import Footer from '../footer/Footer';
import SubChapterLogo from '../utils/SubChapterLogo';

const Branch = ({ navigation }) => {
  
  const numbers = [1,2,3,4,5,6,7,8,9,10];

  const title = navigation.getParam('title');
  const logo = navigation.getParam('logo');
  const items = navigation.getParam('items');

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>

        <ScrollView >

          <SubChapterLogo title={title} logo={logo} />

          <View style={styles.braches}>

            {/* <FlatList
              style={styles.list}
              data={numbers}
              renderItem={() => <SubBranch />}
              keyExtractor={item => item}
            /> */}

            {
              numbers.map( (item , index) => {
                return (
                  <SubBranch key={index} navigation={navigation} />
                )
              })
            }

          </View>

        </ScrollView>
        
      </View>

      <Footer navigation={navigation}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container : {
    backgroundColor : '#6FA6B6',
    flex : 1,
  },
  body : {
    flex : 1,
  },
  myText : {
    color : 'black',
    fontFamily : 'Lalezar-Regular',
    padding : 20,
    fontSize : windowWidth / 9,
  },
  braches : {
    marginLeft : 80,
    marginTop : 40,
    flex : 1,
  } , 
  list : {
    marginBottom : 2,
    // borderColor : 'yellow',
    // borderWidth : 2,
    flex : 1,
  }
});

export default Branch;
