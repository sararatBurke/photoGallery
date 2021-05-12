import * as React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/Zocial";

export default function App() {
  return (
    <View style={styles.homeContainer}>
    <ScrollView>
        <View style={{width:  400,}}>
        <View style={styles.pageHeader}>
            <Text style={{fontFamily: 'JosefinSans-Medium', fontSize: 40,}}>About Us</Text>
            <Text style={{width:100, borderTopWidth: 2, borderTopColor: '#000', marginBottom: 10}}></Text>
        </View>
    {/* -------------------Body main contest --------------------*/}
        <View>
            <Avatar
                size={400}
                title="SB"
                source={{uri:'https://avatarfiles.alphacoders.com/979/thumb-97920.png'}}/>
            <Text style={styles.aboutSubTitle}>Our Mission</Text>
            <Text style={styles.pageDiscription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui voluptatem. Quis soluta maiores eum. Iste modi voluptatum in repudiandae fugiat suscipit dolorum harum, porro voluptate quis? Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.</Text>
        </View>
    
    {/* -------------------Body member profiles --------------------*/}
        <View style={{alignItems: 'center', marginVertical: 50}}>
            <Avatar
                rounded
                size={200}
                title="SB"
                source={{uri:'https://avatars.githubusercontent.com/u/15222827?v=4'}}/>
            <Text style={styles.memberTitle}>Sararat Burke</Text>
            <Text style={styles.memberDiscription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?</Text>
            <View style={{flexDirection: 'row', width: 160, justifyContent: 'space-around'}}>
            <Ionicons name="logo-twitter" size={20} color="#20c997" />
            <Ionicons name="logo-instagram" size={20} color="#20c997" />
            <Icon name="facebook" size={20} color="#20c997" />
            </View>
        </View>


        <View style={{alignItems: 'center', marginVertical: 50}}>
            <Avatar
                rounded
                size={200}
                title="SB"
                source={{uri:'https://atlas.illinois.edu/sites/default/files/styles/directory_profile_card/public/profile-default.png.jpg?itok=izyvgYNL'}}/>
            <Text style={styles.memberTitle}>Fname Lname</Text>
            <Text style={styles.memberDiscription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?</Text>
            <View style={{flexDirection: 'row', width: 160, justifyContent: 'space-around'}}>
            <Ionicons name="logo-twitter" size={20} color="#20c997" />
            <Ionicons name="logo-instagram" size={20} color="#20c997" />
            <Icon name="facebook" size={20} color="#20c997" />
            </View>
        </View>


        <View style={{alignItems: 'center', marginVertical: 50}}>
            <Avatar
                rounded
                size={200}
                title="SB"
                source={{uri:'https://atlas.illinois.edu/sites/default/files/styles/directory_profile_card/public/profile-default.png.jpg?itok=izyvgYNL'}}
            />
            <Text style={styles.memberTitle}>Fname Lname</Text>
            <Text style={styles.memberDiscription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?</Text>
            <View style={{flexDirection: 'row', width: 160, justifyContent: 'space-around'}}>
            <Ionicons name="logo-twitter" size={20} color="#20c997" />
            <Ionicons name="logo-instagram" size={20} color="#20c997" />
            <Icon name="facebook" size={20} color="#20c997" />
            </View>
        </View>
    {/* --------------------- Footer --------------------*/}
        <View style={{marginTop: 10}}>
            <Text 
            style={{fontFamily: 'JosefinSans-Medium', fontSize: 16, lineHeight: 25, textAlign: 'center'}}>Copyright ©2021 All rights reserved | This template is made with ♡ by 
            <Text style={{color: '#20c997'}}> Colorlib</Text>
            </Text>
        </View>
        </View>
    </ScrollView>
    </View>
  );
}

const styles = ScaledSheet.create({
    homeContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageHeader:{
        flex:0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutSubTitle:{
        fontFamily: 'JosefinSans-Medium',
        fontSize: '25@ms',  
        color: '#4d4d4d',
        marginVertical: 15

    },
    pageDiscription:{
        fontFamily: 'JosefinSans-Medium',
        color: '#4d4d4d',
        fontSize: '15@ms', 
        lineHeight: '25@ms',
        marginVertical: 10

    },
    memberTitle:{
        fontFamily: 'JosefinSans-Medium',
        fontSize: '25@ms',  
        marginVertical: 15
    },
    memberDiscription:{
        fontFamily: 'JosefinSans-Medium',
        color: '#4d4d4d',
        fontSize: '13@ms',
        lineHeight: '20@ms', 
        textAlign: 'center', 
        marginVertical: 10
    }

})