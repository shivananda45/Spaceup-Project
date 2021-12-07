import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import NewProjects from './NewProjects';
import OnGoingProjects from './onGoingProjects';
const HomeScreen = () => {
    return (
        <Tab.Navigator
            // screenOptions={{
            //     tabBarInactiveTintColor: 'red',
            //     tabBarIndicatorStyle: {backgroundColor:'red'},
            //     labelStyle: { fontSize: 12, },
            //     // tabStyle: { width: 100 },
            //     style: { backgroundColor: '#393874',elevation: 0, },
            //     tabBarIndicatorStyle: { backgroundColor: 'white' }
            // }}
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
