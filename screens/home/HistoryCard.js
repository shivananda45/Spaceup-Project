import React, { } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedbackBase, View } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons'
import { Card } from 'native-base';

export default function HistoryCard(props) {
    // console.log('props', props);
    var date1 = new Date(props.info.start_date);
    var date2 = new Date(props.info.handover_date);
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);
    return (
        <TouchableNativeFeedback onPress={() => props.navigation.navigate("projectDetails",{data:props.info})}>
            <Card style={styles.History_Card}>
                <View style={styles.header}>
                    <Text>Project ID: {props.info.project_id}</Text>
                    <Text>Started:{props.info.start_date}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.headerText}>
                        {props.info.project_name}
                    </Text>
                    <Text style={styles.bodyText}>
                        {props.info.description !== null ?
                            <>
                                <Octicons name="location" style={{ fontSize: 13, color: '#383974' }} /> {props.info.description} </>
                            : null
                        }
                    </Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.statusCon}>
                        <Text style={styles.Status1Text}>
                            No. of Days
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.Status2Text}>
                                {diffDays}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.ReplyCon}>
                        <Text style={styles.Reply1Text}>
                            Handover Date
                        </Text>
                        <Text style={styles.Reply2Text}>
                            {props.info.handover_date}
                        </Text>
                    </View>
                </View>
            </Card>
        </TouchableNativeFeedback>
    )
}

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
})
