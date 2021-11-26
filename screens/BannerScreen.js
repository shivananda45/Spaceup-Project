import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'

const BannerScreen = () => {
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
        backgroundColor:'red'
    },
    image_style:{
        height: '100%',
        width: '100%'
    }
})
