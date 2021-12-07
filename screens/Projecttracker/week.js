import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// const navigation = useNavigation();
const PaymentTracking = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="briefcase-clock-outline" style={styles.iconStyle} />
            <View style={styles.ListCon}>
                <View style={styles.LeftBody}>
                    <View style={styles.ListIconActive}>
                        <Text style={styles.ListNumActive}>1</Text>
                    </View>
                    <View style={styles.Body}>
                        <Text style={styles.BodyTextActive1}>Week1</Text>
                    </View>
                </View>
                <View style={styles.RightBody}>
                    <TouchableOpacity style={styles.PendingBtn} onPress={() => navigation.navigate('ProjectTrackerPhotos')}>
                        <Feather name="upload" style={styles.RightIcon} />
                        <Text style={styles.PendingText}>Upload Status</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ListCon}>
                <View style={styles.LeftBody}>
                    <View style={styles.ListIconActive}>
                        <Text style={styles.ListNumActive}>2</Text>
                    </View>
                    <View style={styles.Body}>
                        <Text style={styles.BodyTextActive1}>Week2</Text>
                    </View>
                </View>
                <View style={styles.RightBody}>
                    <TouchableOpacity style={styles.PendingBtn} onPress={() => navigation.navigate("ProjectTrackerPhotos")}>
                        <Feather name="upload" style={styles.RightIcon} />
                        <Text style={styles.PendingText}>Upload Status</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.ListCon, { borderBottomWidth: 0 }]}>
                <View style={styles.LeftBody}>
                    <View style={styles.ListIconActive}>
                        <Text style={styles.ListNumActive}>3</Text>
                    </View>
                    <View style={styles.Body}>
                        <Text style={styles.BodyTextActive1}>Week3</Text>
                    </View>
                </View>
                <View style={styles.RightBody}>
                    <TouchableOpacity style={styles.PendingBtn} onPress={() => navigation.navigate('ProjectTrackerPhotos')}>
                        <Feather name="upload" style={styles.RightIcon} />
                        <Text style={styles.PendingText}>Upload Status</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default PaymentTracking;

const styles = StyleSheet.create({
    container: {
        //marginLeft: 30
        // marginVertical: 30,
        flex: 1,
        backgroundColor: 'white'
    },
    iconStyle: {
        fontSize: 50,
        color: '#383974',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    ListCon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginVertical: 10,
        // backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: '5%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    LeftBody: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Body: {
        // backgroundColor: 'red',
        marginLeft: 10
    },
    RightBody: {

    },
    RightIcon: {
        marginRight: 5,
        color: '#393874'
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
    TotalDueText: {
        color: "#383974",
        textAlign: 'center'
    },
    PendingBtn: {
        borderWidth: 1,
        borderColor: "#383974",
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    PendingText: {
        color: "#383974"
    },
})




