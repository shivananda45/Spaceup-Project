import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.welCon} >
                <Text>Hi Welcome{'\n' }Santhosh Kumar</Text>
            </View>
            <View style={styles.mainBody}>
                <View style={styles.menu} >
                    <TouchableOpacity>
                        <MaterialIcons name="payment" />
                    <Text>Payment Tracking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="briefcase-clock-outline"/>
                    <Text>Project tracker</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menu} >
                    <TouchableOpacity>
                        <MaterialIcons name='tap-and-play' />
                    <Text>Live Streaming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Entypo name="text-document" />   
                    <Text>Documents</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity>
                        <Feather name="box" />
                    <Text>Materials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="headset" />
                    <Text>Support</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Image source={require('../assets/images/menuBottom.png')} style={styles.imageStyle} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    welCon: {
        marginTop: '10%',
        paddingLeft: '40%',
        paddingBottom: '30%'
    },
    mainBody: {
        backgroundColor: 'red',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //margin: '20%',
        paddingHorizontal: '20%',
        paddingVertical: '15%'
    },
    imageStyle: {
        width: '100%',
        height: 80,
        //marginTop: '22%',
    }
}) 

export default HomeScreen;
