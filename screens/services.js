import * as React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text,  Image, ScrollView } from 'react-native';

export default function App() {

  return (
    <View style={styles.homeContainer}>
        <ScrollView>
        <View style={styles.natureHeader}>
            <Text style={{fontFamily: 'JosefinSans-Medium', fontSize: 40}}>Our Services</Text>
            <Text style={{width:100, borderTopWidth: 2, borderTopColor: '#000', marginBottom: 10}}></Text>
        </View>

        <View style={styles.serviceType}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/camera.png')}/>
            <Text style={styles.contentTitle}>Camera</Text>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={styles.contentPrice}>$29</Text>
        </View>
        <View style={styles.serviceType}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/wedding.png')}/>
            <Text style={styles.contentTitle}>Wedding Photography</Text>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={styles.contentPrice}>$46</Text>
        </View>
        <View style={styles.serviceType}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/animal.png')}/>
            <Text style={styles.contentTitle}>Animal</Text>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={styles.contentPrice}>$24</Text>
        </View>

        <View style={styles.serviceType}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/portrait.png')}/>
            <Text style={styles.contentTitle}>Portrait</Text>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={styles.contentPrice}>$40</Text>
        </View>
        <View style={styles.serviceType}>
            <Image
                style={{width:40, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/travel.png')}/>
            <Text style={styles.contentTitle}>Travel</Text>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={styles.contentPrice}>$35</Text>
        </View>
        <View style={styles.serviceType}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/video.png')}/>
            <Text style={styles.contentTitle}>Video Editing</Text>
            <Text style={styles.contentText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={styles.contentPrice}>$15</Text>
        </View>

        <View style={{marginTop: 50}}>
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
    },
    natureHeader:{
        flex:0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceType: {
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgb(245,245,250)',
        padding: 10,
        marginVertical: 15
    },
    contentTitle:{
        fontFamily: 'JosefinSans-Bold', 
        fontSize: 26,
        marginVertical: 6
    },
    contentText:{
        fontFamily: 'JosefinSans-Medium', 
        fontSize: 15, 
        lineHeight: 30,
        marginVertical: 10
    },
    contentPrice:{
        fontFamily: 'JosefinSans-Bold', 
        fontSize: 20, 
        color: '#20c997',
        marginVertical: 20
    },

   

})