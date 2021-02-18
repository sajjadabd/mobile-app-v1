import React , { useState , useEffect , useContext } from 'react';

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

import { useSelector } from 'react-redux';

import styled from 'styled-components/native';

import { windowHeight , windowWidth } from '../utils/Dimensions';
import SubBranch from '../utils/SubBranch';

import Footer from '../footer/Footer';
import EachStandard from '../utils/EachStandard';
import SubChapterLogo from '../utils/SubChapterLogo';

import { GET_STANDARDS } from '../URL/Urls';

import axios from 'axios';


const Container = styled.View`
  background-color : ${props => props.theme.MAIN_BACKGROUND};
  flex : 1;
`

const Standard = ({ navigation }) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  const title = navigation.getParam('title');
  const logo = navigation.getParam('logo');
  // const standards = navigation.getParam('standards');
  const branchName = navigation.getParam('branchName');
  const branchID = navigation.getParam('branchID');

  // const standards = useSelector(state => state.BranchReducer.branches[branchID-1].standards); 

  // const numbers = [1,2,3,4,5,6,7,8,9,10];
  
  const [standards , setStandards] = useState(undefined);

  const requestToServerForStandards = async () => {
    console.log(GET_STANDARDS + branchID);
    try {
      const result = await axios({
        method: 'GET',
        url: GET_STANDARDS + branchID,
        headers: {
          'Content-Type': 'application/json'
        },
        data : {
          
        }
      });
      console.log('standards :' , result.data.result);
      setStandards(result.data.result);
    } catch (e) {
      console.log("Error Happens for fetch standards ...");
    }
  }

  useEffect( () => {
    const fetchStandards = async () => {
      await requestToServerForStandards();
    }
    if(standards == undefined) {
      fetchStandards();
    }
  });

  

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

        <ScrollView >

          <SubChapterLogo title={branchName} logo={logo} />

          <View style={styles.braches}>

            {/* <FlatList
              style={styles.list}
              data={numbers}
              renderItem={() => <SubBranch />}
              keyExtractor={item => item}
            /> */}

            {
              standards && standards.map( (item , index) => {
                return (
                  <EachStandard 
                    key={index} 
                    navigation={navigation} 
                    item={item} 
                    branchName={branchName} 
                    branchID={branchID} 
                  />
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
  image: {
    flex : 1,
    width: '100%',
    height: '100%',
    resizeMode : 'cover',
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

export default Standard;
