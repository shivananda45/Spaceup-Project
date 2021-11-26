import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { enableScreens } from 'react-native-screens';

enableScreens();

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import BannerScreen from '../screens/BannerScreen';
import ForgotPassword from '../screens/ForgotPassword';
import { Image, Text } from 'react-native';

const PrNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const stackScreens = () => {
    return (
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
         {/* <Stack.Screen name="Banner" component={BannerScreen}
          options={
            ({ route }) => ({
              headerShown: false
            })
          }
        /> */}
         <Stack.Screen name="Home" component={HomeScreen}
          options={
            ({ route }) => ({
              headerShown: true,
              headerTitle:'',
              headerStyle: {
                backgroundColor: '#383974'
              },
              headerLeft: ()=>{
                <Text>Vamshiiiiii</Text>
                // <Image source={require('../assets/images/mainLogo.png')} style={{width: 100, height: 30, backgroundColor: 'red'}} />
              }
              
            })
          }
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}
          options={
            ({ route }) => ({
              headerShown: false
            })
          }
        />
        <Stack.Screen name="Login" component={LoginScreen}
          options={
            ({ route }) => ({
              headerShown: false
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