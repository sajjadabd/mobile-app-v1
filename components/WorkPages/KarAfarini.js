import React, { useState } from 'react';

import { 
  View , 
  Text , 
  StyleSheet ,
  TouchableOpacity
} from 'react-native'
import { ShabnamMedium } from '../utils/Fonts';

import styled from 'styled-components/native';
import AddWorkModal from '../Modals/AddWorkModal';




const Button = styled.View`
  background-color : ${(props) => props.theme.BUTTON_COLOR};
  display : flex;
  justify-content : center;
  align-items : center;
  border-radius : 10px;
  padding : 10px;
`

const Container = styled.View`
  flex : 1;
`


const KarAfarini = () => {

  const [showAddWorkModal , setShowAddWorkModal] = useState(false);

  const addWork = () => {
    setShowAddWorkModal(false)
  }
  
  return (
    <>
      <AddWorkModal  
      visible={showAddWorkModal}
      addWork={addWork}
      />
      
      <View style={styles.container}>
        <TouchableOpacity
        onPress={() => setShowAddWorkModal(true)}>
          <Button>
            <Text style={styles.myText}>
              ایجاد شغل
            </Text>
          </Button>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper : {
    
  },
  container : {
    flex : 1,
    padding : 20,
  },
  myText : {
    fontSize : 20,
    fontFamily : ShabnamMedium
  }
});

export default KarAfarini
