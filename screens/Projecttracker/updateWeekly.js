import React, { useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View, Dimensions, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from 'react-native-vector-icons/AntDesign'

function UpdateCard(props) {
    return (<View style={styles.updateCon}>
        <Text style={styles.HeddingText}>Week{props.data.week} Update</Text>
        <View style={styles.DW_con}>
            <View style={styles.DwChildCon}>
                <Text style={styles.DWC_Hedding}>Date</Text>
                <Text style={styles.DWC_text}>{props.data.posted_on_date}</Text>
            </View>
            <View style={styles.DwChildCon}>
                <Text style={styles.DWC_Hedding}>Work Order Status</Text>
                <Text style={styles.DWC_text}>{props.data.status}</Text>
            </View>
        </View>
        <Text style={styles.subHedding}>Comments</Text>
        <Text style={styles.Text}>{props.data.comment}</Text>
        {
            <FlatList
                horizontal={true}
                data={props.data.project_picture}
                renderItem={({ item }) => <ImageCard data={item} />}
                keyExtractor={(item, index) => item.id}
            />
        }
    </View>);
}
const ImageCard = (props) => {
    return (
        <TouchableOpacity style={styles.imageContainer}
        //  onPress={() => setImagePreview(!ImagePreview)}
        >
            <Image source={{uri:props.data}}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                }} />
            {/* <AntDesign name="closecircle" style={styles.imageCloseIcon} /> */}
        </TouchableOpacity>
    )
}

const UpdatesWeekly = ({ route, navigation }) => {
    const info = route.params.data;
    console.log('weekly update', info);
    // ==============
    const [Data, setData] = useState([])
    const [DataFound, setDataFound] = useState(false)
    useEffect(() => {
        FetchData()
    }, [])
    const FetchData = async () => {
        let userId = ''; let accessToken = '';
        userId = await AsyncStorage.getItem('userId');
        accessToken = await AsyncStorage.getItem('accessToken');
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/sitemanager/get-weekly-update';
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(accessToken),
        };

        var Data = {
            manager_id: userId,
            project_id: info.projectID
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
                // console.log('update weekly return data' + JSON.stringify(RES));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const images = [
        {
            id: '1',
            source: require('../../assets/images/kitchen1.png'),
        },
        {
            id: '2',
            source: require('../../assets/images/kitchen2.png'),
        },
        {
            id: '3',
            source: require('../../assets/images/kitchen6.png'),
        },
        {
            id: '4',
            source: require('../../assets/images/kitchen3.png'),
        },
    ];
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MaterialCommunityIcons name="briefcase-clock-outline" style={styles.iconStyle} />
                <View style={styles.headingCon}>
                    <Text style={styles.headingActiveText}>Weekly Update</Text>
                    <View style={styles.headingInActive}>
                        <Text style={styles.headingInActiveText}>History</Text>
                    </View>
                </View>
                {
                    DataFound ?
                        Data.status && Data.message !== 'Unauthenticated.' ?
                            <FlatList
                                // horizontal={true}
                                data={Data.data}
                                renderItem={({ item }) => <UpdateCard data={item} />}
                                keyExtractor={(item, index) => index}
                            />
                            :
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>{Data.message}</Text>
                            </View>
                        : null
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default UpdatesWeekly

const styles = StyleSheet.create({
    container: {
        //marginLeft: 30
        // marginVertical: 30,
        flex: 1,
        backgroundColor: 'white',
        // paddingHorizontal: '5%'
    },
    iconStyle: {
        fontSize: 50,
        color: '#383974',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    headingCon: {
        // backgroundColor: 'red',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        // marginBottom: 50,
    },
    headingActiveText: {
        fontSize: 16,
        color: '#b3b3cc',
        fontWeight: 'bold'
    },
    headingInActive: {
        paddingVertical: 8,
        paddingHorizontal: 25,
        backgroundColor: '#ece9fb',
        borderRadius: 50
    },
    headingInActiveText: {
        fontSize: 16,
        color: '#393874',
        fontWeight: 'bold',
    },
    LablelText: {
        fontSize: 15,
        marginBottom: 0,
        color: 'black',
        marginTop: 25,
        marginBottom: 10,
    },
    InputStyle: {
        fontSize: 15,
        marginBottom: 50,
        paddingBottom: 90,
        // height: 100,
        color: '#f3f3f3',
        paddingVertical: 10,
        // backgroundColor: 'red',
        borderBottomColor: '#383974',
        borderBottomWidth: 0.5,
    },
    OutLineBtn: {
        paddingVertical: 12,
        borderColor: '#383974',
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 35,
        alignItems: 'center',
        flexDirection: 'row'
    },
    OutLineBtnText: {
        fontSize: 18,
        color: '#393874'
    },
    ButtonIcon: {
        fontSize: 25, marginHorizontal: 20, color: '#393874'
    },
    SmallText: {
        color: '#b0b1e1'
    },
    SubmitBtn: {
        paddingVertical: 15,
        backgroundColor: '#383974',
        marginBottom: 20,
        marginTop: 45,
        alignItems: 'center',
        width: '98%',
        alignSelf: 'center'
    },
    SubmitBtnText: {
        fontSize: 15,
        color: '#fff'
    },
    imageContainer: {
        marginHorizontal: DeviceWidth * 1 / 100,
        width: DeviceWidth * 20 / 100,
        height: DeviceWidth * 20 / 100,

    },
    imageCloseIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
        color: 'white',
        fontSize: 18
    },
    // ===============
    updateCon: {
        // flexDirection:'row',
        justifyContent: 'center',
        // backgroundColor: 'red',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.9,
        paddingVertical: 20,
        marginHorizontal: '5%'
    },
    HeddingText: {
        color: '#393874',
        fontWeight: 'bold',
        fontSize: 18
    },
    DW_con: {
        flexDirection: 'row',
        marginTop: 10,
    },
    DwChildCon: {
        width: '50%',
    },
    DWC_Hedding: {
        color: '#393874'
    },
    DWC_text: {

    },
    subHedding: {
        color: '#393874',
        marginVertical: 10,
    },
    Text: {
        marginBottom: 20,
    },
})
