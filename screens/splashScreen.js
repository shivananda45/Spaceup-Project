import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({ navigation }) => {
  const [isLogged, setisLogged] = useState(null)
  useEffect(() => {
    setTimeout(async () => {
      let username = null;
      let password = null;
      try {
        username = await AsyncStorage.getItem('username');
        password = await AsyncStorage.getItem('password');
      }
      catch (e) {
        console.log(e);
      }
      if (username === null && password === null) {
        setisLogged(false);
        navigation.navigate('login')
      }
      else {
        const apiURL = `https://spaceup.co.in/api/v1/auth/login?username=${username}&password=${password}&login_type=sitemanager`;
        fetch(apiURL).then((res) => res.json())
          .then(async (resJson) => {
            // console.log(resJson);
            if (resJson.access_token) {
              setisLogged(true);
              try {
                await AsyncStorage.setItem('userId', String(resJson.user.id))
                await AsyncStorage.setItem('username', resJson.user.username)
                await AsyncStorage.setItem('phone', resJson.user.phone)
                await AsyncStorage.setItem('password', resJson.user.view_password)
                await AsyncStorage.setItem('accessToken', resJson.access_token)
              }
              catch (e) {
                console.log('error async', e);
              }
            }
          })
        setisLogged(true);
        navigation.navigate('tempnav')
      }
      //   alert(userToken)
    }, 1000);
  }, [isLogged]);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/splash.jpeg')} style={styles.image_style} />
    </View>
  )
}

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red'
  },
  image_style: {
    height: '100%',
    width: '100%'
  }
})
