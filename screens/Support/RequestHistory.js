import React, { useState,useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card, CardItem } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
const HistoryCard = (props) => (
    <Card style={styles.History_Card}>
        <View style={styles.header}>
            <Text>ID: {props.info.id}</Text>
            <Text>Raised On:{moment(props.info.raised_on).format('MM-DD-YYYY')}</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.headerText}>
                {props.info.message}
            </Text>
            <Text style={styles.bodyText}>
                {props.info.description}
            </Text>
        </View>
        <View style={styles.footer}>
            <View style={styles.statusCon}>
                <Text style={styles.Status1Text}>
                    Status
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="done" style={styles.StatusIcon} />
                    <Text style={styles.Status2Text}>
                        {props.info.status}
                    </Text>
                </View>
            </View>
            <View style={styles.ReplyCon}>
                <Text style={styles.Reply1Text}>
                    Replied on Date
                </Text>
                <Text style={styles.Reply2Text}>
                    {props.info.replied_on_date}
                </Text>
            </View>
        </View>
    </Card>
)
// =======
const RequestHistory = () => {
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
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/enduser/get-support-message';
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
    // const Data = [
    //     {
    //         id: '1',
    //         itemId: '1234',
    //         date: '10/5/2021',
    //         title: 'Customer Message',
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    //         status: 'Completed',
    //         ReplyDate: '10/15/2021'
    //     },
    //     {
    //         id: '2',
    //         itemId: '1234',
    //         date: '10/5/2021',
    //         title: 'Customer Message',
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    //         status: 'Completed',
    //         ReplyDate: '10/15/2021'
    //     },
    //     {
    //         id: '3',
    //         itemId: '1234',
    //         date: '10/5/2021',
    //         title: 'Customer Message',
    //         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    //         status: 'Completed',
    //         ReplyDate: '10/15/2021'
    //     },
    // ];
    return (
        <View style={{ width: '100%', alignSelf: 'center', backgroundColor: 'white', height: '100%' }}>
            {
                DataFound ?
                    Data.status && Data.message !== 'Unauthenticated.' ?
                        <>
                            <FlatList
                                data={Data.data}
                                renderItem={({ item }) => <HistoryCard info={item} />}
                                keyExtractor={(item, index) => item.id}
                                showsVerticalScrollIndicator={false}
                                style={{ paddingBottom: 20, width: '90%', alignSelf: 'center' }}
                            />
                        </>
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{Data.message}</Text>
                        </View>
                    :
                    null
            }
        </View>
    )
}

export default RequestHistory

const styles = StyleSheet.create({
    History_Card: {
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.15,
        // shadowRadius: 3.84,

        // elevation: 2,
        borderRadius: 10,
        marginVertical: 8,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1,
        paddingVertical: 5
    },
    body: {

    },
    headerText: {
        fontWeight: 'bold',
        marginVertical: 5,
        fontSize: 13
    },
    bodyText: {
        fontSize: 13
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    statusCon: {

    },
    Status1Text: {
        fontWeight: 'bold',
    },
    Status2Text: {
        color: 'green'
    },
    ReplyCon: {

    },
    Reply1Text: {
        textAlign: 'right',
        fontWeight: 'bold',
    },
    Reply2Text: {
        textAlign: 'right',
        color: '#393874'
    },
    StatusIcon: {
        marginRight: 5,
        color: 'green'
    }
})
