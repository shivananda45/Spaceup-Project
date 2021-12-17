import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}) => {
  const [isLogged, setisLogged] = useState(null)
  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      }
      catch (e) {
        console.log(e);
      }
      if (userToken === null) {
          setisLogged(false);
          navigation.navigate('login')
    }
    else {
          setisLogged(true);
          navigation.navigate('tempnav')
      }
    //   alert(userToken)
    }, 1000);
  }, [isLogged]);
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/splash.jpeg')} style={styles.image_style}/>
        </View>
    )
}

export default SplashScreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor:'red'
    },
    image_style:{
        height: '100%',
        width: '100%'
    }
})
