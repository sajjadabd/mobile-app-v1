import React , {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Footer from '../footer/Footer';

import { LalezarRegular } from '../utils/Fonts';
import SubBranch from '../utils/SubBranch';

import SegmentedControlTab from "react-native-segmented-control-tab";

import QuestionsBookmark from '../BookmarkPages/QuestionsBookmark';
import BrancheBookmark from '../BookmarkPages/BrancheBookmark';

import { useSelector } from 'react-redux';

import styled from 'styled-components/native';

const Container = styled.View`
  padding-left : 50px;
  flex : 7;
  background-color  : ${props => props.theme.MAIN_BACKGROUND};
`


const Bookmark = ({ navigation }) => {

  const [selectedIndex , setSelectedIndex] = useState(1);

  const theme = useSelector(state => state.ThemeReducer.theme)

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  const whichPage = navigation.getParam('whichPage');

  const returnTabStyle = () => {
    return {
      backgroundColor : theme.MAIN_BACKGROUND,
      borderRadius : 0,
    }
  }

  const returnActiveTabStyle = () => {
    return {
      backgroundColor : theme.MAIN_BACKGROUND,
      borderWidth : 0,
    }
  }

  return (
    <>
    <StatusBar backgroundColor={theme.MAIN_BACKGROUND} barStyle="light-content" />
    
    <View style={styles.body}>

      <SegmentedControlTab
          tabsContainerStyle={tabStyles.tabsContainerStyle}
          tabStyle={returnTabStyle()}
          firstTabStyle={tabStyles.firstTabStyle}
          lastTabStyle={tabStyles.lastTabStyle}
          activeTabStyle={returnActiveTabStyle()}
          activeTabTextStyle={tabStyles.activeTabTextStyle}
          tabTextStyle={tabStyles.tabTextStyle}
          allowFontScaling={false}
          values={["سوالات", "زیر شاخه"]}
          selectedIndex={selectedIndex}
          onTabPress={handleIndexChange}
      />

      {/* <View style={styles.tabs}>

        <View style={styles.item}>
          <TouchableOpacity 
          onPress={() => null}
          style={styles.touchableButton}
          >
            <Text style={styles.itemText}>زیر شاخه</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.seperatorContainer}>
          <View style={styles.seperator}>

          </View>
        </View>
        

        <View style={styles.item}>
          <TouchableOpacity 
          onPress={() => null}
          style={styles.touchableButton}
          >
            <Text style={styles.itemText}>سوالات</Text>
          </TouchableOpacity>
        </View>

      </View> */}

      <Container>

        <ScrollView style={styles.scroll}>
          
          {
            selectedIndex == 0 
            ?
            <QuestionsBookmark navigation={navigation} />
            :
            <BrancheBookmark navigation={navigation} />
          }


        </ScrollView>

      {/* <SlidableTabBar>
				<QuestionsBookmark title="سوالات" />
				<BrancheBookmark title="زیر شاخه" />
			</SlidableTabBar> */}

      </Container>
      
      
    </View>
    <Footer navigation={navigation} whichPage={whichPage} />
    </>
  )
}

const styles = StyleSheet.create({
  body : {
    flex : 1,
    justifyContent : 'space-between',
    backgroundColor  : '#6FA6B6'
  },
  myText : {
    color : 'black',
    padding : 20,
    fontSize : 25,
  },
  tabs : {
    flex : 1,
    backgroundColor : '#4D7C8A',
    flexDirection : 'row-reverse',
  }, 
  item : {
    flex : 1,
    // borderWidth : 1,
    borderBottomWidth : 2,
    
  },
  seperatorContainer : {
    borderBottomWidth : 2,
    height : '100%',
    alignItems : 'center',
    justifyContent : 'center'
  },
  seperator : {
    width : 2,
    height : '80%',
    marginVertical : 10,
    backgroundColor : 'black',
  },
  itemText : {
    color : 'white',
    fontSize : 20,
    fontFamily : LalezarRegular,
  },
  container : {
    paddingLeft : 50,
    flex : 7,
    backgroundColor : '#6FA6B6',
  },
  scroll : {
    flex : 1,
  },
  touchableButton : {
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center',
  }
});




const tabStyles = StyleSheet.create({
  tabsContainerStyle: {
    height : 70,
    borderRadius : 0,
  },
  tabStyle: {
    backgroundColor : 'rgba(255,255,255,0.1)',
    borderColor : 'rgba(255,255,255,0.1)',
    borderRadius : 0,
  },
  firstTabStyle: {
    borderWidth : 0,
  },
  lastTabStyle: {
    borderWidth : 0,
  },
  tabTextStyle: {
    color : 'black',
    fontFamily : LalezarRegular,
    fontSize : 15,
  },
  activeTabStyle: {
    backgroundColor : '#51344D',
    borderWidth : 0,
  },
  activeTabTextStyle: {
    color : 'white',
    fontFamily : LalezarRegular,
    fontSize : 30,
  },
  tabBadgeContainerStyle: {
    //custom styles
  },
  activeTabBadgeContainerStyle: {
    //custom styles
  },
  tabBadgeStyle: {
    //custom styles
  },
  activeTabBadgeStyle: {
    //custom styles
  }
});


export default Bookmark
