import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage'
import ItemCard from './itemCard';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
function FlatlistBottom() {
    return (
        <View style={styles.bodyBottom}>
            <Text style={styles.TotalDueText}>Total Due  :  ₹4,50,000</Text>
        </View>
    );
}
const EmiScreen = ({ navigation }) => {
    const [Data, setData] = useState([])
    const [DataFound, setDataFound] = useState(false)
    // ==============
    useEffect(() => {
        FetchData()
    }, [])
    // ==============
    const FetchData = async () => {
        let userId = ''; let accessToken = '';
        userId = await AsyncStorage.getItem('userId');
        accessToken = await AsyncStorage.getItem('accessToken');
        LiftOfProjects(userId, accessToken)
    }
    // ==============
    const LiftOfProjects = (userId, accessToken) => {
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/enduser/get-payment-pending-status';
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(accessToken),
        };

        var Data = {
            user_id: userId
        };
        fetch(InsertAPIURL,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data)
            }
        )
            .then((response) => response.json())
            .then((RES) => {
                setData(RES)
                setDataFound(true)
                console.log('emi details' + JSON.stringify(RES));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // ==============
    // const Data = [
    //     {
    //         id: '1',
    //         title: 'Initial Payment 10% : ₹50,000',
    //         date: '10/5/2021',
    //         status: 'paid'
    //     },
    //     {
    //         id: '2',
    //         title: '2nd Payment 30% : ₹1,50,000',
    //         date: '10/5/2021',
    //         status: 'Pending'
    //     },
    //     {
    //         id: '3',
    //         title: '3rd Payment 40% : ₹1,50,000',
    //         date: '10/5/2021',
    //         status: 'Pending'
    //     },
    //     {
    //         id: '4',
    //         title: '4th Payment 20% : ₹1,50,000',
    //         date: '10/5/2021',
    //         status: 'Pending'
    //     }
    // ];
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.body}>
                <View style={styles.bodytop}>
                    <MaterialIcons name="payment" style={styles.iconStyle} />
                    <Text style={{ color: '#393874', textAlign: 'center', marginBottom: 10 }}>EMI</Text>
                    {
                        DataFound ?
                            Data.status && Data.message !== 'Unauthenticated.' ?
                                <>
                                    <View style={styles.TopTotalPrice}>
                                        <Text style={styles.TopTotalPriceText}>Total Price for the project:</Text>
                                        <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>5,00,000</Text>
                                    </View>
                                    <View style={{ width: '90%', marginVertical: 10 }}>
                                        <FlatList
                                            data={Data}
                                            renderItem={({ item }) => <ItemCard data={item} navigation={navigation} />}
                                            keyExtractor={(item, index) => item.id}
                                            ListFooterComponent={FlatlistBottom}
                                        />
                                    </View>
                                </>
                                :
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text>{Data.message}</Text>
                                </View>
                            :
                            null
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EmiScreen

const styles = StyleSheet.create({
    body: {
        // backgroundColor: 'green',
        height: '100%'
    },
    bodytop: {
        height: DeviceHeight * 60 / 100,
        // backgroundColor: 'red'
        alignItems: 'center'
    },
    bodyBottom: {
        // backgroundColor: 'blue'
    },
    iconStyle: {
        fontSize: 50,
        color: '#383974',
        alignSelf: 'center',
        marginTop: 10,
    },
    TopTotalPrice: {
        borderRadius: 50,
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: "#f3f3fb",
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    TopTotalPriceText: {

    },

    TotalDueText: {
        color: "#383974",
        textAlign: 'center',
        marginTop: 20
    },
})
