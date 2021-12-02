import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'

const TempNav = ({ navigation }) => {
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
            <Button title="payment support" onPress={() => navigation.navigate('PaymentSupport')} />
            <Button title="bottomtabs " onPress={() => navigation.navigate('BottomTabs')} />
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
