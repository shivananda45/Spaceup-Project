import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const TempNav = ({navigation}) => {
    const LogOut = async () => {
        try {
            await AsyncStorage.removeItem('userToken');
            navigation.navigate('login')
          }
          catch (e) {
            console.log(e);
          }
    }
    return (
        <View style={styles.con}>
            {/* <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('login')}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('home')}>
                <Text style={styles.btnText}>Home</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('projectDetails')}>
                <Text style={styles.btnText}>Project Details</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.btn} onPress={LogOut}>
                <Text style={styles.btnText}>LogOut</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TempNav

const styles = StyleSheet.create({
    con: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:30,
    },
    btn: {
        backgroundColor:'#b0b1e1',
        width: '90%',
        paddingVertical:12,
        alignItems:'center',
        borderRadius:25,
        marginTop:10
    },
    btnText: {
        color: '#393874'
    },
})
