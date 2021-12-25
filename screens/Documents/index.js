import React,{useState,useEffect} from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, CardItem } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'
function ListCard(props) {
    const TheData = {
        document_file:props.info.document_file,
        document_type:props.info.document_type,
    };
    return (
        <TouchableOpacity style={styles.CardItem} onPress={() => props.navigation.navigate('ProductWarranty', { data: TheData })}>
            <Card style={styles.Item}>
                <Text style={styles.itemText}>{props.info.document_type} (PDF)</Text>
                <View style={styles.itemIconCon}>
                    <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                </View>
            </Card>
        </TouchableOpacity>
    );
}


export default function Documents({ navigation }) {
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
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/enduser/get-documents';
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(accessToken),
        };

        var Data = {
            user_id: userId,
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
                console.log('images lios', JSON.stringify(RES));
                // console.log('images lios', JSON.stringify(RES.data.pictures));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // ==============
    return (
        <View style={styles.con}>
            {
                DataFound ?
                    Data.status && Data.message !== 'Unauthenticated.' ?
                        <FlatList
                            data={Data.data}
                            renderItem={({ item }) => <ListCard info={item} navigation={navigation} />}
                            keyExtractor={(item, index) => index}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent={<Entypo name="text-document" style={styles.iconStyle} />}
                            ListFooterComponent={<View style={{ paddingBottom: 50 }} />}
                        />
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Entypo name="text-document" style={styles.iconStyle} />
                            <Text>{Data.message}</Text>
                        </View>
                    :
                    null
            }
            {/* <ListCard></ListCard> */}
            {/*  <TouchableOpacity style={styles.CardItem}>
                <Card style={styles.Item}>
                    <Text style={styles.itemText}>3Ds(PDF)</Text>
                    <View style={styles.itemIconCon}>
                        <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                    </View>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CardItem}>
                <Card style={styles.Item}>
                    <Text style={styles.itemText}>Agreements(PDF)</Text>
                    <View style={styles.itemIconCon}>
                        <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                    </View>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CardItem}>
                <Card style={styles.Item}>
                    <Text style={styles.itemText}>Agreed BOQs(PDF)</Text>
                    <View style={styles.itemIconCon}>
                        <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                    </View>
                </Card>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    con: {
        //marginLeft: 30
        // marginVertical: 30,
        flex: 1,
        // backgroundColor: 'red',
        // alignItems: 'center'
    },
    CardItem: {
        width: '100%',
        // alignSelf: 'center',
        // backgroundColor:'green'
    },
    iconStyle: {
        fontSize: 50,
        color: '#383974',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    Item: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignSelf:'center',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.115,
        // shadowRadius: 3.84,

        // elevation: 2,
        marginVertical: 7,
        justifyContent: 'space-between'
    },
    itemText: {
        marginLeft: 15,
        opacity: 0.5
    },
    itemIconCon: {
        backgroundColor: '#ebeafa',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
    },
    itemIcon: {
        fontSize: 17,
        color: '#393874'
    }
})
