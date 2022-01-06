import React from 'react'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import HistoryCard from './HistoryCard';
// =======
const OnGoingProjects = ({ navigation }) => {
    const [Data, setData] = useState([])
    const [DataFound, setDataFound] = useState(false)
    useEffect(() => {
        FetchData()
    }, [])
    const FetchData = async () => {
        let userId = ''; let accessToken = '';
        userId = await AsyncStorage.getItem('userId');
        accessToken = await AsyncStorage.getItem('accessToken');
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/sitemanager/get-inprogress-project';
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(accessToken),
        };

        var Data = {
            manager_id: userId
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
                // console.log('ongoing' + JSON.stringify(RES));
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
    //         title: 'My Home Bhuja',
    //         description: "Lorem Ipsum is simply dummy text, consectetur ",
    //         noofdays: '60',
    //         ReplyDate: '10/15/2021'
    //     },
    //     {
    //         id: '2',
    //         itemId: '1234',
    //         date: '10/5/2021',
    //         title: 'My Home Bhuja',
    //         description: "Lorem Ipsum is simply dummy text, consectetur",
    //         noofdays: '60',
    //         ReplyDate: '10/15/2021'
    //     },
    //     {
    //         id: '3',
    //         itemId: '1234',
    //         date: '10/5/2021',
    //         title: 'My Home Bhuja',
    //         description: "Lorem Ipsum is simply dummy text, consectetur",
    //         noofdays: '60',
    //         ReplyDate: '10/15/2021'
    //     },
    //     {
    //         id: '4',
    //         itemId: '1234',
    //         date: '10/5/2021',
    //         title: 'My Home Bhuja',
    //         description: "Lorem Ipsum is simply dummy text, consectetur",
    //         noofdays: '60',
    //         ReplyDate: '10/15/2021'
    //     },
    // ];
    const ListHeader = () => {
        return (
            <View style={styles.headerCon}>
                <View style={styles.headerChild}>
                    <View style={styles.headerLeftIconCon}>
                        <AntDesign name="mobile1" style={styles.HeaderIcon} />
                    </View>
                    <View style={styles.headerRightCon}>
                        <Text style={styles.headerTopText}>Mobile No:</Text>
                        <Text style={styles.headerBottomText}>+91-9876543210</Text>
                    </View>
                </View>
                <View style={styles.headerChild}>
                    <View style={styles.headerLeftIconCon}>
                        <SimpleLineIcons name="user" style={styles.HeaderIcon} />
                    </View>
                    <View style={styles.headerRightCon}>
                        <Text style={styles.headerTopText}>Site Engr ID:</Text>
                        <Text style={styles.headerBottomText}>User12345</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{ width: '100%', alignSelf: 'center', backgroundColor: 'white', height: '100%' }}>
            {
                DataFound ?
                    Data.status && Data.message !== 'Unauthenticated.' ?
                        <FlatList
                            key={'posted_posts'}
                            data={Data.data}
                            renderItem={({ item }) => <HistoryCard info={item} navigation={navigation} />}
                            keyExtractor={(item, index) => item.id}
                            showsVerticalScrollIndicator={false}
                            style={{ width: '90%', alignSelf: 'center' }}
                            ListFooterComponent={<View style={{ paddingBottom: 0 }} />}
                        // ListHeaderComponent={ListHeader}
                        />
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{Data.message}</Text>
                        </View>
                    : null
            }
        </View>
    )
}

export default OnGoingProjects;

const styles = StyleSheet.create({

    // ======================headertop
    headerCon: {
        backgroundColor: '#f5f5fc',
        borderRadius: 50,
        alignItems: 'center',
        // justifyContent:'space-evenly',
        flexDirection: 'row',
        marginVertical: 15,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    headerChild: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 25,
    },
    headerLeftIconCon: {
        width: 40,
        height: 40,
        backgroundColor: '#e9e9ef',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    HeaderIcon: {
        fontSize: 20,
        color: '#393874'
    },
    headerRightCon: {

    },
    headerTopText: {
        fontSize: 12
    },
    headerBottomText: {
        fontSize: 13,
        color: '#393874'
    },
})
