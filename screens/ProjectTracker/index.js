import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Feather from 'react-native-vector-icons/Feather';


const PaymentTracking = () => {
    return (
        <View style={styles.container}>
            <View style={styles.detail}>
                <Text style={styles.kitchenText}>Kitchen</Text>
                <Feather name="chevron-right" style={styles.chevronIcon} />   
            </View>
            <View style={styles.detail}>
                <Text style={styles.DrawingText}>Drawing Room</Text>
                <Feather name="chevron-right" style={styles.chevronIcon} /> 
            </View>
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
