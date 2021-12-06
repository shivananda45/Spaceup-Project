import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, CardItem } from 'native-base';
export default function Documents({navigation}) {
    return (
        <View style={styles.con}>
            <Entypo name="text-document" style={styles.iconStyle} />
            <TouchableOpacity>
            <Card style={styles.Item}>
                <Text style={styles.itemText}>Final Drawing(PDF)</Text>
                <View style={styles.itemIconCon}>
                    <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                </View>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Item}>
                <Text style={styles.itemText}>3Ds(PDF)</Text>
                <View style={styles.itemIconCon}>
                    <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Item}>
                <Text style={styles.itemText}>Agreements(PDF)</Text>
                <View style={styles.itemIconCon}>
                    <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Item}>
                <Text style={styles.itemText}>Agreed BOQs(PDF)</Text>
                <View style={styles.itemIconCon}>
                    <Ionicons name="ios-document-outline" style={styles.itemIcon} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    con: {
        //marginLeft: 30
        // marginVertical: 30,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    iconStyle: {
        fontSize: 50,
        color: '#383974',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    Item: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.115,
        shadowRadius: 3.84,

        elevation: 2,
        marginVertical: 7,
        justifyContent: 'space-between'
    },
    itemText: {
        marginLeft:15,
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
