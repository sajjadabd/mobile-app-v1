
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import { useSelector } from 'react-redux';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


import styled from 'styled-components/native';


const Container = styled.View`
  height : 73px;
  flex-direction : row;
  justify-content : space-around;
  align-items : center;
  background-color : ${props => props.theme.FOOTER};
`



const Icons = {
  home : 'home',
  altHome : 'house-siding',
  work : 'work',
  altWork : 'work-outline',
  bookmark : 'bookmark',
  altBookmark : 'bookmark-outline',
  person : 'person',
  altPerson : 'person-outline'
}

const Footer = ({ navigation , whichPage }) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  return (
    <>
      <Container>

        <View style={styles.touchableButton}>
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('Homepage' , { whichPage : 'home' }) }>
          <MaterialIcon size={40} color={theme.TEXT_COLOR} 
          name={whichPage == 'home' || whichPage == undefined ? Icons.home : Icons.altHome} />
        </TouchableOpacity>
        </View>
        
        {/* <View style={styles.touchableButton}>
          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Exam') }>
            <MaterialIcon size={40} color="white" name="edit" />
          </TouchableOpacity>
        </View> */}

        <View style={styles.touchableButton}>
          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Work' , { whichPage : 'work' }) }>
            <MaterialIcon size={40} color={theme.TEXT_COLOR} 
            name={whichPage == 'work' ? Icons.work : Icons.altWork} />
          </TouchableOpacity>
        </View>


        <View style={styles.touchableButton}>
          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Bookmark' , { whichPage : 'bookmark' }) }>
            <MaterialIcon size={40} color={theme.TEXT_COLOR} 
            name={whichPage == 'bookmark' ? Icons.bookmark : Icons.altBookmark} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.touchableButton}>
          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Profile' , { whichPage : 'profile' }) }>
            <MaterialIcon size={40} color={theme.TEXT_COLOR} 
            name={whichPage == 'profile' ? Icons.person : Icons.altPerson} />
          </TouchableOpacity>
        </View>

      </Container>
    </>
  );
};


const styles = StyleSheet.create({
  footer : {
    height : 73,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor : 'black',
  },
  touchableButton : {
    flex : 1,
  },
  button : {
    width : '100%',
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center',
  }
});


export default Footer
