import React from 'react';

import { View , Text , TouchableOpacity , StyleSheet } from 'react-native';

import { windowWidth } from './Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const EachQuestion = ({navigation, save}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={ () => navigation.navigate('SubBranch') }
        style={styles.branch}> 
        <Text style={styles.subtitle}>سوال</Text>
        <View>
          <MaterialIcon size={40} color="white" name="east" />
        </View>
      </TouchableOpacity>
      <View style={styles.save}>
      <TouchableOpacity
      onPress={() => null}
      style={styles.saveButton}
      >
            { 
            save
            ?
            <MaterialIcon size={40} color="white" name="bookmark" />
            : 
            <MaterialIcon size={40} color="white" name="bookmark-outline" />
            }
            
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    marginBottom : 20,
  },
  branch : {
    paddingHorizontal : 30,
    marginBottom : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    height : 100,
    borderTopLeftRadius : 20,
    borderBottomLeftRadius : 20,
    backgroundColor : '#4D7C8A',
  },
  subtitle : {
    fontFamily : 'Lalezar-Regular',
    fontSize : windowWidth / 13,
    color : 'white',
  },  
  save : {
    position : 'absolute',
    bottom : 0,
    left : 10,
  },
  saveButton : {
  }
});

export default EachQuestion
