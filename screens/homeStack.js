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

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.navText}>Home Screen</Text>
      <Text style={styles.navText} title="Toggle" onPress={() => navigation.toggleDrawer()}>Toggle</Text>
    </View>
  );
}

function Gallery({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.navText}>Gallery Screen</Text>
      <Text style={styles.navText} title="Toggle" onPress={() => navigation.toggleDrawer()}>Toggle</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Toggle"
        onPress={() => props.navigation.toggleDrawer()}
      />
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
      <Drawer.Screen name="Home" component={Home} />
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
    alignItems: 'center', 
    justifyContent: 'center'

  },
  navText: {
    fontFamily: 'JosefinSans',
    fontSize: 35
  },
  drawFont:{
    
  }
})