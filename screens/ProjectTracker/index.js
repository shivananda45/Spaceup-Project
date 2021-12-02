import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
<<<<<<< Updated upstream
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




=======
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewRequest from './NewRequest'
import RequestHistory from './RequestHistory'
const Tab = createMaterialTopTabNavigator();
const PaymentTracking = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12, },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
                tabBarStyle: { backgroundColor: '#393874', shadowOpacity: 0, elevation: 0 },
                tabBarIndicatorStyle: { backgroundColor: 'white' }
            }}
        >
            <Tab.Screen name="RequestHistory" component={RequestHistory}
                name="Request History"
            />
            <Tab.Screen name="NewRequest" component={NewRequest}
                name="New Request"
            />
        </Tab.Navigator>
    )
}
export default PaymentTracking;
>>>>>>> Stashed changes
