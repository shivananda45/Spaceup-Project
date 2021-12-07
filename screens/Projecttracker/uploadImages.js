import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View ,Dimensions,Image} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
import AntDesign from 'react-native-vector-icons/AntDesign'
const UploadImages = ({navigation}) => {
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
                <AntDesign name="closecircle" style={styles.imageCloseIcon} />
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MaterialCommunityIcons name="briefcase-clock-outline" style={styles.iconStyle} />
                <View style={styles.headingCon}>
                    <Text style={styles.headingActiveText}>Weekly Update</Text>
                    <Text style={styles.headingInActiveText}>History</Text>
                </View>
                <Text style={styles.LablelText}>Add Comments</Text>
                <TextInput
                    placeholder="Enter Comments..."
                    style={styles.InputStyle}
                />
                <FlatList
                    // numColumns={2}
                    horizontal={true}
                    data={images}
                    renderItem={({ item }) => <ImageCard data={item} />}
                    keyExtractor={(item, index) => item.id}
                    // ListFooterComponent={FooterContainer}
                    // ListHeaderComponent={HeaderContainer}
                />
                <TouchableOpacity style={styles.OutLineBtn}>
                    <Feather name="image" style={styles.ButtonIcon} />
                    <Text style={styles.OutLineBtnText}>Upload Images</Text>
                    <Text style={styles.SmallText}>(4 Images)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SubmitBtn}
                 onPress={()=>navigation.navigate('home')}
                >
                    <Text style={styles.SubmitBtnText}>SEND</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UploadImages

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
        marginBottom: 50,
    },
    headingActiveText: {
        fontSize: 16,
        color: '#393874',
        fontWeight: 'bold'
    },
    headingInActiveText: {
        fontSize: 16,
        color: '#b3b3cc',
        fontWeight: 'bold'
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
    imageCloseIcon:{
        position: 'absolute',
        top: 5,
        right: 5,
        color: 'white',
        fontSize:18
    }
})
