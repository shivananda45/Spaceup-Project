import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
const HomeScreen = () => {
    return (
        <View style={styles.container} >
            <ScrollView contentContainerStyle={styles.mainBody}>
                <View style={styles.welCon} >
                    <Text style={styles.welcomeText}>Hi Welcome</Text>
                    <Text style={styles.nameText}>Santhosh Kumar</Text>
                </View>
                <View style={styles.progressCon}>
                    <Text style={styles.progressText}>51% Completed</Text>
                    <View style={styles.progressCon1}>
                        <View style={styles.progressCon2}>
                            <View style={styles.progressCon3} />
                        </View>
                    </View>
                </View>
                <View style={styles.menu} >
                    <TouchableOpacity style={styles.menuItem}>
                        <MaterialIcons name="payment" style={styles.iconStyle} />
                        <Text>Payment Tracking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <MaterialCommunityIcons name="briefcase-clock-outline" style={styles.iconStyle} />
                        <Text>Project tracker</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menu} >
                    <TouchableOpacity style={styles.menuItem}>
                        <MaterialIcons name='tap-and-play' style={styles.iconStyle} />
                        <Text>Live Streaming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <Entypo name="text-document" style={styles.iconStyle} />
                        <Text>Documents</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Feather name="box" style={styles.iconStyle} />
                        <Text>Materials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <MaterialIcons name="headset" style={styles.iconStyle} />
                        <Text>Support</Text>
                    </TouchableOpacity>
                </View>
                <Image source={require('../assets/images/menuBottom.png')} style={styles.imageStyle} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#f3f3f3'
    },
    welCon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    welcomeText: {
        fontSize: 15
    },
    nameText: {
        fontSize: 17,
        color: '#383974'
    },
    mainBody: {
        // backgroundColor: 'red',
        height: Deviceheight,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        //margin: '20%',
        // paddingHorizontal: '20%',
        // paddingVertical: '15%',
        // backgroundColor: '#333'
    },
    menuItem: {
        height: 120,
        width: '40%',
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    iconStyle: {
        color: '#383974',
        fontSize: 35,
        marginBottom: 10
    },
    imageStyle: {
        width: '100%',
        height: 80,
        //alignSelf: 'baseline',
        // marginTop: 'auto',
    },
    bottomBody: {
        // height: '13%',
        width: '100%'
    },
    progressCon: {
        width: '90%',
        // backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:25,
        alignSelf:'center'
    },
    progressText: {
        color: '#383974',
        fontSize: 13,
        marginBottom: 10,
        alignSelf:'flex-start'
    },
    progressCon1: {
        width: '100%',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:5,
        paddingHorizontal:5,
        borderRadius:25
    },
    progressCon2: {
        width: '100%',
        backgroundColor:'#f3f3fb',
        // alignItems:'center',
        // justifyContent:'center',
        // paddingVertical:10,
        // paddingHorizontal:10,
        borderRadius:25
    },
    progressCon3: {
        width: '50%',
        backgroundColor:'#383974',
        // alignItems:'center',
        // justifyContent:'center',
        paddingVertical:7,
        paddingHorizontal:7,
        borderRadius:25
    },
})

export default HomeScreen;
