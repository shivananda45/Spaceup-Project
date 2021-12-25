import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Platform, Modal, Pressable } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
const NewRequest = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [MsgText, setMsgText] = useState('');
    const [Data, setData] = useState([])
    const [DataFound, setDataFound] = useState(false)
    const SubmitMessage = async () => {
        let userId = ''; let accessToken = '';
        userId = await AsyncStorage.getItem('userId');
        accessToken = await AsyncStorage.getItem('accessToken');
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/enduser/send-payment-message';
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(accessToken),
        };

        var Data = {
            user_id: userId,
            message: MsgText
        };
        fetch(InsertAPIURL,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data)
            }
        )
            .then((response) => response.json())
            .then((RES) => {
                setData(RES)
                if (RES.status) {
                    setModalVisible(!modalVisible)
                    setDataFound(true)
                    setMsgText('')
                }
                console.log('payment details' + JSON.stringify(RES));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <View style={{ width: '100%', height: '100%', alignSelf: 'center', backgroundColor: 'white', padding: '5%' }}>
            <Text style={styles.LablelText}>Enter New Request</Text>
            <TextInput
                placeholder="Describe your request."
                onChangeText={val => setMsgText(val)}
                placeholderTextColor={"#ddd"}
                style={styles.InputStyle}
            />
            <TouchableOpacity style={styles.SubmitBtn} onPress={() => SubmitMessage()}>
                <Text style={styles.SubmitBtnText}>SEND</Text>
            </TouchableOpacity>
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
                        <SimpleLineIcons
                            name="check"
                            style={styles.OverlayIcon}
                        />
                        <Text style={styles.modalText}>
                            {DataFound ?
                                Data.status ?
                                    Data.message : null : null
                            }
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default NewRequest

const styles = StyleSheet.create({
    SubmitBtn: {
        paddingVertical: 15,
        backgroundColor: '#383974',
        marginBottom: 20,
        marginTop: 35,
        alignItems: 'center'
    },
    SubmitBtnText: {
        fontSize: 15,
        color: '#fff'
    },
    LablelText: {
        fontSize: 15,
        marginBottom: 0,
        color: 'gray',
        marginTop: 25,
        marginBottom: Platform.OS === 'ios' ? 10 : 10,
    },
    InputStyle: {
        fontSize: 15,
        // marginBottom: 1,
        // height: 100,
        color: '#333',
        borderBottomColor: '#383974',
        borderBottomWidth: 0.5,
        paddingVertical: Platform.OS === 'ios' ? 10 : 10,
        paddingBottom: 90,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: "rgba(0,0,0,0.3)"
    },
    modalView: {
        // margin: 20,
        width: '93%',
        backgroundColor: "white",
        borderRadius: 2,
        paddingVertical: 15,
        alignItems: "center",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    OverlayIcon: {
        fontSize: 150,
        color: '#7dbc28'
    },
    modalText: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
    },
})
