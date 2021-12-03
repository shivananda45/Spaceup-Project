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
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import TempNav from '../screens/tempNav';
import BottomTabs from './BottomTabs';
import NeftScreen from '../screens/PaymentTracking/neft'
import PaymentsSupport from '../screens/PaymentsSupport'
import kitchenScreen from '../screens/ProjectTracker/kitchen';
import ProjectTrackerRequests from '../screens/ProjectTracker/ProjectTrackerRequests';
import DrawingRoom from '../screens/ProjectTracker/DrawingRoom';
import Photos from '../screens/ProjectTracker/Photos';
import ProductWarenty from '../screens/Documents/ProductWarenty';
import Support from '../screens/Support';
const PrNavigator = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TemNav"
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
                <Image source={require('../assets/images/mainLogo.png')}
                  style={{ width: 120, height: 50, marginLeft: 15 }}
                  resizeMode="contain"
                />
              ),
              headerRight: () => (
                <Feather name="bell"
                  style={{ fontSize: 25, color: '#fff', marginRight: 20 }}
                />
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
        <Stack.Screen name="PaymentSupport" component={PaymentsSupport}
          options={
            ({ route }) => ({
              title: "Payment Support",
              headerShown: true
            })
          }
        />
        <Stack.Screen name="Neft" component={NeftScreen}
          options={
            ({ route }) => ({
              title: "Payment Support",
              headerShown: true
            })
          }
        />
        <Stack.Screen name="ProductWarranty" component={ProductWarenty}
          options={
            ({ route }) => ({
              title: "Product Warranty Details",
              headerShown: true,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: '500'
              },
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1
              },
            })
          }
        />
        <Stack.Screen name="SupportScreen" component={Support}
          options={
            ({ route }) => ({
              title: "Support",
              headerShown: true,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: '500'
              },
              headerStyle: {
                shadowOpacity: 0,
                elevation: 0,
                borderBottomColor: '#ccc',
                borderBottomWidth: 1
              },
            })
          }
        />
        {/* ===========project tracor ==========*/}
        <Stack.Screen name='Kitchen' component={kitchenScreen}
          options={{
            title: 'Kitchen',
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '500'
            },
            headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1
            },
          }}
        />
        <Stack.Screen name='DrawingRoom' component={DrawingRoom}
          options={{
            title: 'DrawingRoom',
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '500'
            },
            headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1
            },
          }}
        />
        <Stack.Screen name='ProjectRequests' component={ProjectTrackerRequests}
          options={{
            title: 'Project Tracker Requests',
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '500'
            },
            headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1
            },
          }}
        />
        <Stack.Screen name='ProjectTrackerPhotos' component={Photos}
          options={{
            title: 'Project Tracker',
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '500'
            },
            headerStyle: {
              shadowOpacity: 0,
              elevation: 0,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1
            },
            headerRight: () => (
              <TouchableOpacity style={styles.HlpBtn} onPress={() => navigation.navigate('ProjectRequests')}>
                <Feather name="info" style={styles.HlpIcon} />
                <Text style={styles.helpText}>Help</Text>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default PrNavigator;
const styles = StyleSheet.create({
  HlpBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },
  HlpIcon: {
    // color: '#ccc',
    marginRight: 5,
    fontSize: 18
  },
  helpText: {
    fontWeight: '600'
  }
})