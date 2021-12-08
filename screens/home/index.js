import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import NewProjects from './NewProjects';
import OnGoingProjects from './onGoingProjects';
const HomeScreen = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: { fontSize: 12,fontWeight:'bold' },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
            tabBarStyle: { backgroundColor: '#393874', shadowOpacity: 0, elevation: 0 },
            tabBarIndicatorStyle: { backgroundColor: 'white' }
        }}
        >
            <Tab.Screen name="NewProjects" component={NewProjects}
                name="New Projects"
            />
            <Tab.Screen name="OnGoingProjects" component={OnGoingProjects}
                name="On-Going Projects"
            />
        </Tab.Navigator>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

})
