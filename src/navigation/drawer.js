import React from 'react';
import { View,StyleSheet } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screens/login/login';
import RegisterScreen from '../screens/register/register';
import Home from '../screens/welcome/home';
import TabNav from './tabs';
import App from '../screens/courseList/courseList';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar,Title,Caption, Drawer } from 'react-native-paper';
const drawer = createDrawerNavigator();

export default DrawerNav = () => {
  return (
    
      
    <drawer.Navigator
   
      screenOptions={{
        headerShown: true,
        headerStyle: {backgroundColor: '#2292C9'},
        drawerLabelStyle: {color: '#2F3A5B'},
       
        drawerContentStyle: {
          backgroundColor: '#fff',
          width: 280,
          paddingTop: 10,
        },
      }}>
      
      <drawer.Screen
        name="Home"
        component={TabNav}
        options={{
          title: 'Home',

          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? '#2F3A5B' : 'grey'}
            />
          ),
        }}></drawer.Screen>
      <drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',

          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="person"
              size={size}
              color={focused ? '#2F3A5B' : 'grey'}
            />
          ),
        }}></drawer.Screen>
      <drawer.Screen 
        name="Explore Courses"
        component={App}
        options={{
          title: 'Explore Courses',

          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="desktop"
              size={size}
              color={focused ? '#2F3A5B' : 'grey'}
            />
          ),
        }}></drawer.Screen>
    </drawer.Navigator>
    
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },});