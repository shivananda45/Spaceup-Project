import React from 'react'
import { Image, StyleSheet, Text, View ,Dimensions} from 'react-native'
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
export default function LiveStreaming() {
    return (
        <View
        style={{flex: 1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}
        >
            <Image 
            source={require('../../assets/images/liveStream.png')}
            style={{width:Devicewidth*80/100,height:Devicewidth*80/100}}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
