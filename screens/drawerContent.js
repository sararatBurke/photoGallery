import * as React from 'react';
import { View, Text } from 'react-native';
import {
    DrawerContentScrollView,
  
} from '@react-navigation/drawer';

export default function DrawerContent(props) {
    return(
        <View>
            <DrawerContentScrollView {...props}>
                <View>
                    <Text>This is a test</Text>
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

