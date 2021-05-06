import * as React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/home';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.photon}>Photon</Text>
      <Ionicons name="menu" size={32} color="#000" style={styles.closeIcon} onPress={() => navigation.toggleDrawer()} />
      <Home />
    </View>
  );
}

function Gallery({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.photon}>Photon</Text>
      <Text style={styles.navText}>Gallery Screen</Text>
      <Ionicons name="menu" size={32} color="#000" style={styles.closeIcon} onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Ionicons name="close" size={32} color="#000" style={styles.closeIcon} onPress={() => props.navigation.closeDrawer()}/>
      <View>
      <DrawerItemList {...props} />
      </View>
      
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      /> */}
      
      {/* <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      /> */}
      
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
    drawerPosition="right"
    drawerStyle={{backgroundColor: '#fff', width: 260}} 
    drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Gallery" component={Gallery} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = ScaledSheet.create({
  container:{
    flex: 1,
    
    // justifyContent: 'center'

  },
  photon:{
    fontFamily: 'JosefinSans-Medium',
    fontSize: 35,
    left: 15,
    marginTop: 50

  },
  headTitle: {
    fontFamily: 'JosefinSans',
    fontSize: 35,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  closeIcon: {
    position: 'absolute',
    right: 16,
    top: 50
}
})


// inline
// headerStyle: {
// backgroundColor: '#f4511e', //Set Header color
// },
// headerTintColor: '#fff', //Set Header text color
// headerTitleStyle: {
// fontWeight: 'bold', //Set Header text style
// },