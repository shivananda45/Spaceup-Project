import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage'
// const navigation = useNavigation();

function WeekListItem(props) {
    return (<View style={styles.ListCon}>
        <View style={styles.LeftBody}>
            <View style={styles.ListIconActive}>
                <Text style={styles.ListNumActive}>{props.info.week}</Text>
            </View>
            <View style={styles.Body}>
                <Text style={styles.BodyTextActive1}>Week{props.info.week}</Text>
            </View>
        </View>
        <View style={styles.RightBody}>
            <TouchableOpacity style={styles.PendingBtn} onPress={() => props.navigation.navigate('ProjectTrackerPhotos',{schedule_id:props.info.schedule_id})}>
                <FontAwesome name="photo" style={styles.RightIcon} />
                <Text style={styles.PendingText}>Photos</Text>
            </TouchableOpacity>
        </View>
    </View>);
}


const PaymentTracking = ({ navigation }) => {
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
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/enduser/get-project-week-track';
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
                // console.log('payment details' + JSON.stringify(RES));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // ==============
    return (
        <View style={styles.container}>
            {/* <WeekListItem navigate={navigation.navigate} /> */}
            {
                DataFound ?
                    Data.status && Data.message !== 'Unauthenticated.' ?
                        <>
                            <FlatList
                                data={Data.data}
                                renderItem={({ item }) => <WeekListItem info={item} navigation={navigation} />}
                                keyExtractor={(item, index) => index}
                                showsVerticalScrollIndicator={false}
                                ListFooterComponent={<View style={{paddingBottom:50}} />}
                                ListHeaderComponent={ <MaterialCommunityIcons name="briefcase-clock-outline" style={styles.iconStyle} />}
                            />
                        </>
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{Data.message}</Text>
                        </View>
                    :
                    null
            }
            {/* <View style={styles.ListCon}>
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
                        <FontAwesome name="photo" style={styles.RightIcon} />
                        <Text style={styles.PendingText}>Photos</Text>
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
                        <FontAwesome name="photo" style={styles.RightIcon} />
                        <Text style={styles.PendingText}>Photos</Text>
                    </TouchableOpacity>
                </View>
            </View> */}
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




