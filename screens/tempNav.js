import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const TempNav = ({ navigation }) => {
    const LogOut = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            navigation.navigate('Login')
          }
          catch (e) {
            console.log(e);
          }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Banner')} style={styles.Btn}>
                <Text>Banner Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.Btn}>
                <Text>Login Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.Btn}>
                <Text>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.Btn}>
                <Text>Home Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('PaymentSupport')} style={styles.Btn}>
                <Text>Payment Support Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')} style={styles.Btn}>
                <Text>BottomTabs Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={LogOut} style={styles.Btn}>
                <Text>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TempNav;
const styles = StyleSheet.create({
    Btn: {
        marginTop: 10,
        backgroundColor: '#ddd',
        width: '90%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
