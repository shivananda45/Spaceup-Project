import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

const ForgotPassword = () => {
    return (
        <View style={styles.con}>
           <View style={styles.inputs_con}>
           <Text style={styles.HeaddingText}>Forgot Password</Text>
            <Text style={styles.LablelText}>Mobile</Text>
            <TextInput placeholder="Enter Mobile" style={styles.InputStyle} placeholderTextColor="rgba(255,255,255,0.3)" />
            <TouchableOpacity style={styles.SubmitBtn}>
                <Text style={styles.SubmitBtnText}>Login</Text>
            </TouchableOpacity>
           </View>
            <Image source={require('../assets/images/color-arrow-up.png')} style={styles.imageStyle} resizeMode="contain"/>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    con:{
        flex:1,
        alignItems: 'center',
        paddingTop: '20%',

    },
    inputs_con: {
        // backgroundColor:'#333',
        width: '85%',
        alignItems: 'center',
        // paddingHorizontal: '5%',
        // justifyContent:'center',
        // paddingTop: '20%',
    },
    HeaddingText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#333'
    },
    LablelText: {
        fontSize: 15,
        marginBottom: 0,
        color: '#333',
        marginTop: 25,
        alignSelf: 'flex-start'
    },
    InputStyle: {
        fontSize: 15,
        marginBottom: 10,
        color: '#333',
        borderBottomColor: '#333',
        borderBottomWidth: 0.5,
        width: '100%',
        alignSelf: 'flex-start'
    },
    SubmitBtn: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#333',
        marginBottom: 20,
        marginTop: 35,
        alignItems: 'center'
    },
    SubmitBtnText: {
        fontSize: 15,
        color: '#fff'
    },
    imageStyle:{
        width: '65%',
        height: '53%',
        position: 'absolute',
        bottom: 0,
        right: 0,
        opacity: 0.15,
        zIndex:-1
    }
})
