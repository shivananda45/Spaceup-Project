import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// const navigation = useNavigation();
const WeeksScreen = ({ route, navigation }) => {
    const info = route.params.data;
    // console.log('week screen log', info);
    const [WeekCount, setWeekCount] = useState(1)
    const [Week1Visible, setWeek1Visible] = useState(false)
    const [Week2Visible, setWeek2Visible] = useState(false)
    const [Week3Visible, setWeek3Visible] = useState(false)
    const [Week4Visible, setWeek4Visible] = useState(false)
    const [isAddBtnVisible, setisAddBtnVisible] = useState(true)
    const [routeData, setrouteData] = useState(null)
    // ===================
    const IncrementWeek = (count) => {
        if (count < 5) {
            setWeekCount(count + 1)
            setisAddBtnVisible(true)
            if (WeekCount === 1) {
                setWeek1Visible(true)
                setrouteData({ managerId: info.managerId, projectID: info.projectID, WeekId: 1 });
            }
            else if (WeekCount === 2) {
                setWeek1Visible(true)
                setWeek2Visible(true)
                setrouteData({ managerId: info.managerId, projectID: info.projectID, WeekId: 2 });
            }
            else if (WeekCount === 3) {
                setWeek1Visible(true)
                setWeek2Visible(true)
                setWeek3Visible(true)
                setrouteData({ managerId: info.managerId, projectID: info.projectID, WeekId: 3 });
            }
            else if (WeekCount === 4) {
                setWeek1Visible(true)
                setWeek2Visible(true)
                setWeek3Visible(true)
                setWeek4Visible(true)
                setrouteData({ managerId: info.managerId, projectID: info.projectID, WeekId: 4 });
            }
            else {
                setWeek1Visible(false)
                setWeek2Visible(false)
                setWeek3Visible(false)
                setWeek4Visible(false)
            }
        }
        else {
            setisAddBtnVisible(false)
        }
    }
    // ==============
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="briefcase-clock-outline" style={styles.iconStyle} />
            {
                Week1Visible ?
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
                            <TouchableOpacity
                                style={styles.PendingBtn}
                                onPress={() =>
                                    navigation.navigate('uploadimages', { data: routeData })
                                }>
                                <Feather name="upload" style={styles.RightIcon} />
                                <Text style={styles.PendingText}>Upload Status</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : null
            }
            {Week2Visible ?
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
                        <TouchableOpacity
                            style={styles.PendingBtn}
                            onPress={() =>
                                navigation.navigate("uploadimages", { data: routeData })
                            }>
                            <Feather name="upload" style={styles.RightIcon} />
                            <Text style={styles.PendingText}>Upload Status</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : null
            }
            {Week3Visible ?
                <View style={[styles.ListCon, { borderBottomWidth: 1 }]}>
                    <View style={styles.LeftBody}>
                        <View style={styles.ListIconActive}>
                            <Text style={styles.ListNumActive}>3</Text>
                        </View>
                        <View style={styles.Body}>
                            <Text style={styles.BodyTextActive1}>Week3</Text>
                        </View>
                    </View>
                    <View style={styles.RightBody}>
                        <TouchableOpacity
                            style={styles.PendingBtn}
                            onPress={() => navigation.navigate('uploadimages', { data: routeData })}>
                            <Feather name="upload" style={styles.RightIcon} />
                            <Text style={styles.PendingText}>Upload Status</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : null
            }
            {Week4Visible ?
                <View style={[styles.ListCon, { borderBottomWidth: 1 }]}>
                    <View style={styles.LeftBody}>
                        <View style={styles.ListIconActive}>
                            <Text style={styles.ListNumActive}>4</Text>
                        </View>
                        <View style={styles.Body}>
                            <Text style={styles.BodyTextActive1}>Week4</Text>
                        </View>
                    </View>
                    <View style={styles.RightBody}>
                        <TouchableOpacity
                            style={styles.PendingBtn}
                            onPress={() => navigation.navigate('uploadimages', { data: routeData })}>
                            <Feather name="upload" style={styles.RightIcon} />
                            <Text style={styles.PendingText}>Upload Status</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                : null
            }
            {
                isAddBtnVisible ?
                    <TouchableOpacity style={styles.plusbtn} onPress={() => IncrementWeek(WeekCount)}>
                        <Feather name="plus" style={styles.plusIcon} />
                    </TouchableOpacity>
                    :
                    null
            }
        </View>
    )
}
export default WeeksScreen;

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
    plusbtn: {
        position: 'absolute',
        bottom: 30,
        right: 15,
        backgroundColor: '#393874',
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusIcon: {
        color: '#fff',
        fontSize: 35
    },
})




