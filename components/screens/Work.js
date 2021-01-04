import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  PixelRatio
} from 'react-native';
import Footer from '../footer/Footer';

import WorkCard from '../utils/WorkCard';

import { useSelector } from 'react-redux';

import styled from 'styled-components/native';

const numbers = [1,2,3,4,5,6,7,8,9,10];


const Container = styled.View`
  flex : 1;
  justify-content : space-between;
  background-color  : ${props => props.theme.MAIN_BACKGROUND};
`


const Work = ({ navigation }) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  const whichPage = navigation.getParam('whichPage');

  return (
    <>
      <StatusBar backgroundColor={theme.MAIN_BACKGROUND} barStyle="light-content" />
      <Container>
        
      <ScrollView style={styles.scroll}>
          <View style={styles.scrollContent}>
            {
              numbers.map( (item , index) => {
                return (
                  <WorkCard key={index} />
                 )
              })
            }
          </View>

          

        </ScrollView>

      </Container>
      <Footer navigation={navigation} whichPage={whichPage}/>
    </>
  )
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    justifyContent : 'space-between',
    backgroundColor  : '#6FA6B6'
  },
  scroll : {
    flex : 1,
    marginTop : 50,
  },
  scrollContent : {
    paddingTop : 20,
  }
});


export default Work
