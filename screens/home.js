import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    Text,
    View,
    SafeAreaView,
    Modal, 
    Pressable,
    Dimensions
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

    const image = { 
        uri: 'https://images.unsplash.com/photo-1540206395-68808572332f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    };

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

            <Pressable style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>

        </View>
    </Modal>
    {mode === "portrait" ? 
        <View style={styles.imagecontainer}>
        <ImageBackground source={image} style={styles.image}>
            {/* <View style={styles.content}> */}
                <Text style={styles.imageText}>Nature</Text>
                <Icon name="ios-play-circle-outline" color="white" size={50} onPress={() => setModalVisible(true)} />
            {/* </View> */}
        </ImageBackground>
    
        </View> : null
    }
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
    justifyContent: "center",
    width: "100%",
    flex: 0.9,
    marginTop: 10,
  },

  image: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: "center",
    alignItems: "center",
              
  },
  imageText:{
    fontFamily: 'JosefinSans-Bold',
    fontSize: 32,
    color:'#fff'
  },
  buttonClose: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    margin:0,
    alignItems: 'center',
    backgroundColor: "#fff",
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

});
// export default App;