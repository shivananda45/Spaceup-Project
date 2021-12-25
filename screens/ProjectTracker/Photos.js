import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Feather from 'react-native-vector-icons/Feather';

function ListCard(props) {
    const TheData = {
        unique_id: props.info.unique_id,
        room_type_name: props.info.room_type_name
    }
    return (
        <TouchableOpacity style={styles.detail} onPress={() => props.navigation.navigate('PhotosGallery', { data: TheData })}>
            <Text style={styles.kitchenText}>{props.info.room_type_name}</Text>
            <Feather name="chevron-right" style={styles.chevronIcon} />
        </TouchableOpacity>
    );
}
const Photos = ({ route, navigation }) => {
    const info = route.params.schedule_id;
    // console.log('the schedule id', info);
    // ================
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
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/enduser/get-project-week-list';
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(accessToken),
        };

        var Data = {
            user_id: userId,
            schedule_id: info
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
                console.log('items list' + JSON.stringify(RES));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // ==============
    return (
        <View style={styles.container}>
            {
                DataFound ?
                    Data.status && Data.message !== 'Unauthenticated.' ?
                        <>
                            <FlatList
                                data={Data.data}
                                renderItem={({ item }) => <ListCard info={item} navigation={navigation} />}
                                keyExtractor={(item, index) => index}
                                showsVerticalScrollIndicator={false}
                                ListFooterComponent={<View style={{ paddingBottom: 50 }} />}
                            />
                        </>
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{Data.message}</Text>
                        </View>
                    :
                    null
            }
            {/* <TouchableOpacity style={styles.detail} onPress={() => navigation.navigate('DrawingRoom')}>
                <Text style={styles.DrawingText}>Drawing Rom</Text>
                <Feather name="chevron-right" style={styles.chevronIcon} />
            </TouchableOpacity>  */}
        </View>
    )
}

export default Photos;

const styles = StyleSheet.create({
    container: {
        //marginLeft: 30
        // marginVertical: 30
        flex: 1,
        backgroundColor: 'white'
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 22,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    kitchenText: {
        opacity: 0.5,
        fontSize: 16
    },
    DrawingText: {
        opacity: 0.5,
        fontSize: 16
    },
    chevronIcon: {
        fontSize: 18,
        opacity: 0.5
    }
})
