import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';
import Planets from './pages/Planets';
import Erro from './pages/Erro';

const AppNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Planets:{
    screen: Planets, 
    navigationOptions: {
      header: null,
    }, 
  },
  Erro:{
    screen: Erro, 
    navigationOptions: {
      header: null,
    },
  },  
},
);

export default createAppContainer(AppNavigator);