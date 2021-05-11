import * as React from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';

import Home from './home';
import NatureGallery from './natureGallery';
import Services from './services';
import About from './about';
import Contact from './contact';

/**
 * @author BadalSherpa
 * @function HomeNavigation
 **/

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='About' component={About} />
      <Stack.Screen name='NatureGallery' component={NatureGallery} />
    </Stack.Navigator>
  );
};

const AboutNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName='About'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='NatureGallery' component={NatureGallery} />
    </Stack.Navigator>
  );
};
const NatureNavigation = (props) => {
    return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='About' component={About} />
        <Stack.Screen name='NatureGallery' component={NatureGallery} />
        <Stack.Screen name='Services' component={Services} />
      </Stack.Navigator>
    );
  };

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeNavigation} />  
      <Drawer.Screen name='About' component={AboutNavigation} />
      <Drawer.Screen name='Gallery' component={NatureNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;