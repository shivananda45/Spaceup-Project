import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import NewRequest from './NewRequest'
import RequestHistory from './RequestHistory'
const ProjectTrackerRequests = () => {
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

export default ProjectTrackerRequests;

const styles = StyleSheet.create({
    
})
