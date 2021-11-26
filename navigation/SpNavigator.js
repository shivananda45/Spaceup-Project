import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { enableScreens } from 'react-native-screens';

enableScreens();

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';


const PrNavigator = () => {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    const stackScreens = () => {
      return(
      <Stack.Navigator 
      // screenOptions={{
      //   headerBackTitleVisible: false,
      //   headerTintColor: '#FFFFFF',
      // }} 
      >
      <Stack.Screen name="Login" component={LoginScreen}
                  options={
                    ({ route }) => ({
                      headerShown: true
                    })
                  }
                />
      <Stack.Screen name="Home" component={HomeScreen}
                  options={
                    ({ route }) => ({
                      headerShown: true
                    })
                  }
                />
      </Stack.Navigator>
      )
    }
    return (
    <NavigationContainer>
        <Stack.Navigator 
      // screenOptions={{
      //   headerBackTitleVisible: false,
      //   headerTintColor: '#FFFFFF',
      // }} 
      >
      <Stack.Screen name="Login" component={LoginScreen}
                  options={
                    ({ route }) => ({
                      headerShown: true
                    })
                  }
                />
      <Stack.Screen name="Home" component={HomeScreen}
                  options={
                    ({ route }) => ({
                      headerShown: true
                    })
                  }
                />
      </Stack.Navigator>
       {/* <Tab.Navigator>
        <Tab.Screen name="" component={} />
        <Tab.Screen name="" component={} />
      </Tab.Navigator> */}
    </NavigationContainer>
    )
} 

                  
export default PrNavigator;