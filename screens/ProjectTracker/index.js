import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Feather from 'react-native-vector-icons/Feather';


const PaymentTracking = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.detail} onPress={()=> navigation.navigate('Kitchen')} >
                <Text style={styles.kitchenText}>Kitchen</Text>
                <Feather name="chevron-right" style={styles.chevronIcon} />   
            </TouchableOpacity>
            <TouchableOpacity style={styles.detail} onPress={()=> navigation.navigate('DrawingRoom') }>
                <Text style={styles.DrawingText}>Drawing Room</Text>
                <Feather name="chevron-right" style={styles.chevronIcon} /> 
            </TouchableOpacity>
        </View>
    )
}

export default PaymentTracking

const styles = StyleSheet.create({
    container: {
        //marginLeft: 30
        marginVertical: 30
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 30
    },
    kitchenText: {
        opacity: 0.5,
        fontSize: 16
    },
    DrawingText: {
        opacity: 0.5,
        fontSize: 16
    },
    chevronIcon: {
        fontSize: 18,
        opacity: 0.5
    }
})




