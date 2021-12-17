<<<<<<< HEAD
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const LoginScreen = ({navigation}) => {
    const [LoginWith, setLoginWith] = useState('sam123')
    const [Password, setPassword] = useState('123456')
    const OnSubmit = async () => {
        const apiURL = `https://spaceup.co.in/api/v1/auth/login?username=${LoginWith}&password=${Password}&login_type=user`;
        fetch(apiURL).then((res) => res.json())
            .then(async (resJson) => {
                console.log(resJson);
                if (resJson.access_token !== '') {
                    try {
                        await AsyncStorage.setItem('userToken', String(resJson.user.id))
                    }
                    catch (e) {
                        console.log('error async', e);
                    }
                    navigation.navigate('TemNav')
=======
import React,{useState} from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const LoginScreen = () => {
    const [LoginWith, setLoginWith] = useState('')
    const [Password, setPassword] = useState('')
    const OnSubmit = ()=> {
        const apiURL = `https://sleakdeals.in/spaceup/api/v1/auth/login?username=${LoginWith}&password=${Password}&login_type=user`;
        fetch(apiURL).then((res) => res.json())
            .then((resJson) => {
                console.log(resJson)
                if (resJson.access_token !== '') {
                 alert(resJson.user.username)
>>>>>>> 883ba6e87c44dfc26ccd41926412afbc8971c978
                }
            })
            .catch(function (error) {
                // CheckTheNetwork()
            });
    }
    return (
        // <View style={styles.con}>
        <ImageBackground source={require('../assets/images/login-bg-2.png')} style={styles.con}>
            <View style={styles.inputs_con}>
                <Text style={styles.HeaddingText}>Login</Text>
                <Text style={styles.LablelText}>Mobile/Email</Text>
<<<<<<< HEAD
                <TextInput placeholder="Enter Mobile/Email" style={styles.InputStyle} placeholderTextColor="rgba(255,255,255,0.3)"
                    onChangeText={(val) => setLoginWith(val)}
                    defaultValue={LoginWith}
                />
                <Text style={styles.LablelText}>Password</Text>
                <TextInput placeholder="Enter Your Password" style={styles.InputStyle} placeholderTextColor="rgba(255,255,255,0.3)"
                    onChangeText={(val) => setPassword(val)}
                    defaultValue={Password}
=======
                <TextInput 
                placeholder="Enter Mobile/Email" 
                style={styles.InputStyle} 
                placeholderTextColor="rgba(255,255,255,0.3)"
                onChangeText={(val)=>setLoginWith(val)}
                defaultValue={LoginWith}
                />
                <Text style={styles.LablelText}>Password</Text>
                <TextInput 
                placeholder="Enter Your Password" 
                style={styles.InputStyle}
                placeholderTextColor="rgba(255,255,255,0.3)"
                onChangeText={(val)=>setPassword(val)} 
                defaultValue={Password}
>>>>>>> 883ba6e87c44dfc26ccd41926412afbc8971c978
                />
                <TouchableOpacity style={styles.SubmitBtn} onPress={OnSubmit}>
                    <Text style={styles.SubmitBtnText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ForgotBtn}>
                    <Text style={styles.ForgotBtnText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        // {/* </View> */}
    )
}

export default LoginScreen;
const styles = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: '#ddd',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: '5%'
    },
    inputs_con: {
        //backgroundColor:'#333',
        width: '85%',
    },
    HeaddingText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 25,
        color: 'white'
    },
    LablelText: {
        fontSize: 15,
        marginBottom: 0,
        color: '#f3f3f3',
        marginTop: 25,
        marginBottom: Platform.OS === 'ios' ? 10 : 10,
    },
    InputStyle: {
        fontSize: 15,
        marginBottom: 10,
        color: '#f3f3f3',
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        paddingVertical: Platform.OS === 'ios' ? 10 : 10
    },
    SubmitBtn: {
        paddingVertical: 15,
        backgroundColor: 'white',
        marginBottom: 20,
        marginTop: 35,
        alignItems: 'center'
    },
    SubmitBtnText: {
        fontSize: 15,
        color: '#333'
    },
    ForgotBtn: {
        alignItems: 'flex-end',
        marginBottom: 10
    },
    ForgotBtnText: {
        fontSize: 15,
        color: '#fff',
        textDecorationLine: 'underline',
    },
})
