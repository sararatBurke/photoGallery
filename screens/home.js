import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    Text,
    View,
    SafeAreaView,
    Modal, 
    Pressable,
    Dimensions,
    ScrollView
  } from "react-native";
  import { ScaledSheet } from "react-native-size-matters";
  import { WebView } from "react-native-webview";
  import Icon from "react-native-vector-icons/Ionicons";
  
export default function App() {
    const window = Dimensions.get("window");
    const screen = Dimensions.get("screen");

    const [dimensions, setDimensions] = useState({ window, screen });
    const [mode, setMode] = useState("portrait");
    const [modalVisible, setModalVisible] = useState(false);
    const [playing, setPlaying] = useState(false);

    const image = { uri: 'https://images.unsplash.com/photo-1540206395-68808572332f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',};
    const image2 = { uri: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',};

    const modeMaker = () => {
        if (dimensions.screen.width > dimensions.screen.height) {
            setMode("landscape") 
        } 
        else {
            setMode("portrait") 
            
        }
        console.log(mode, playing)
        setPlaying(false)
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
  
return (
    
    <SafeAreaView style={styles.container}>
    <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        supportedOrientations={['landscape']} 

        onRequestClose={() => { 
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
        }}
    >
        <View style={styles.videoView}>
            <View style={styles.video}>
            <WebView source={{html: '<iframe width="100%" height="100%" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}/>
            </View>

            <Pressable 
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.buttonText}>CLOSE</Text>
            </Pressable>

        </View>
    </Modal>
    {mode === "portrait" ? 
        <View style={mode=== 'portrait'? styles.imagecontainer : styles.imagecontainer2}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
            <ImageBackground source={image} style={mode=== 'portrait'? styles.leftImage : styles.leftImage2}>
                <Text style={styles.imageText}>Nature</Text>
                <Icon name="ios-play-circle-outline" color="white" size={50} onPress={() => setModalVisible(true)} />
            </ImageBackground>
            <ImageBackground source={image2} style={mode=== 'portrait'? styles.rightImage : styles.rightImage2}>
                <Text style={styles.imageText}>Portrait</Text>
                <Icon name="ios-play-circle-outline" color="white" size={50} onPress={() => setModalVisible(true)} />
            </ImageBackground>
        </ScrollView>
    
        </View> : null}
    {/* --------------------- Footer --------------------*/}
        <View style={{marginTop: 50}}>
            <Text 
            style={{fontFamily: 'JosefinSans-Medium', fontSize: 16, lineHeight: 25}}>Copyright ©2021 All rights reserved | This template is made with ♡ by 
            <Text style={{color: '#20c997'}}> Colorlib</Text>
            </Text>
        </View>
    </SafeAreaView>
   );
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },

  imagecontainer: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 10,
  },

  leftImage: {
    marginRight: 25,
    flex: 1,
    paddingHorizontal:145,
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center",
  },
  rightImage:{
    flex: 1,
    paddingHorizontal:145,
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center",
  },

  imageText:{
    fontFamily: 'JosefinSans-Bold',
    fontSize: 32,
    color:'#fff',
    justifyContent: "center",
  },
  buttonClose: {
    position: 'relative',
    elevation: 2,
    margin:0,
    
  },
  buttonText:{
    color: '#fff',
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 10,
  },
  videoView: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
    marginTop: -10,
    alignItems: "center",
    height: "200%",
  },
  video: {
    flex:1,
    width: "105%",
    backgroundColor: '#000',
  },

/////// Landscape view
  imagecontainer2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.9,
    marginTop: 10,
  },
  image2: {
    flex: 1,
    width: '165@s',
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center",
              
  },
  leftImage2: {
    marginRight: 25,
    flex: 1,
    width: '165@s',
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center",
  },
  rightImage2:{
    flex: 1,
    width: '165@s',
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center",
  }

});
// export default App;