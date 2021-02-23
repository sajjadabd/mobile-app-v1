import React , { useState , useContext , useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ImageBackground ,
  ActivityIndicator
} from 'react-native';

import Header from '../header/Header';

import { useSelector } from 'react-redux'

import styled from 'styled-components/native';

import { windowHeight , windowWidth } from '../utils/Dimensions';
import SubBranch from '../utils/SubBranch';
import { FlatList } from 'react-native-gesture-handler';

import Footer from '../footer/Footer';
import SubChapterLogo from '../utils/SubChapterLogo';

import axios from 'axios';

import { GET_ALL_BRANCHES } from '../URL/Urls';






const Container = styled.View`
  background-color : ${props => props.theme.MAIN_BACKGROUND};
  flex : 1;
`


const Branch = ({ navigation }) => {

  const theme = useSelector(state => state.ThemeReducer.theme);

  // const branches = useSelector(state => state.BranchReducer.branches);
  // const branches = requestToServerForBranches();

  const [branches , setBranches] = useState(undefined);

  const requestToServerForBranches = async () => {
    try {
      const result = await axios({
        method: 'GET',
        url: GET_ALL_BRANCHES,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          
        }
      });
      console.log('branches :' , result.data.result);
      setBranches(result.data.result);
    } catch (e) {
      console.log("Error Happens for fetch branches ...");
    }
  }

  useEffect( () => {
    const fetchBranches = async () => {
      await requestToServerForBranches();
    }
    if(branches == undefined) {
      fetchBranches();
    }
  });


  const showLoaderOrContent = () => {
    if ( branches != undefined ) {
      return (
        <ScrollView >
        <View style={styles.branches}>

        {/* <FlatList
          style={styles.list}
          data={numbers}
          renderItem={() => <SubBranch />}
          keyExtractor={item => item}
        /> */}

        {
          branches && branches.map( (item , index) => {
            return (
              <SubBranch 
                key={index} 
                navigation={navigation} 
                // standards={item.standards} 
                branchName={item.branch_name}
                branchID={item.id}
              />
            )
          })
        }

        </View>
        </ScrollView>
      )
    } else {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )
    }
  }

  // console.log('branches : ' , branches);

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
        source={require('../images/bg.png')}
      >

        
          <Header />

          <View style={styles.body}>

            {showLoaderOrContent()}

            {/* <SubChapterLogo title={title} logo={logo} /> */}  
          
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
  },
  loader : {
    flex : 1 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
  }
});

export default Branch;
