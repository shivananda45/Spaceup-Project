import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Platform } from 'react-native'

const ForgotPassword = () => {
    return (
        <View style={styles.con}>
           <View style={styles.inputs_con}>
           <Text style={styles.HeaddingText}>Forgot Password</Text>
            <Text style={styles.LablelText}>Mobile</Text>
            <TextInput placeholder="Enter Mobile" style={styles.InputStyle} placeholderTextColor="rgba(0,0,0,0.3)" />
            <TouchableOpacity style={styles.SubmitBtn}>
                <Text style={styles.SubmitBtnText}>OK</Text>
            </TouchableOpacity>
           </View>
           <View style={styles.ImageCon}>
            <Image source={require('../assets/images/color-arrow-up.png')} style={styles.imageStyle} resizeMode="stretch" />
           </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    con:{
        flex:1,
        alignItems: 'center',
        // paddingTop: '20%',

    },
    inputs_con: {
        // backgroundColor:'#333',
        width: '85%',
        height: '50%',
        alignItems: 'center',
        // paddingHorizontal: '5%',
        justifyContent:'flex-end',
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
        alignSelf: 'flex-start',
        marginBottom: Platform.OS === 'ios' ? 10 : 10,
    },
    InputStyle: {
        fontSize: 15,
        marginBottom: 10,
        color: '#333',
        borderBottomColor: '#333',
        borderBottomWidth: 0.5,
        width: '100%',
        alignSelf: 'flex-start',
        paddingVertical : Platform.OS === 'ios' ? 10 : 10,
    },
    SubmitBtn: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: '#333',
        // marginBottom: 20,
        marginTop: 35,
        alignItems: 'center'
    },
    SubmitBtnText: {
        fontSize: 15,
        color: '#fff'
    },
    ImageCon:{
        width: '100%',
        height: '50%',
        // backgroundColor:'red',
        // alignItems:'flex-end'
    },
    imageStyle:{
        width: '100%',
        height: '100%',
        // backgroundColor:'red',

        // position: 'absolute',
        // bottom: 0,
        // right: 0,
        opacity: 0.15,
        zIndex:-1
    }
})
