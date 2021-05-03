import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import HomeStack from './screens/homeStack';

const getFonts = () => Font.loadAsync({
  'JosefinSans': require('./assets/Josefin_Sans/JosefinSans-Regular.ttf'),
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
