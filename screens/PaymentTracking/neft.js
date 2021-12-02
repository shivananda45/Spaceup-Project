import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity ,TextInput,Platform} from 'react-native'

const NeftScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={styles.Body}>
                    <Text style={styles.HeddingText}>Account Number:</Text>
                    <Text style={styles.DataText}>09876543210</Text>
                    <Text style={styles.HeddingText}>IFSC Code:</Text>
                    <Text style={styles.DataText}>IFSC12345</Text>
                    <Text style={styles.HeddingText}>Bank Name:</Text>
                    <Text style={styles.DataText}>SBI Bank</Text>
                    <Text style={styles.HeddingText}>Account Holder's Name:</Text>
                    <Text style={styles.DataText}>Rahul</Text>
                    <View style={styles.FormCon}>
                        <Text style={styles.LablelText}>Reference Number</Text>
                        <TextInput placeholder="Enter Reference Number" style={styles.InputStyle} placeholderTextColor="rgba(0,0,0,0.3)" />
                        <Text style={styles.LablelText}>Amount</Text>
                        <TextInput placeholder="Enter Reference Number" style={styles.InputStyle} placeholderTextColor="rgba(0,0,0,0.3)" />
                        <Text style={styles.LablelText}>Date</Text>
                        <TextInput placeholder="Enter Reference Number" style={styles.InputStyle} placeholderTextColor="rgba(0,0,0,0.3)" />
                        <TouchableOpacity style={styles.SubmitBtn}>
                            <Text style={styles.SubmitBtnText}>SEND</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default NeftScreen;

const styles = StyleSheet.create({
    Body:{
        width: '90%',
        alignSelf:'center',
        paddingVertical:50
    },
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
        marginBottom: 10,
        color: '#f3f3f3',
        borderBottomColor: '#383974',
        borderBottomWidth: 0.5,
        paddingVertical: Platform.OS === 'ios' ? 10 : 10
    },
    HeddingText: {
        fontSize: 15,
        color: 'gray',
        fontWeight: 'bold',
        marginTop:15
    },
    DataText: {
        fontSize: 17,
        color: 'gray',
    },
})
