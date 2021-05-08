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

import Home from './home';
import NatureGallery from './natureGallery';
import Services from './services';
import About from './about';
import Contact from './contact';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{paddingTop: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.photon}>Photon</Text>
      <Ionicons name="menu" size={32} color="#000" onPress={() => navigation.toggleDrawer()} />
      </View>
      <Home />
    </View>
  );
}

function Gallery({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.photon}>Photon</Text>
        <Ionicons name="menu" size={32} color="#000" onPress={() => navigation.toggleDrawer()} />
      </View>
      <NatureGallery />
    </View>
  );
}

function ServiceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.photon}>Photon</Text>
        <Ionicons name="menu" size={32} color="#000" onPress={() => navigation.toggleDrawer()} />
      </View>
      <Services />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.photon}>Photon</Text>
        <Ionicons name="menu" size={32} color="#000" onPress={() => navigation.toggleDrawer()} />
      </View>
      <About />
    </View>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.photon}>Photon</Text>
        <Ionicons name="menu" size={32} color="#000" onPress={() => navigation.toggleDrawer()} />
      </View>
      <Contact />
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
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
    drawerPosition="right"
    drawerStyle={{ width: 260 }} 
    drawerContentOptions={{
      inactiveTintColor: '#000',
      activeTintColor: '#20c997',
      activeBackgroundColor: '#fff',
      itemStyle: { marginTop: 20, marginLeft:30, width: 150 },
      labelStyle:{
        fontFamily:'JosefinSans-Medium',
        fontSize: 22,}  
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Gallery" component={Gallery} />
      <Drawer.Screen name="Services" component={ServiceScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
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
    padding: 15,
    backgroundColor: '#fff'
  },
  photon:{
    fontFamily: 'JosefinSans-Medium',
    fontSize: 30,
  },
  closeIcon: {
    position: 'absolute',
    right: 16,
    top: 50,
    zIndex: 1
  },

  headTitle: {
    fontFamily: 'JosefinSans',
    fontSize: 35,
    alignItems: 'center', 
    justifyContent: 'center'
  },
 
})