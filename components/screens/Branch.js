import React , { useContext } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import Header from '../header/Header';

import { useSelector } from 'react-redux'

import styled from 'styled-components/native';

import { windowHeight , windowWidth } from '../utils/Dimensions';
import SubBranch from '../utils/SubBranch';
import { FlatList } from 'react-native-gesture-handler';

import Footer from '../footer/Footer';
import SubChapterLogo from '../utils/SubChapterLogo';



const Container = styled.View`
  background-color : ${props => props.theme.MAIN_BACKGROUND};
  flex : 1;
`


const numbers = [ 
  {
    title : 'زیر شاخه'
  },
  {
    title : 'زیر شاخه'
  },
  {
    title : 'زیر شاخه'
  },
  {
    title : 'زیر شاخه'
  },
  {
    title : 'زیر شاخه'
  },
  {
    title : 'زیر شاخه'
  },
  {
    title : 'زیر شاخه'
  },
  {
    title : 'زیر شاخه'
  },
  {
    title : 'زیر شاخه'
  },
  {
    title : 'زیر شاخه'
  },
];


const Branch = ({ navigation }) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  // const title = navigation.getParam('title');
  // const logo = navigation.getParam('logo');
  // const items = navigation.getParam('items');

  const whichPage = navigation.getParam('whichPage');

  return (
    <>
    <StatusBar backgroundColor={theme.MAIN_BACKGROUND} barStyle="light-content" />
    
    <Container>
      <ImageBackground
      style={styles.image}
      source={require('../images/bg.png') }
      >

        
          <Header />

          <View style={styles.body}>

          <ScrollView >

            {/* <SubChapterLogo title={title} logo={logo} /> */}

            <View style={styles.branches}>

            {/* <FlatList
              style={styles.list}
              data={numbers}
              renderItem={() => <SubBranch />}
              keyExtractor={item => item}
            /> */}

            {
              numbers.map( (item , index) => {
              return (
                <SubBranch key={index} navigation={navigation} title={item.title} />
              )
              })
            }

            </View>

          </ScrollView>
          
          </View>

          <Footer navigation={navigation} whichPage={whichPage}/>
        
      

      </ImageBackground>

      </Container>
    </>
  )
}


const styles = StyleSheet.create({
  container : {
    backgroundColor : 'black',
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
  branches : {
    marginLeft : 80,
    marginTop : 40,
    flex : 1,
  }, 
  list : {
    marginBottom : 2,
    // borderColor : 'yellow',
    // borderWidth : 2,
    flex : 1,
  },
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
  },
  test : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    // backgroundColor : 'blue',
  }
});

export default Branch;
