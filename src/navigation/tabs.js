import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons';
import Home from '../screens/welcome/home';
import LoginScreen from '../screens/login/login';
import RegisterScreen from '../screens/register/register';
import {CourseContent} from '../screens/courseContent/courseContent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoContent from '../screens/videoContent/videoContent';
import CameraRollImage from '../screens/cameraRoll/cameraRoll';
import App from '../screens/courseList/courseList';
import Recorder from '../screens/recorder/recorder';

const Tab = createBottomTabNavigator();

export default TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Login') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          } else if (route.name === 'Course Content') {
            iconName = focused ? 'desktop' : 'desktop-outline';
          } else if (route.name === 'Register') {
            iconName = focused ? 'ios-person' : 'person-outline';
          } else if (route.name === 'Tutorials') {
            iconName = focused ? 'ios-play' : 'play-outline';
          } else if (route.name === 'Camera') {
            iconName = focused ? 'ios-camera' : 'camera-outline';
          } else if (route.name === 'Explore Courses') {
            iconName = focused ? 'desktop' : 'desktop-outline';
          } else if (route.name === 'Record') {
            iconName = focused ? 'mic' : 'mic-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
              style={{fontSize: 25}}
            />
          );
        },
        tabBarActiveTintColor: '#EC5252',
        tabBarInactiveTintColor: '#2F3A5B',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Register" component={RegisterScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Tutorials" component={VideoContent} />
      <Tab.Screen name="Course Content" component={CourseContent} />
      <Tab.Screen name="Camera" component={CameraRollImage} />
      <Tab.Screen name="Record" component={Recorder} />
      <Tab.Screen name="Explore Courses" component={App} />
    </Tab.Navigator>
  );
};
