import * as React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text,  ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.homeContainer}>
        <View style={{justifyContent:'center', flex: 0.9, marginVertical: 20}}>
            <ImageBackground
            style={styles.image}
            source={{
            uri: 'https://images.unsplash.com/photo-1540206395-68808572332f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            }}>
                <View style={styles.content}>
                    <Text style={styles.imageText}>Nature</Text>
                    <Text style={styles.imageButton}>MORE PHOTOS</Text>
                </View>
            </ImageBackground>
        </View>
        <View style={{marginTop: 10}}>
            <Text 
            style={{fontFamily: 'JosefinSans-Medium', fontSize: 16, lineHeight: 25}}>Copyright ©2021 All rights reserved | This template is made with ♡ by 
            <Text style={{color: '#20c997'}}> Colorlib</Text>
            </Text>
        </View>
    </View>
  );
}

const styles = ScaledSheet.create({
    homeContainer:{
        flex: 1,
        padding: 15
    },
    image:{
        flex:1,
        resizeMode: 'stretch',
    },
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText:{
        fontFamily: 'JosefinSans-Bold',
        fontSize: 32,
        color:'#fff'
    }, 
    imageButton: {
        fontSize: 13,
        fontFamily: 'JosefinSans-Bold',
        color: '#fff',
        borderWidth: 2, 
        borderColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 15
        
    }

})