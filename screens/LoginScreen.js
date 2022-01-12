import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Platform, Modal } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const LoginScreen = ({ navigation }) => {
    const [LoginWith, setLoginWith] = useState('')
    const [Password, setPassword] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [errorText, seterrorText] = useState("Username or Password is not Correct");
    const OnSubmit = async () => {
        const apiURL = `https://spaceup.co.in/api/v1/auth/login?username=${LoginWith}&password=${Password}&login_type=user`;
        fetch(apiURL).then((res) => res.json())
            .then(async (resJson) => {
                if (resJson.access_token) {
                    try {
                        await AsyncStorage.setItem('userId', String(resJson.user.id))
                        await AsyncStorage.setItem('username', resJson.user.username)
                        await AsyncStorage.setItem('phone', resJson.user.phone)
                        await AsyncStorage.setItem('password', resJson.user.view_password)
                        await AsyncStorage.setItem('accessToken', resJson.access_token)
                    }
                    catch (e) {
                        console.log('error async', e);
                    }
                    navigation.navigate('Home')
                }
                else {
                    const errorText = "Username or Password is not Correct";
                    if (resJson.error) {
                        seterrorText(resJson.error);
                        // errorText = resJson.error;
                    }
                    else if (resJson.errors.username) {
                        seterrorText(resJson.errors.username);
                        // errorText = resJson.errors.username;
                    }
                    else {
                        seterrorText("Username or Password is not Correct");
                        // errorText = "Username or Password is not Correct";
                    }
                    setModalVisible(true)
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
                <TextInput placeholder="Enter Mobile/Email" style={styles.InputStyle} placeholderTextColor="rgba(255,255,255,0.3)"
                    onChangeText={(val) => setLoginWith(val)}
                    defaultValue={LoginWith}
                />
                <Text style={styles.LablelText}>Password</Text>
                <TextInput placeholder="Enter Your Password" style={styles.InputStyle} placeholderTextColor="rgba(255,255,255,0.3)"
                    onChangeText={(val) => setPassword(val)}
                    defaultValue={Password}
                />
                <TouchableOpacity style={styles.SubmitBtn} onPress={OnSubmit}>
                    <Text style={styles.SubmitBtnText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ForgotBtn} onPress={()=>navigation.navigate('ForgotPassword')}>
                    <Text style={styles.ForgotBtnText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalHedding}>Login Failed!</Text>
                        <Text style={styles.modalText}>{errorText}</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Okay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    // modal style starts here======
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalView: {
        // margin: 20,
        width: '80%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 25,
        elevation: 2,
        marginTop: 25
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalHedding: {
        marginBottom: 15,
        textAlign: "center",
        color: 'red',
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})
