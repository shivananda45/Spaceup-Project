import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HistoryCard = (props) => (
    <View style={styles.History_Card}>
        <View style={styles.header}>
            <Text>ID: {props.data.itemId}</Text>
            <Text>Raised On:{props.data.date}</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.headerText}>
                {props.data.title}
            </Text>
            <Text style={styles.bodyText}>
                {props.data.description}
            </Text>
        </View>
        <View style={styles.footer}>
            <View style={styles.statusCon}>
                <Text style={styles.Status1Text}>
                    Status
                </Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialIcons name="done" style={styles.StatusIcon} />
                <Text style={styles.Status2Text}>
                    {props.data.status}
                </Text>
                </View>
            </View>
            <View style={styles.ReplyCon}>
                <Text style={styles.Reply1Text}>
                    Replied on Date
                </Text>
                <Text style={styles.Reply2Text}>
                    {props.data.ReplyDate}
                </Text>
            </View>
        </View>
    </View>
)
// =======
const RequestHistory = () => {
    const Data = [
        {
            id: '1',
            itemId: '1234',
            date: '10/5/2021',
            title: 'Customer Message',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            status: 'Completed',
            ReplyDate: '10/15/2021'
        },
        {
            id: '2',
            itemId: '1234',
            date: '10/5/2021',
            title: 'Customer Message',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            status: 'Completed',
            ReplyDate: '10/15/2021'
        },
        {
            id: '3',
            itemId: '1234',
            date: '10/5/2021',
            title: 'Customer Message',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
            status: 'Completed',
            ReplyDate: '10/15/2021'
        },
    ];
    return (
        <View style={{ width: '100%', alignSelf: 'center', backgroundColor: 'white',height: '100%'}}>
            <FlatList
                data={Data}
                renderItem={({ item }) => <HistoryCard data={item} />}
                keyExtractor={(item, index) => item.id}
                showsVerticalScrollIndicator={false}
                style={{paddingBottom:20,width: '90%',alignSelf:'center'}}
            />
        </View>
    )
}

export default RequestHistory

const styles = StyleSheet.create({
    History_Card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,

        elevation: 2,
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
    StatusIcon:{
        marginRight:5,
        color: 'green'
    }
})
