import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageViewer from 'react-native-image-zoom-viewer';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button } from 'native-base';
function FlatlistTop() {
    return (
        <View style={styles.dateContainer}>
            <AntDesign name="calendar" style={styles.calenderIcon} />
            <Text>1-06-2021</Text>
        </View>
    );
}
const PhotosGalleryScreen = ({ route, navigation }) => {
    const info = route.params.data;
    console.log('the unique id', info);
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
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/enduser/get-project-week-list-details';
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(accessToken),
        };

        var Data = {
            user_id: userId,
            unique_id: info.unique_id
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
                // console.log('images lios', JSON.stringify(RES));
                // console.log('images lios', JSON.stringify(RES.data.pictures));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // ==============
    const [ImagePreview, setImagePreview] = useState(false)
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
    const PreviewImages = [
        //     {
        //     // Simplest usage.
        //     url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

        //     // width: number
        //     // height: number
        //     // Optional, if you know the image size, you can set the optimization performance

        //     // You can pass props to <Image />.
        //     props: {
        //         // headers: ...
        //     }
        // },
        {
            url: '',
            props: {
                // Or you can set source directory.
                source: require('../../assets/images/kitchen1.png'),
                source: require('../../assets/images/kitchen2.png'),
                source: require('../../assets/images/kitchen6.png'),
                source: require('../../assets/images/kitchen3.png'),
                source: require('../../assets/images/kitchen4.png'),
                source: require('../../assets/images/kitchen5.png'),
            }
        }]
    const ImageCard = (props) => {
        console.log('image uri',props.info);
        return (
            <TouchableOpacity style={styles.imageContainer} onPress={() => setImagePreview(!ImagePreview)}>
                <Image source={{ uri: props.info }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 10,
                        marginTop: 40, backgroundColor: 'red',
                    }} />
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', }} >
            {
                DataFound ?
                    Data.status && Data.message !== 'Unauthenticated.' ?
                        <FlatList
                            numColumns={2}
                            data={Data.data.pictures}
                            renderItem={({ item }) => <ImageCard info={item} />}
                            keyExtractor={(item, index) => index}
                            ListHeaderComponent={FlatlistTop}
                            ListFooterComponent={<View style={{ height: 50 }} />}
                            style={{ width: '100%',backgroundColor:'white' }}
                        />
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>{Data.message}</Text>
                        </View>
                    :
                    null
            }

            <Modal visible={ImagePreview} transparent={true}
                onRequestClose={() => setImagePreview(!ImagePreview)}
            >
                <ImageViewer imageUrls={PreviewImages} backgroundColor="rgba(255,255,255,0.7)"
                    renderHeader={() => (
                        <Button transparent style={styles.modalClose}>
                            <AntDesign name="close" style={styles.modalCloseIcon} />
                        </Button>
                    )
                    }
                />
            </Modal>
        </View>

    )
}

export default PhotosGalleryScreen;


const styles = StyleSheet.create({
    imageContainer: {
        width: 500,
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: 'red',
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
    modalClose: {

    },
    modalCloseIcon: {
        fontSize: 25
    },
})
