import React, { useState, useEffect } from "react";
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text,  Image, ScrollView, FlatList,
    Dimensions,
    SafeAreaView, } from 'react-native';

export default function App() {
    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");

    const [dimensions, setDimensions] = useState({ window, screen });
    const [mode, setMode] = useState("portrait");
    const modeMaker = () => {
        if (dimensions.screen.width > dimensions.screen.height) {
            setMode("landscape") 
        } 
        else {
            setMode("portrait") 
            
        }
        console.log(mode)
        setMode(false)
    };

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    };

    useEffect(() => {
        Dimensions.addEventListener("change", onChange);
        return () => {
            Dimensions.removeEventListener("change", onChange),
            modeMaker();
        };
    });
    
    // const service = [
    //     {id: '1', name: 'Camera', price: '$29', image:'"../assets/images/camera.png"', descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.'},
    //     {id: '2', name: 'Wedding Photography', price: '$46', image:'"../assets/images/camera.png"', descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.'},
    //     {id: '3', name: 'Animal', price: '$24', image:'"../assets/images/camera.png"', descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.'},
    //     {id: '4', name: 'Portrait', price: '$40', image:'"../assets/images/camera.png"', descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.'},
    //     {id: '5', name: 'Travel', price: '$35', image:'"../assets/images/camera.png"', descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.'},
    //     {id: '6', name: 'Video Editing', price: '$15', image:'"../assets/images/camera.png"', descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.'}
    // ];
   
  return (
    <View style={styles.homeContainer}>
        <ScrollView>
        <View style={styles.pageHeader}>
            <Text style={styles.pageHeadTitle}>Our Services</Text>
            <Text style={{width:100, borderTopWidth: 2, borderTopColor: '#000', marginBottom: 10}}></Text>
        </View>
{/*      
       <SafeAreaView style={styles.serviceContainner}>
        <FlatList 
            numColumns={mode === 'portrait'? 1 : 2}
            data={service}
            style={styles.itemList}
            keyExtractor={(item) => item.id} 
            renderItem={( {item} ) => (
                <View style={mode === 'portrait'? styles.servicePhoneContainer : styles.serviceTabletContainner}>
                    <Image 
                    style={styles.icon}
                    source={require("../assets/images/camera.png") }/>
                    <Text style={styles.ser}>{item.name}</Text>
                    <Text style={styles.descript}>{item.descript}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            )}/>
        </SafeAreaView> */}

    
    <SafeAreaView>
    <View style={mode === 'portrait'? styles.servicePhoneContainer : styles.serviceTabletContainer}>
        <View style={styles.servicePhoneBg}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/camera.png')}/>
            <Text style={mode === 'portrait'? styles.serviceTitle : serviceTitleTablet}>Camera</Text>
            <Text style={mode === 'portrait'? styles.descriptPhone : descriptTablet}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={mode === 'portrait'? styles.pricePhone : priceTablet}>$29</Text>
        </View>
        <View style={styles.servicePhoneBg}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/wedding.png')}/>
            <Text style={mode === 'portrait'? styles.serviceTitle : serviceTitleTablet}>Wedding Photography</Text>
            <Text style={mode === 'portrait'? styles.descriptPhone : descriptTablet}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={mode === 'portrait'? styles.pricePhone : priceTablet}>$46</Text>
        </View>
        <View style={styles.servicePhoneBg}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/animal.png')}/>
            <Text style={mode === 'portrait'? styles.serviceTitle : serviceTitleTablet}>Animal</Text>
            <Text style={mode === 'portrait'? styles.descriptPhone : descriptTablet}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={mode === 'portrait'? styles.pricePhone : priceTablet}>$24</Text>
        </View>

        <View style={styles.servicePhoneBg}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/portrait.png')}/>
            <Text style={mode === 'portrait'? styles.serviceTitle: serviceTitleTablet}>Portrait</Text>
            <Text style={mode === 'portrait'? styles.descriptPhone : descriptTablet}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={mode === 'portrait'? styles.pricePhone : priceTablet}>$40</Text>
        </View>
        <View style={styles.servicePhoneBg}>
            <Image
                style={{width:40, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/travel.png')}/>
            <Text style={mode === 'portrait'? styles.serviceTitle : serviceTitleTablet}>Travel</Text>
            <Text style={mode === 'portrait'? styles.descriptPhone : descriptTablet}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={mode === 'portrait'? styles.pricePhone : priceTablet}>$35</Text>
        </View>
        <View style={styles.servicePhoneBg}>
            <Image
                style={{width:54, resizeMode: 'contain', marginVertical: 20}}
                source={require('../assets/images/video.png')}/>
            <Text style={mode === 'portrait'? styles.serviceTitle : serviceTitleTablet}>Video Editing</Text>
            <Text style={mode === 'portrait'? styles.descriptPhone : descriptTablet}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum exercitationem quae id dolorum debitis.</Text>
            <Text style={mode === 'portrait'? styles.pricePhone : priceTablet}>$15</Text>
        </View>
        
        </View>
    </SafeAreaView>
        <View style={mode === 'portrait'? styles.footer: styles.footer2}>
            <Text style={mode === 'portrait' ? styles.footerText : styles.footerText2}>Copyright ©2021 All rights reserved | This template is made with ♡ by 
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageHeader:{
        flex:0.1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageHeadTitle: {
        fontFamily: 'JosefinSans-Medium', 
        fontSize: '30@s'
    },
    servicePhoneContainer:{
        width: '100%',
        margin: 0
    },

    servicePhoneBg: {
        width: '100%',        
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgb(245,245,250)',
        padding:20,
        marginVertical: 15,  
    },
    serviceTitle:{
        fontFamily: 'JosefinSans-Medium', 
        fontSize: '20@ms',
        marginVertical: 6
    },
    descriptPhone:{
        fontFamily: 'JosefinSans', 
        color: '#2e2e2e',
        fontSize: '14@ms', 
        lineHeight: '18@s',
        marginVertical: 10
    },
    pricePhone:{
        fontFamily: 'JosefinSans-Bold', 
        fontSize: '15@ms', 
        color: '#20c997',
        marginVertical: 20
    },
    footer:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    footerText:{
        fontFamily: 'JosefinSans-Medium', 
        fontSize: '10@vs', 
        lineHeight: 25, 
        
    },
///// Tablet /////
    serviceTabletContainer:{
        width: '220@s',
        marginLeft: '35@s'
    },
    serviceTitleTablet:{
        fontFamily: 'JosefinSans-Medium', 
        fontSize: '18@s',
        marginVertical: 6
    },
    descriptTablet:{
        fontFamily: 'JosefinSans', 
        color: '#2e2e2e',
        fontSize: '8@s', 
        lineHeight: '15@s',
        marginVertical: 10
    },
    priceTablet:{
        fontFamily: 'JosefinSans-Bold', 
        fontSize: '12@s', 
        color: '#20c997',
        marginVertical: 20
    },
    footer2:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    footerText2:{
        fontFamily: 'JosefinSans-Medium', 
        fontSize: '8@s', 
        lineHeight: 25, 
        
    },

    //////// flatlist///////
    // serviceTabletContainner:{
    //     flex:0.8,
    //     justifyContent: 'center',
    //     alignItems: 'center',

    // },
    // itemList:{
    //     width: '260@s',
    // },
    // serviceList:{
    //     width: '45%',
    //     backgroundColor: 'rgb(245,245,250)',
    //     padding: 15,
    //     marginHorizontal: 10,
    //     marginVertical: 10,
    //     padding: '20@s',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // icon: {
    //     height:54, resizeMode: 'contain', marginVertical: 20
    // },
    // serviceTitle:{
    //     flex: 1,
    //     fontFamily: 'JosefinSans-Bold', 
    //     fontSize: 26,
    //     marginVertical: 6,
    //     textAlign: 'center'
    // },
    // descript: {
    //     fontFamily: 'JosefinSans', 
    //     fontSize: '10@s', 
    //     color: '#2e2e2e',
    //     lineHeight: 30,
    //     marginVertical: 10,
    //     textAlign: 'center'

    // },
    // price:{
    //     fontFamily: 'JosefinSans-Bold', 
    //     fontSize: 20, 
    //     color: '#20c997',
    //     marginVertical: 20
    // } 

})