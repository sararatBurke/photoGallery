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
        <View style={styles.pageHeader}>
            <Text style={{fontFamily: 'JosefinSans-Medium', fontSize: 40,}}>Contact Us</Text>
            <Text style={{width:100, borderTopWidth: 2, borderTopColor: '#000', marginBottom: 10}}></Text>
        </View>
  
    {/* ---------------------Input section----------------- */}
    <View style={styles.inputContain}>
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
            placeholder="Email"
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
            style={styles.inputMessage}
            multiline={true}
            numberOfLines={4}
            onChangeText={onChangeMessage}
            value={message}
            placeholder="Message"
        />
        <Text style={styles.submit}>Send Message</Text>
   
        

    {/* ---------------------Contact information----------------- */}
      
        <View style={{marginVertical: 30}}>
            <Text style={styles.contactTitle}>Address</Text>
            <Text style={styles.contactSubText}>111 Clark St #9, Boston, Massachusetts, USA</Text>
            <Text style={styles.contactTitle}>Phone</Text>
            <Text style={styles.contactSubTextBLUE}>+1 999 999 9999</Text>
            <Text style={styles.contactTitle}>Email Address</Text>
            <Text style={styles.contactSubTextBLUE}>youremail@domain.com</Text>
        </View>
    {/* --------------------- Footer --------------------*/}
        <View style={{marginVertical: 20}}>
            <Text 
            style={{fontFamily: 'JosefinSans-Medium', fontSize: 16, lineHeight: 25, textAlign: 'center'}}>Copyright ??2021 All rights reserved | This template is made with ??? by 
            <Text style={{color: '#45C997'}}> Colorlib</Text>
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
///////Input section style
    inputContain:{
        width: '380@mvs0.1'
    },
    inputTitle: {
        fontFamily: 'JosefinSans-SemiBold',
        fontSize: '16@mvs',  
        marginTop: 10
    },
    input: {
        fontSize: '12@mvs',  
        padding: 10,
        borderWidth: 1,
        borderColor: '#999999',
        marginVertical: 10
    },
    inputMessage:{
        height: 150,
        justifyContent: "flex-start",
        padding: 10,
        borderWidth: 1,
        borderColor: '#999999',
        marginVertical: 10
    },
    submit: {
        fontFamily: 'JosefinSans-Bold',
        fontSize: '16@mvs0.1',
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
        fontSize: '18@mvs',
        color: '#212529',
        marginTop: 20
    },
    contactSubText:{
        fontFamily: 'JosefinSans-SemiBold', 
        fontSize: '15@mvs', 
        lineHeight: '20@ms',
        color: '#212529', 
        marginVertical: 10
    },
    contactSubTextBLUE:{
        fontFamily: 'JosefinSans-SemiBold', 
        fontSize: '15@mvs', 
        lineHeight: '20@ms',
        color: '#45C997', 
        marginVertical: 10
    },
    
   

})