import * as React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.homeContainer}>
        <Text>Copyright ©2021 All rights reserved | This template is made with  by Colorlib</Text>
    </View>
  );
}

const styles = ScaledSheet.create({
    homeContainer:{
        flex: 1,
        padding: 15
    }
})