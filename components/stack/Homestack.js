import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Homepage from '../screens/Homepage';
import Profile from '../screens/Profile';
import Bookmark from '../screens/Bookmark';
import Work from '../screens/Work';
import Edit from '../screens/Edit';
import Branch from '../screens/Branch';


import { View } from 'react-native'

const screens = {
  Homepage : {
    screen : Homepage,
    navigationOptions : {
      title : '',
      headerStyle : {
        height : 0,
      }
    }
  },
  Profile : {
    screen : Profile ,
    navigationOptions : {
      title : 'صفحه شخصی' , 
      header : () => <View></View> ,
      headerStyle : {
        backgroundColor : '#51344D',
        height : 0,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        height : 0,
        color: 'white',
        fontFamily : 'Lalezar-Regular'
      }
    }
  },
  Bookmark : {
    screen : Bookmark ,
    navigationOptions : {
      title : 'Bookmark' , 
      headerStyle : {
        backgroundColor : '#51344D',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontFamily : 'Lalezar-Regular'
      }
    }
  },
  Work : {
    screen : Work ,
    navigationOptions : {
      title : 'Work' , 
      headerStyle : {
        backgroundColor : '#51344D',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontFamily : 'Lalezar-Regular'
      }
    }
  },
  Edit : {
    screen : Edit ,
    navigationOptions : {
      title : 'Edit' , 
      headerStyle : {
        backgroundColor : '#51344D',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontFamily : 'Lalezar-Regular'
      }
    }
  },
  Branch : {
    screen : Branch ,
    navigationOptions : {
      title : '' , 
      headerStyle : {
        backgroundColor : '#51344D',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: 'white',
        fontFamily : 'Lalezar-Regular'
      }
    }
  },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);