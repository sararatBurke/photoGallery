import * as React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text,  SafeAreaView, TextInput, ScrollView } from 'react-native';

export default function App() {
        const [fname, onChangeFname] = React.useState(null);
        const [lname, onChangeLname] = React.useState(null);
        const [email, onChangeEmail] = React.useState(null);
        const [subject, onChangeSubject] = React.useState(null);
        const [message, onChangeMessage] = React.useState(null);
       
  return (
    <View style={styles.homeContainer}>
    <ScrollView>
        <View style={styles.natureHeader}>
            <Text style={{fontFamily: 'JosefinSans-Medium', fontSize: 40,}}>Contact Us</Text>
            <Text style={{width:100, borderTopWidth: 2, borderTopColor: '#000', marginBottom: 10}}></Text>
        </View>
  
    {/* ---------------------Input section----------------- */}
        <SafeAreaView>
        <Text style={styles.inputTitle}>First Name</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeFname}
            value={fname}
            placeholder="First Name"
        />
        <Text style={styles.inputTitle}>Last Name</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeLname}
            value={lname}
            placeholder="Last Name"
        />
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Subject"
        />
        <Text style={styles.inputTitle}>Subject</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeSubject}
            value={subject}
            placeholder="Subject"
        />
        <Text style={styles.inputTitle}>Message</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeMessage}
            value={message}
            placeholder="Subject"
        />
        <Text style={styles.submit}>Send Message</Text>
        </SafeAreaView>

    {/* ---------------------Contact information----------------- */}
        <View style={{marginVertical: 30}}>
            <Text style={styles.contactTitle}>Address</Text>
            <Text style={{fontFamily: 'JosefinSans-SemiBold', fontSize: 18, color: '#212529', marginVertical: 10}}>111 Clark St #9, Boston, Massachusetts, USA</Text>
            <Text style={styles.contactTitle}>Phone</Text>
            <Text style={{fontFamily: 'JosefinSans-SemiBold', fontSize: 18, color: '#45C997', marginVertical: 10}}>+1 999 999 9999</Text>
            <Text style={styles.contactTitle}>Email Address</Text>
            <Text style={{fontFamily: 'JosefinSans-SemiBold', fontSize: 18, color: '#45C997', marginVertical: 10}}>youremail@domain.com</Text>
        </View>
 
        <View style={{marginVertical: 20}}>
            <Text 
            style={{fontFamily: 'JosefinSans-Medium', fontSize: 16, lineHeight: 25, textAlign: 'center'}}>Copyright ©2021 All rights reserved | This template is made with ♡ by 
            <Text style={{color: '#45C997'}}> Colorlib</Text>
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
///////Input section style
    inputTitle: {
        fontFamily: 'JosefinSans-SemiBold',
        fontSize: 18,  
        marginTop: 10
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#999999',
        marginVertical: 10
    },
    submit: {
        fontFamily: 'JosefinSans-Bold',
        fontSize: 17,
        color: '#fff',
        textAlign: 'center',
        padding: 15,
        backgroundColor: '#45C997',
        width: 170,
        marginVertical: 10
    },
///////Contact section style
    contactTitle:{
        fontFamily: 'JosefinSans-Bold',
        fontSize: 18,
        color: '#212529',
        marginTop: 20
    }
   

})