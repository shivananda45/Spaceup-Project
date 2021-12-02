import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,TouchableNativeFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
const ItemCard = (props) => {
    const data = props.data;
    const [OverlayActive, setOverlayActive] = useState(false)
    return (
        <View>
        <TouchableOpacity style={styles.ListCon} onPress={()=>setOverlayActive(!OverlayActive)}>
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
                        Payment Date:{data.date}
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
                            <TouchableOpacity style={styles.PayNowBtn}>
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
            <View style={[styles.overlayCon, { opacity: OverlayActive ? 1 : 0, }]}>
                <TouchableOpacity style={styles.OverlayBtn}>
                    <Text style={styles.OverlayText}>CASH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OverlayBtn}>
                    <Text style={styles.OverlayText}>NEFT</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    ListCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: 'white',
        paddingVertical:5
    },
    LeftBody: {

    },
    Body: {
        // backgroundColor: 'red'
    },
    RightBody: {

    },
    ListNum: {
        fontSize: 15
    },
    BodyTextActive1: {
        fontSize: 13
    },
    BodyTextActive2: {
        fontSize: 13
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
        justifyContent: 'center'
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
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
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

        elevation: 5,
    },
    OverlayBtn: {
        borderWidth: 1,
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
