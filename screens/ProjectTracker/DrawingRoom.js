import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper'
function FlatlistTop() {
    return (
        <View style={styles.dateContainer}>
            <AntDesign name="calendar" style={styles.calenderIcon} />
            <Text>1-06-2021</Text>
        </View>
    );
}
const DrawingRoomScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [CurrentImage, setCurrentImage] = useState(null);
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
        {
            id: '5',
            source: require('../../assets/images/kitchen4.png'),
        },
        {
            id: '6',
            source: require('../../assets/images/kitchen5.png'),
        }
    ]

    const ImageCard = (props) => {
        return (
            <TouchableOpacity style={styles.imageContainer} onPress={() => { setCurrentImage(props.data.source), setModalVisible(true) }}>
                <Image source={props.data.source} style={{ width: 165, height: 165, borderRadius: 10, marginTop: 40 }} />
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }} >
            <FlatList
                numColumns={2}
                data={images}
                renderItem={({ item }) => <ImageCard data={item} />}
                keyExtractor={(item, index) => item.id}
                ListHeaderComponent={FlatlistTop}
                ListFooterComponent={<View style={{ height: 50 }} />}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.buttonClose} onPress={() => setModalVisible(false)}>
                            <AntDesign name="close" style={{ color: 'gray', fontSize: 25 }} />
                        </TouchableOpacity>
                        <Swiper
                            style={styles.wrapper}
                            showsButtons={true}
                            index={0}
                        >
                            {
                                CurrentImage !== null
                                    ?
                                    <View style={styles.ImageCon}>
                                        <Image
                                            source={CurrentImage}
                                            style={styles.ImageStyle}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    :
                                    null
                            }
                            <View style={styles.ImageCon}>
                                <Image
                                    source={require('../../assets/images/kitchen1.png')}
                                    style={styles.ImageStyle}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.ImageCon}>
                                <Image
                                    source={
                                        require('../../assets/images/kitchen2.png')}
                                    style={styles.ImageStyle}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.ImageCon}>
                                <Image
                                    source={
                                        require('../../assets/images/kitchen6.png')}
                                    style={styles.ImageStyle}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.ImageCon}>
                                <Image
                                    source={
                                        require('../../assets/images/kitchen3.png')}
                                    style={styles.ImageStyle}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.ImageCon}>
                                <Image
                                    source={
                                        require('../../assets/images/kitchen4.png')}
                                    style={styles.ImageStyle}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={styles.ImageCon}>
                                <Image
                                    source={require('../../assets/images/kitchen5.png')}
                                    style={styles.ImageStyle}
                                    resizeMode="contain"
                                />
                            </View>
                            {/* {
                                images.map((img, index) => (
                                    <View style={styles.ImageCon} key={img.id}>
                                        <Image
                                            source={img.source}
                                            style={styles.ImageStyle}
                                            resizeMode="contain"
                                        />
                                        <Text>{img.source}</Text>
                                    </View>
                                ))
                            } */}
                        </Swiper>
                    </View>
                </View>
            </Modal>
        </View>

    )
}
export default DrawingRoomScreen;


const styles = StyleSheet.create({
    wrapper: {

    },
    ImageCon: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    ImageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    imageContainer: {
        width: '45%',
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: '2.5%',
        // marginVertical: 10
    },
    dateContainer: {
        width: '100%',
        flexDirection: 'row',
        //justifyContent: 'flex-start',
        //paddingHorizontal: 160,
        paddingVertical: 12,
        backgroundColor: '#ebeafa'
    },
    calenderIcon: {
        fontSize: 16,
        marginHorizontal: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
    modalView: {
        // margin: 20,
        height: '40%',
        width: '85%',
        // backgroundColor: "white",
        borderRadius: 10,
        // padding: 35,
        alignItems: "center",
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        // backgroundColor: "#2196F3",
        position: 'absolute',
        right: 0,
        top: -30,
    },
})

