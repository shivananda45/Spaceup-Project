import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Dimensions, Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
function HeaderContainer(props) {
    var date1 = new Date(props.PostData.start_date);
    var date2 = new Date(props.PostData.handover_date);
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
    return (
        <View style={{ marginBottom: -30, }}>
            <View style={styles.headerCon1}>
                <Text style={styles.Toptext}>Project ID : {props.PostData.project_id}</Text>
                <Text style={styles.MainHeddingText}>{props.PostData.project_name}</Text>
                {props.PostData.project_name !== null ?
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Octicons name="location" style={{ fontSize: 13, color: '#383974', marginRight: 12 }} />
                        <Text style={styles.text}>{props.PostData.project_name}</Text>
                    </View>
                    : null
                }
            </View>
            <View style={styles.child_con}>
                <View style={styles.leftCon}>
                    <Text style={styles.childHeddingText}>No. of Days</Text>
                    <Text style={styles.dayText}>{diffDays}</Text>
                </View>
                <View style={styles.centerCon}>
                    <Text style={styles.childHeddingText}>Starting Date</Text>
                    <Text style={styles.dateText}>{props.PostData.start_date}</Text>
                </View>
                <View style={styles.rightCon}>
                    <Text style={styles.childHeddingText}>Handover Date</Text>
                    <Text style={styles.dateText}>{props.PostData.handover_date}</Text>
                </View>
            </View>
        </View>
    );
}
function FooterContainer(props) {
    const theInfo = { managerId: props.managerId, projectID: props.projectID };
    return (
        <TouchableOpacity style={styles.footerCon} onPress={() =>
            props.navigation.navigate('projectTracker',
                { data: theInfo })}
        >
            <View style={styles.footerIconCon}>
                <Feather name="upload" style={styles.footerIcon} />
            </View>
            <View style={styles.footerTextCon}>
                <Text style={styles.footerText}>Upload Status </Text>
            </View>
        </TouchableOpacity>
    );
}


const ProjectDetails = ({ route, navigation }) => {
    const info = route.params.data;
    // console.log('route', info);
    const [DataAvailable, setDataAvailable] = useState(false)
    const [User_Id, setUser_Id] = useState(null)
    // const [Access_Token, setAccess_Token] = useState(null)
    useEffect(() => {
        GetUserData()
        // FetchData()
    }, [])
    const GetUserData = async () => {
        let userId = ''; let accessToken = '';
        try {
            userId = await AsyncStorage.getItem('userId');
            // accessToken = await AsyncStorage.getItem('accessToken');
            setUser_Id(userId)
            // setAccess_Token(accessToken)
            // console.warn('token ',Access_Token);
            // console.warn('id',User_Id);
        }
        catch (e) {
            console.log(e);
        }
    }
    // const FetchData = () => {
    //     var InsertAPIURL = 'https://spaceup.co.in/api/v1/enduser/get-payment-pending-status';
    //     var headers = {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer '+String(Access_Token),
    //     };

    //     var Data = {
    //         user_id: User_Id
    //     };
    //     fetch(InsertAPIURL,
    //         {
    //             method: 'POST',
    //             headers: headers,
    //             body: JSON.stringify(Data)
    //         }
    //     )
    //         .then((response) => response.json())
    //         .then((RES) => {
    //             console.log('project details' + JSON.stringify(RES));
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    const images = [
        {
            id: '1',
            source: require('../assets/images/kitchen1.png'),
        },
        {
            id: '2',
            source: require('../assets/images/kitchen2.png'),
        },
        {
            id: '3',
            source: require('../assets/images/kitchen6.png'),
        },
        {
            id: '4',
            source: require('../assets/images/kitchen3.png'),
        },
        {
            id: '5',
            source: require('../assets/images/kitchen4.png'),
        },
        {
            id: '6',
            source: require('../assets/images/kitchen5.png'),
        }
    ]
    const ImageCard = (props) => {
        return (
            <TouchableOpacity style={styles.imageContainer}
            //  onPress={() => setImagePreview(!ImagePreview)}
            >
                <Image source={props.data.source}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10, marginTop: 40
                    }} />
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.con}>
            {
                DataAvailable ?
                    <FlatList
                        style={{
                            height: DeviceHeight,
                            paddingHorizontal: '5.5%'
                        }}
                        numColumns={2}
                        data={images}
                        renderItem={({ item }) => <ImageCard data={item} />}
                        keyExtractor={(item, index) => item.id}
                        ListFooterComponent={<FooterContainer navigation={navigation} />}
                        ListHeaderComponent={HeaderContainer}
                    />
                    :
                    <View style={{ height: '100%', width: '100%' }}>
                        <View style={{ height: '80%', width: '100%' }}>
                            <HeaderContainer PostData={info} />
                        </View>
                        <View style={{ height: '20%', width: '100%', justifyContent: 'center' }}>
                            <FooterContainer
                                navigation={navigation}
                                projectID={info.project_id}
                                managerId={User_Id !== null ? User_Id : null}
                            />
                        </View>
                    </View>
            }
        </SafeAreaView>
    )
}

export default ProjectDetails

const styles = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerCon1: {
        alignItems: 'center',
        marginTop: 30,
    },
    Toptext: {

    },
    MainHeddingText: {
        fontSize: 25,
        color: '#383974',
        marginBottom: 7,
        fontWeight: '600'
    },
    text: {
        // paddingBottom: 10,
        // opacity: 0.5
        color: "#b4b4b4"
    },
    child_con: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ebeaf8',
        alignSelf: 'center',
        width: '98%',
        borderRadius: 15,
        paddingVertical: 5,
        //paddingHorizontal: 5,
        marginTop: 10,
    },
    leftCon: {

    },
    childHeddingText: {
        // fontWeight: '900',
        marginBottom: 5,
    },
    centerCon: {

    },
    dateText: {
        fontSize: 11,
        color: '#383974'
    },
    rightCon: {

    },
    dayText: {
        fontSize: 15,
        color: '#7dbc27',
        fontWeight: 'bold'
    },
    imageContainer: {
        // justifyContent:'center',
        // width: '35%',
        // height: 200,
        // width: DeviceWidth*40/100, height: DeviceWidth*40/100,
        // borderRadius: 10,
        // // alignItems: 'center',
        // flexDirection:'row',
        marginHorizontal: DeviceWidth * 2 / 100,
        marginTop: 18,
        width: DeviceWidth * 41 / 100,
        height: DeviceWidth * 41 / 100,
        // flex: 0.5,
    },
    footerCon: {
        width: '98%',
        alignSelf: 'center',
        // backgroundColor: 'red',
        // paddingBottom:80,
        marginVertical: 70,
        borderColor: '#383974',
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center'
        height: 50
    },
    footerIconCon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        borderRightColor: '#383974',
        borderRightWidth: 2,
        height: 50,
    },
    footerIcon: {
        color: '#383974',
        fontSize: 25
    },
    footerTextCon: {
        textAlign: 'center',
        // backgroundColor: 'red',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    footerText: {
        fontSize: 17,
        color: '#383974'
    }
})
