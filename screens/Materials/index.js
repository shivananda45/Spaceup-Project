import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Materials({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'white' }} >
            <ScrollView showsVerticalScrollIndicator={false}>
             <View style={styles.TopContainer}>
                <Feather name="box" style={styles.iconStyle} />
                <Text style={styles.HeddingText}>Lorem Ipsum is simply dummy text</Text>
                <Text style={styles.MainText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>
            </View>
                <View style={styles.imageRow}>
                    <Image source={require('../../assets/images/kitchen1.png')} style={styles.ImageOne} />
                    <Image source={require('../../assets/images/kitchen2.png')} style={styles.ImageOne} />
                </View>
                <View style={styles.imageRow}>
                    <Image source={require('../../assets/images/kitchen6.png')} style={styles.ImageOne} />
                    <Image source={require('../../assets/images/kitchen3.png')} style={styles.ImageOne} />
                </View>
            <View style={styles.Buttons}>
                <Text style={styles.HeddingText}>Product Warrenty Details</Text>
                <TouchableOpacity style={styles.Item} onPress={()=>navigation.navigate('ProductWarranty')}>
                <Text style={styles.itemText}>Plywoods</Text>
                <View style={styles.itemIconCon}>
                    <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Item}>
                <Text style={styles.itemText}>Laminations</Text>
                <View style={styles.itemIconCon}>
                    <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                </View>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    ImagesCon: {
        width: Devicewidth*80/100,
        // alignItems:'center'
    },
    imageRow: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems:'center',
        justifyContent:'center'
    },
    TopContainer: {
        // width: '90%',
        // alignItems:'center'
    },
    Buttons:{
        width: Devicewidth*90/100,
        alignSelf:'center',
        alignItems:'center'
    },
    ImageOne:
    {
        width: Devicewidth*40/100,
        height: Devicewidth*40/100,
        marginHorizontal:Devicewidth*2.5/100,
        borderRadius: 10,
        marginTop: 20
    },
    iconStyle: {
        fontSize: 50,
        color: '#383974',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    HeddingText: {
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: '5%',
        // paddingHorizontal:'2%',
        textAlign: 'left',
        alignSelf:'flex-start'
    },
    MainText: {
        marginHorizontal: '5%',
        textAlign: 'left'
    },
    Item: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.115,
        shadowRadius: 3.84,

        elevation: 2,
        marginVertical: 7,
        justifyContent: 'space-between'
    },
    itemText: {
        marginLeft:15
    },
    itemIconCon: {
        backgroundColor: '#ebeafa',
        height: 40,
        width: 40, alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
    },
    itemIcon: {
        fontSize: 17,
        color: '#393874'
    }

})
