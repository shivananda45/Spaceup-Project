import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text,StyleSheet, Image } from 'react-native'

const BannerScreen = ({navigation}) => {
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
            navigation.navigate('Login')
      }
      else {
            setisLogged(true);
            navigation.navigate('TemNav')
        }
      //   alert(userToken)
      }, 1000);
    }, [isLogged]);
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/banner-img.png')} style={styles.image_style}/>
        </View>
    )
}

export default BannerScreen;
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
