import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const LoginScreen = () => {
    return (
        // <View style={styles.con}>
            <ImageBackground source={require('../assets/images/login-bg-2.png')} style={styles.con}>
            <View style={styles.inputs_con}>
                <Text style={styles.HeaddingText}>Login</Text>
                <Text style={styles.LablelText}>Mobile/Email</Text>
                <TextInput placeholder="Enter Mobile/Email" style={styles.InputStyle} placeholderTextColor="rgba(255,255,255,0.3)"/>
                <Text style={styles.LablelText}>Password</Text>
                <TextInput placeholder="Enter Your Password" style={styles.InputStyle}placeholderTextColor="rgba(255,255,255,0.3)" />
                <TouchableOpacity style={styles.SubmitBtn}>
                    <Text style={styles.SubmitBtnText}>Login</Text>
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
        backgroundColor:'#ddd',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:'5%'
    },
    inputs_con: {
        // backgroundColor:'#333',
        width: '85%',
    },
    HeaddingText: {
        fontSize:30,
        fontWeight:'bold',
        marginBottom:25,
        color: 'white'
    },
    LablelText: {
        fontSize:15,
        marginBottom:0,
        color: '#f3f3f3',
        marginTop:25
    },
    InputStyle: {
        fontSize:15,
        marginBottom:10,
        color: '#f3f3f3',
        borderBottomColor:'white',
        borderBottomWidth:0.5
    },
    SubmitBtn: {
        paddingVertical:15,
        backgroundColor:'white',
        marginBottom:20,
        marginTop:35,
        alignItems:'center'
    },
    SubmitBtnText: {
        fontSize:15,
        color: '#333'
    },
    ForgotBtn: {
        alignItems:'flex-end'
    },
    ForgotBtnText: {
        fontSize:15,
        color: '#fff',
        textDecorationLine:'underline',
    },
})
