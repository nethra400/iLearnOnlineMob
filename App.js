import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LoginScreen} from './src/screens/login/login';
import {RegisterScreen} from './src/screens/register/register';
import {CourseContent} from './src/screens/courseContent/courseContent';
import {CourseVideo} from './src/screens/courseVideo/courseVideo';
import Recorder from './src/screens/recorder/recorder';
import CourseList from './src/screens/courseList/courseList';
import {CameraRollImage} from './src/screens/cameraRoll/cameraRoll';
import {VideoContent} from './src/screens/videoContent/videoContent';
import {Home} from './src/screens/welcome/home';
import {NavigationContainer} from '@react-navigation/native';

import TabNav from './src/navigation/tabs';
import DrawerNav from './src/navigation/drawer';
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav></DrawerNav>
    </NavigationContainer>

   // <LoginScreen></LoginScreen>
    //<RegisterScreen></RegisterScreen>
    //<CourseContent></CourseContent>
    //<CourseVideo></CourseVideo>
    // <Recorder></Recorder>
    //<CourseList></CourseList>
     //<CameraRollImage></CameraRollImage>
    //<VideoContent></VideoContent>
    //<Home></Home>
  );
};

export default App;
