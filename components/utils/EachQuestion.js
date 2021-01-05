import React from 'react';

import { View , Text , TouchableOpacity , StyleSheet } from 'react-native';

import { windowWidth } from './Dimensions';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';


import { useSelector } from 'react-redux'; 

const Container = styled.View`
  padding-left : 30px;
  padding-right : 30px;
  margin-bottom : 20px;
  flex-direction : row;
  justify-content : space-between;
  align-items : center;
  height : 100px;
  border-top-left-radius : 20px;
  border-bottom-left-radius : 20px;
  background-color : ${props => props.theme.BUTTON_COLOR};
`


const EachQuestion = ({navigation, save}) => {

  const theme = useSelector(state => state.ThemeReducer.theme)

  const returnTextStyle = () => {
    return {
      fontFamily : 'Lalezar-Regular',
      fontSize : windowWidth / 13,
      color : theme.TEXT_COLOR,
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={ () => navigation.navigate('SubBranch') }>
        <Container>
        <Text style={returnTextStyle()}>سوال</Text>
        <View>
          <MaterialIcon size={40} color={theme.TEXT_COLOR} name="east" />
        </View>
        </Container> 
      </TouchableOpacity>
      <View style={styles.save}>
      <TouchableOpacity
      onPress={() => null}
      style={styles.saveButton}
      >
            { 
            save
            ?
            <MaterialIcon size={40} color={theme.TEXT_COLOR} name="bookmark" />
            : 
            <MaterialIcon size={40} color={theme.TEXT_COLOR} name="bookmark-outline" />
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
    backgroundColor : 'black',
  },
  subtitle : {
    fontFamily : 'Lalezar-Regular',
    fontSize : windowWidth / 13,
    color : 'black',
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
