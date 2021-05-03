import React from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet} from 'react-native-size-matters';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
  container:{
    flex: 1,
    padding: 10
  }

})