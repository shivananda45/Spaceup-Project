import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f3f3fb',
                showLabel: false,
                activeColor: "#f3f3fb",
                inactiveColor: "#f1f1f1",
                style: {
                    backgroundColor: '#383974',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                },
            }}
        >
            <Tab.Screen name="PaymentTracking" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="payment" color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="ProjectTracker" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="briefcase-clock-outline" color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="LiveStreaming" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='tap-and-play' color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="Documents" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="text-document" color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="Materials" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="box" color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="Support" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="headset" color={color} style={styles.iconStyle} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs;

const styles = StyleSheet.create({
    TabBar: {
        backgroundColor: 'red'
    },
    iconStyle: {
        // color: '#383974',
        fontSize: 22,
        marginBottom: 10
    },
})
