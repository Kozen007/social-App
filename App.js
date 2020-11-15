import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'rect-navigation-tabs';

import HomeScreen from './screen/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoadingScreen from './screen/LoadingScreen';
import { create } from 'react-test-renderer';

const AppContainer = createStackNavigation(
 {
   Home: HomeScreen,
   Message: MessageScreen
 }
)

const AuthStack = createStackNavigation(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  }
 )

 export default createAppContainer(
   create
 )