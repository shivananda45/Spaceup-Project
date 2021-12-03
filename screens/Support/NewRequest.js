import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Platform, Modal, Pressable } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const NewRequest = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ width: '100%',height:'100%', alignSelf: 'center', backgroundColor: 'white', padding: '5%' }}>
            <Text style={styles.LablelText}>Enter New Request</Text>
            <TextInput
                placeholder="Describe your request."
                pla
                style={styles.InputStyle}
            />
            <TouchableOpacity style={styles.SubmitBtn} onPress={()=>setModalVisible(!modalVisible)}>
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
                        <Text style={styles.modalText}>Understand your concern{"\n"}
                        your designer will get in touch with you shortly.
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
        // marginBottom: 10,
        // height: 100,
        paddingBottom: 90,
        color: '#f3f3f3',
        borderBottomColor: '#383974',
        borderBottomWidth: 0.5,
        paddingVertical: Platform.OS === 'ios' ? 10 : 10
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
        fontSize:150,
        color: '#7dbc28'
    },
    modalText: {
        textAlign:'center',
        marginTop:20,
        marginBottom:5,
    },
})
