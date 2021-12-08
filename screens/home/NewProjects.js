import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { Card, CardItem } from 'native-base';

const HistoryCard = (props) => (
    <Card style={styles.History_Card}>
        <View style={styles.header}>
            <Text>Project ID: {props.data.itemId}</Text>
            <Text>Started:{props.data.date}</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.headerText}>
                {props.data.title}
            </Text>
            <Text style={styles.bodyText}>
                <Octicons name="location" style={{ fontSize: 13, color: '#383974' }} /> {props.data.description}
            </Text>
        </View>
        <View style={styles.footer}>
            <View style={styles.statusCon}>
                <Text style={styles.Status1Text}>
                    No. of Days
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.Status2Text}>
                        {props.data.noofdays}
                    </Text>
                </View>
            </View>
            <View style={styles.ReplyCon}>
                <Text style={styles.Reply1Text}>
                    Handover Date
                </Text>
                <Text style={styles.Reply2Text}>
                    {props.data.ReplyDate}
                </Text>
            </View>
        </View>
    </Card>
)
// =======
const NewProjects = () => {
    const Data = [
        {
            id: '1',
            itemId: '1234',
            date: '10/5/2021',
            title: 'My Home Bhuja',
            description: "Lorem Ipsum is simply dummy text, consectetur ",
            noofdays: '60',
            ReplyDate: '10/15/2021'
        },
        {
            id: '2',
            itemId: '1234',
            date: '10/5/2021',
            title: 'My Home Bhuja',
            description: "Lorem Ipsum is simply dummy text, consectetur",
            noofdays: '60',
            ReplyDate: '10/15/2021'
        },
        {
            id: '3',
            itemId: '1234',
            date: '10/5/2021',
            title: 'My Home Bhuja',
            description: "Lorem Ipsum is simply dummy text, consectetur",
            noofdays: '60',
            ReplyDate: '10/15/2021'
        },
        {
            id: '4',
            itemId: '1234',
            date: '10/5/2021',
            title: 'My Home Bhuja',
            description: "Lorem Ipsum is simply dummy text, consectetur",
            noofdays: '60',
            ReplyDate: '10/15/2021'
        },
    ];
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
            <FlatList
                data={Data}
                renderItem={({ item }) => <HistoryCard data={item} />}
                keyExtractor={(item, index) => item.id}
                showsVerticalScrollIndicator={false}
                style={{ width: '90%', alignSelf: 'center' }}
                ListFooterComponent={<View style={{ paddingBottom: 50 }} />}
                ListHeaderComponent={ListHeader}
            />
        </View>
    )
}

export default NewProjects

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
        paddingVertical: 5,
        marginTop: 5,
    },
    statusCon: {

    },
    Status1Text: {
        fontWeight: 'bold',
    },
    Status2Text: {
        fontWeight: 'bold',
        color: 'green',
    },
    ReplyCon: {

    },
    Reply1Text: {
        textAlign: 'right',
        fontWeight: 'bold',
    },
    Reply2Text: {
        textAlign: 'right',
        color: '#393874',
        fontSize: 12,
    },
    StatusIcon: {
        marginRight: 5,
        color: 'green'
    },
    // ======================headertop
    headerCon: {
        backgroundColor:'#f5f5fc',
        borderRadius:50,
        alignItems:'center',
        // justifyContent:'space-evenly',
        flexDirection:'row',
        marginVertical: 15,
        paddingHorizontal:10,
        paddingVertical:10
    },
    headerChild: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginRight: 25,
    },
    headerLeftIconCon: {
        width: 40,
        height: 40,
        backgroundColor:'#e9e9ef',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        marginRight: 10,
    },
    HeaderIcon: {
        fontSize:20,
        color: '#393874'
    },
    headerRightCon: {

    },
    headerTopText: {
        fontSize:12
    },
    headerBottomText: {
        fontSize:13,
        color: '#393874'
    },
})
