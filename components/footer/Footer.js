
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

const Footer = ({ navigation }) => {

  return (
    <>
      <View style={styles.footer}>

        <View style={styles.touchableButton}>
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => navigation.navigate('Homepage') }>
          <MaterialIcon size={40} color="white" name="home" />
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
          onPress={ () => navigation.navigate('Work') }>
            <MaterialIcon size={40} color="white" name="work" />
          </TouchableOpacity>
        </View>


        <View style={styles.touchableButton}>
          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Bookmark') }>
            <MaterialIcon size={40} color="white" name="bookmark" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.touchableButton}>
          <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Profile') }>
            <MaterialIcon size={40} color="white" name="person" />
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
