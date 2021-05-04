import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import HomeStack from './screens/homeStack';

const getFonts = () => Font.loadAsync({
  'JosefinSans': require('./assets/Josefin_Sans/JosefinSans-Regular.ttf'),
  'JosefinSans-Italic': require('./assets/Josefin_Sans/JosefinSans-Italic.ttf'),
  'JosefinSans-Light': require('./assets/Josefin_Sans/JosefinSans-Light.ttf'),
  'JosefinSans-LightItalic': require('./assets/Josefin_Sans/JosefinSans-LightItalic.ttf'),
  'JosefinSans-Medium': require('./assets/Josefin_Sans/JosefinSans-Medium.ttf'),
  'JosefinSans-Bold': require('./assets/Josefin_Sans/JosefinSans-Bold.ttf'),
  'JosefinSans-SemiBold': require('./assets/Josefin_Sans/JosefinSans-SemiBold.ttf'),
  
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return(
      <HomeStack />
    );
  }
  else{
    return(
      <AppLoading 
        startAsync = {getFonts}
        onFinish = { () => setFontsLoaded(true) }
        onError ={console.warn}
      />
    );
  }
}
