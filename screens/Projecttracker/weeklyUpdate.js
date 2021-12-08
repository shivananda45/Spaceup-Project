import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const WeeklyUpdate = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MaterialCommunityIcons name="briefcase-clock-outline" style={styles.iconStyle} />
                <View style={styles.headingCon}>
                    <Text style={styles.headingActiveText}>Weekly Update</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('updateswekly')}>
                    <Text style={styles.headingInActiveText}>History</Text>
                        </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal:'6%'}}>
                <Text style={styles.LablelText}>Add Comments</Text>
                <TextInput
                    placeholder="Enter Comments..."
                    style={styles.InputStyle}
                />
                <TouchableOpacity style={styles.OutLineBtn}  onPress={()=>navigation.navigate('uploadimages')}>
                    <Feather name="image" style={styles.ButtonIcon} />
                    <Text style={styles.OutLineBtnText}>Upload Images</Text>
                    <Text style={styles.SmallText}>(4 Images)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OutLineBtn}  onPress={()=>navigation.navigate('uploadimages')}>
                    <Feather name="image" style={styles.ButtonIcon} />
                    <Text style={styles.OutLineBtnText}>Upload Images</Text>
                    <Text style={styles.SmallText}>(4 Images)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OutLineBtn}  onPress={()=>navigation.navigate('uploadimages')}>
                    <Feather name="image" style={styles.ButtonIcon} />
                    <Text style={styles.OutLineBtnText}>Upload Images</Text>
                    <Text style={styles.SmallText}>(4 Images)</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WeeklyUpdate

const styles = StyleSheet.create({
    container: {
        //marginLeft: 30
        // marginVertical: 30,
        flex: 1,
        backgroundColor: 'white',
        //paddingHorizontal: '5%'
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
        marginBottom: 50,
    },
    headingActiveText: {
        fontSize: 16,
        color: '#393874',
        fontWeight:'bold'
    },
    headingInActiveText: {
        fontSize: 16,
        color: '#b3b3cc',
        fontWeight:'bold'
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
        // marginTop: 35,
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
    }
})
