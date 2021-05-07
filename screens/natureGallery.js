import * as React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text,  Image, ScrollView } from 'react-native';

export default function App() {
    const images = [
        "https://preview.colorlib.com/theme/photon/images/nature_small_1.jpg",
        "https://preview.colorlib.com/theme/photon/images/nature_small_3.jpg",
        "https://preview.colorlib.com/theme/photon/images/nature_small_5.jpg",
        "https://preview.colorlib.com/theme/photon/images/nature_small_8.jpg"

    ]

  return (
    <View style={styles.homeContainer}>
        <ScrollView>
        <View style={styles.natureHeader}>
            <Text style={{fontFamily: 'JosefinSans-Medium', fontSize: 40,}}>Nature Gallery</Text>
            <Text style={{width:100, borderTopWidth: 2, borderTopColor: '#000', marginBottom: 10}}></Text>
        </View>
        <View style={styles.gallery}>
            {
                images.map( (image, index) => (
                    <Image 
                        key={index}
                        source={{uri: image}}
                        style={{width:400, height:400, resizeMode: 'contain', marginVertical: -20}} />
                ))
            }
        </View>

        <View style={{marginTop: 10}}>
            <Text 
            style={{fontFamily: 'JosefinSans-Medium', fontSize: 16, lineHeight: 25, textAlign: 'center'}}>Copyright ©2021 All rights reserved | This template is made with ♡ by 
            <Text style={{color: '#20c997'}}> Colorlib</Text>
            </Text>
        </View>
        </ScrollView>
    </View>
  );
}

const styles = ScaledSheet.create({
    homeContainer:{
        flex: 1,
        // padding: 15
    },
    natureHeader:{
        flex:0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gallery: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    }
   

})