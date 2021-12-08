import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View, Dimensions, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
import AntDesign from 'react-native-vector-icons/AntDesign'
const UpdatesWeekly = () => {
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
    const ImageCard = (props) => {
        return (
            <TouchableOpacity style={styles.imageContainer}
            //  onPress={() => setImagePreview(!ImagePreview)}
            >
                <Image source={props.data.source}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                    }} />
                {/* <AntDesign name="closecircle" style={styles.imageCloseIcon} /> */}
            </TouchableOpacity>
        )
    }
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
                <View style={styles.updateCon}>
                    <Text style={styles.HeddingText}>Week1 Update</Text>
                    <View style={styles.DW_con}>
                        <View style={styles.DwChildCon}>
                            <Text style={styles.DWC_Hedding}>Date</Text>
                            <Text style={styles.DWC_text}>10/27/21</Text>
                        </View>
                        <View style={styles.DwChildCon}>
                            <Text style={styles.DWC_Hedding}>Work Order Status</Text>
                            <Text style={styles.DWC_text}>Pending</Text>
                        </View>
                    </View>
                    <Text style={styles.subHedding}>Comments</Text>
                    <Text style={styles.Text}>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled</Text>
                    <FlatList
                        horizontal={true}
                        data={images}
                        renderItem={({ item }) => <ImageCard data={item} />}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
                <View style={styles.updateCon}>
                    <Text style={styles.HeddingText}>Week2 Update</Text>
                    <View style={styles.DW_con}>
                        <View style={styles.DwChildCon}>
                            <Text style={styles.DWC_Hedding}>Date</Text>
                            <Text style={styles.DWC_text}>10/27/21</Text>
                        </View>
                        <View style={styles.DwChildCon}>
                            <Text style={styles.DWC_Hedding}>Work Order Status</Text>
                            <Text style={styles.DWC_text}>Pending</Text>
                        </View>
                    </View>
                    <Text style={styles.subHedding}>Comments</Text>
                    <Text style={styles.Text}>Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled</Text>
                    <FlatList
                        horizontal={true}
                        data={images}
                        renderItem={({ item }) => <ImageCard data={item} />}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
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
        paddingHorizontal: '5%'
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
        paddingVertical:8,
        paddingHorizontal:25,
        backgroundColor:'#ece9fb',
        borderRadius:50
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
        paddingVertical:20,
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
