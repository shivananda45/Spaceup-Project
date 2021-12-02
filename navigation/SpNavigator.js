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
import Feather from 'react-native-vector-icons/Feather'
import TempNav from '../screens/tempNav';
import BottomTabs from './BottomTabs';

const PrNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs"
      // screenOptions={{
      //   headerBackTitleVisible: false,
      //   headerTintColor: '#FFFFFF',
      // }} 
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs}
          options={
            ({ route }) => ({
              headerShown: false
            })
          }
        />
        <Stack.Screen name="TemNav" component={TempNav}
          options={
            ({ route }) => ({
              headerShown: false
            })
          }
        />
        <Stack.Screen name="Banner" component={BannerScreen}
          options={
            ({ route }) => ({
              headerShown: true,
            })
          }
        />
        <Stack.Screen name="Home" component={HomeScreen}
          options={
            ({ route }) => ({
              headerShown: true,
              headerTitle: '',
              headerStyle: {
                backgroundColor: '#383974'
              },
              headerLeft: () => (
                <Image source={require('../assets/images/mainLogo.png')} style={{ width: 120, height: 50, marginLeft: 15 }} resizeMode="contain" />
              ),
              headerRight: () => (
                <Feather name="bell" style={{ fontSize: 25, color: '#fff', marginRight: 20 }} />
              )

            })
          }
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}
          options={
            ({ route }) => ({
              headerShown: true
            })
          }
        />
        <Stack.Screen name="Login" component={LoginScreen}
          options={
            ({ route }) => ({
              headerShown: true
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default PrNavigator;