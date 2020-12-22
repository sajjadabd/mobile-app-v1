
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

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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

  return (
    <>
      <View style={styles.footer}>

        <View style={styles.touchableButton}>
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('Homepage' , { whichPage : 'home' }) }>
          <MaterialIcon size={40} color="white" 
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
            <MaterialIcon size={40} color="white" 
            name={whichPage == 'work' ? Icons.work : Icons.altWork} />
          </TouchableOpacity>
        </View>


        <View style={styles.touchableButton}>
          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Bookmark' , { whichPage : 'bookmark' }) }>
            <MaterialIcon size={40} color="white" 
            name={whichPage == 'bookmark' ? Icons.bookmark : Icons.altBookmark} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.touchableButton}>
          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Profile' , { whichPage : 'profile' }) }>
            <MaterialIcon size={40} color="white" 
            name={whichPage == 'profile' ? Icons.person : Icons.altPerson} />
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
};


const styles = StyleSheet.create({
  footer : {
    height : 73,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    backgroundColor : '#51344D',
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
