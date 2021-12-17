import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
const ItemCard = (props) => {
    const data = props.data;
    const [OverlayActive, setOverlayActive] = useState(false)
    return (
        <View style={styles.con}>
            {
                OverlayActive ?
                    <View style={[styles.overlayCon, { height: OverlayActive ? '100%' : 0, }]}>
                        <TouchableOpacity style={[styles.OverlayBtn, { borderWidth: OverlayActive ? 1 : 0 }]}>
                            <Text style={styles.OverlayText}>CASH</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.OverlayBtn, { borderWidth: OverlayActive ? 1 : 0 }]} onPress={() => props.navigation.navigate('Neft')}>
                            <Text style={styles.OverlayText}>NEFT</Text>
                        </TouchableOpacity>
                    </View>
                    : null
            }
        <View style={styles.ListCon}>
            <View style={styles.LeftBody}>
                <View style={data.status === "paid" ? styles.ListIconActive : styles.ListIcon}>
                    <Text style={data.status === "paid" ? styles.ListNumActive : styles.ListNum}>{data.id}</Text>
                </View>
            </View>
            <View style={styles.Body}>
                <Text style={styles.BodyTextActive1}>{data.title}</Text>
                <View style={styles.calenderCon}>
                    <MaterialCommunityIcons name="calendar-month-outline" style={styles.calenderIcon} />
                    <Text style={styles.BodyTextActive2}>
                        {data.status === "paid" ? 'Payment' : 'Due'} Date:{data.date}
                    </Text>
                </View>
            </View>
            <View style={styles.RightBody}>
                {
                    data.status === 'paid' ?
                        <View style={styles.Paid}>
                            <MaterialIcons name="done" style={styles.PaidIcon} />
                            <Text style={styles.PaidText}>Paid</Text>
                        </View>
                        :
                        data.status === 'payNow' ?
                            <TouchableOpacity style={styles.PayNowBtn} onPress={() => setOverlayActive(true)}>
                                <Text style={styles.PayNowText}>Pay now</Text>
                            </TouchableOpacity>
                            :
                            data.status === 'Pending' ?
                                <TouchableOpacity style={styles.PendingBtn}>
                                    <Text style={styles.PendingText}>Pending..</Text>
                                </TouchableOpacity>
                                : null
                }
            </View>
        </View>
        </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    con:{

    },  
    ListCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        // backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    LeftBody: {

    },
    Body: {
        // backgroundColor: 'red'
    },
    RightBody: {
        // backgroundColor:'red'
    },
    ListNum: {
        fontSize: 15
    },
    BodyTextActive1: {
        fontSize: 13
    },
    BodyTextActive2: {
        fontSize: 12
    },
    Paid: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    PaidIcon: {
        color: 'green',
        marginRight: 8
    },
    PaidText: {
        color: 'green'
    },
    ListIconActive: {
        backgroundColor: "#393874",
        borderRadius: 25,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ListNumActive: {
        fontSize: 15,
        color: 'white'
    },
    ListIcon: {
        backgroundColor: "#f3f3fb",
        borderRadius: 25,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0
    },
    PayNowBtn: {
        backgroundColor: "#383974",
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 25
    },
    PayNowText: {
        color: 'white'
    },
    TotalDueText: {
        color: "#383974",
        textAlign: 'center'
    },
    calenderCon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    calenderIcon: {
        color: 'black',
        marginRight: 5
    },
    PendingBtn: {
        borderWidth: 1,
        borderColor: "#383974",
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 25
    },
    PendingText: {
        color: "#383974"
    },
    overlayCon: {
        position: 'absolute',
        // top: 0,
        // // bottom: 0,
        // left: 0,
        // right: 0,
        
        // marginHorizontal:10,
        height: '90%',
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,0.9)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    OverlayBtn: {
        borderColor: "#383974",
        paddingVertical: 0,
        paddingHorizontal: 19,
        borderRadius: 25,
        marginHorizontal: 5
    },
    OverlayText: {
        color: "#383974"
    },
})
