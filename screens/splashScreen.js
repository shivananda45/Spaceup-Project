import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'

const SplashScreen = () => {
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
