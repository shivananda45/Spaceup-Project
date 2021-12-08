import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import LoginScreen from '../screens/loginScreen';
import ProjectDetails from '../screens/projectDetails';
import SplashScreen from '../screens/splashScreen';
import Week from '../screens/Projecttracker/week';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home/index';
import WeeklyUpdate from '../screens/Projecttracker/weeklyUpdate';
import UploadImages from '../screens/Projecttracker/uploadImages';
import UpdateWeekly from '../screens/Projecttracker/updateWeekly';
import TempNav from '../screens/tempNav';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState } from 'react';
import { useEffect } from 'react';
const Stack = createStackNavigator();
const MaNavigator = () => {
  const [isLoading, setisLoading] = useState(true)
  useEffect(() => {
    setTimeout(function () { setisLoading(false) }, 2000);
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName="tempnav"
      >
        {
          isLoading ?
            <Stack.Screen name="splash" component={SplashScreen}  options={
              ({ route }) => ({
                headerShown: false,
              })
            } />
            :
            <Stack.Screen name="tempnav" component={TempNav}
              options={
                ({ route }) => ({
                  headerShown: false,
                })
              } />
        }
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="projectDetails" component={ProjectDetails}
          options={
            ({ route }) => ({
              title: "Project Details",
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
        <Stack.Screen name="projectTracker" component={Week}
          options={
            ({ route }) => ({
              title: "Project Tracker",
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
        <Stack.Screen name="weeklyupdate" component={WeeklyUpdate}
          options={
            ({ route }) => ({
              title: "Project Tracker",
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
        <Stack.Screen name="uploadimages" component={UploadImages}
          options={
            ({ route }) => ({
              title: "Project Tracker",
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
        <Stack.Screen name="updateswekly" component={UpdateWeekly}
          options={
            ({ route }) => ({
              title: "Project Tracker",
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
        <Stack.Screen name="home" component={HomeScreen}
          options={
            ({ route }) => ({
              title: "",
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
              headerLeft: () => (
                <Image source={require('../assets/images/logo.png')} style={{ width: 115, height: 25, marginLeft: 10, }} />
              ),
              headerRight: () => (
                <View style={{ marginRight: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  <EvilIcons name="bell" style={{ color: '#393874', fontSize: 35, marginRight: 10, }} />
                  <View style={{ backgroundColor: '#eaeaf9', borderRadius: 50, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name="user" style={{ color: '#393874', fontSize: 20 }} />
                  </View>
                </View>
              )
            })
          }
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MaNavigator;

const styles = StyleSheet.create({

})
