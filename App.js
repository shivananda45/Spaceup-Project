import React from 'react'
import { StyleSheet } from 'react-native'
import LoginScreen from './screens/loginScreen'
import ProjectDetails from './screens/projectDetails'
import SplashScreen from './screens/splashScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/home'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="projectDetails">
        <Stack.Screen name="splash" component={SplashScreen} />
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
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})
