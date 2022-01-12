import React, { useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableOpacityBase,
    View, Dimensions, Image, Modal
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
import AntDesign from 'react-native-vector-icons/AntDesign'
import ImagePicker from 'react-native-image-crop-picker';
import { BottomSheet } from 'react-native-btr';
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
const UploadImages = ({ route, navigation }) => {
    const info = route.params.data;
    console.log('upload images', info);
    const [imageUrl, setImageUrl] = useState(null)
    const [imageUrls, setImageUrls] = useState([])
    const [imagesError, setImagesError] = useState('')
    const [maxImages, setmaxImages] = useState(0)
    const [visible, setvisible] = useState(false);
    const [Data, setData] = useState([])
    const [ResponseData, setResponseData] = useState([])
    const [ErrorsFound, setErrorsFound] = useState(false)
    // ====
    const [Comment, setComment] = useState('')
    const [DataFound, setDataFound] = useState(false)
    const [SelectedRoomType, setSelectedRoomType] = useState(null)
    const [SelectedRoomTypeId, setSelectedRoomTypeId] = useState(null)
    // ==
    const [modalVisible, setModalVisible] = useState(false);
    // ====errors
    const [managerIdError, setmanagerIdError] = useState(null)
    const [ProjectIdError, setProjectIdError] = useState(null)
    const [weekError, setweekError] = useState(null)
    const [roomTypeError, setroomTypeError] = useState(null)
    const [commentError, setcommentError] = useState(null)
    useEffect(() => {
        FetchData()
    }, [])
    const FetchData = async () => {
        let userId = ''; let accessToken = '';
        userId = await AsyncStorage.getItem('userId');
        accessToken = await AsyncStorage.getItem('accessToken');
        var InsertAPIURL = 'https://spaceup.co.in/api/v1/sitemanager/get-room-type';
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + String(accessToken),
        };

        var Data = {
            manager_id: userId
        };
        fetch(InsertAPIURL,
            {
                method: 'GET',
                headers: headers,
                // body: JSON.stringify(Data)
            }
        )
            .then((response) => response.json())
            .then((RES) => {
                setData(RES)
                setDataFound(true)
                // console.log('room types list' + JSON.stringify(RES));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // ==================
    const [imageUrlVerification, setImageUrlVerification] = useState(false)
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
    const TakePhotoFromGallery = async () => {
        let imageList = [];
        ImagePicker.openPicker({
            multiple: true,
            mediaType: 'photo',
            compressImageQuality: 0.9,
            // width: 400,
            // height: 400,
            // maxFiles: 2
            // cropping: true,
            // forceJpg:true,
            // includeBase64: true
        }).then(response => {
            setImageUrl(response)
            console.log('images got', response);
            response.map(image => {
                imageList.push({
                    name: 'image',
                    'filename': moment().format() + '.png',
                    'data': RNFetchBlob.wrap(image.path),
                    'type': image.mime,
                    'path': image.path,
                });
            });
            setImageUrls(imageList)
        }).catch(function (error) {
            alert('the error', error);
        });
    }
    // ==============
    const RemoveThisImage = (path) => {
        const filteredData = imageUrls.filter(item => item.path !== path)
        setImageUrls(filteredData);
        // console.log('removed', imageUrl);
    }
    //   ==============
    const ImageCard = (props) => {
        // console.log(props.data.path);
        return (
            <TouchableOpacity style={styles.imageContainer}
                onPress={() => RemoveThisImage(
                    // props.data.path
                    // props.data.assets.uri
                    props.data.path
                )}
            >
                <Image source={{ uri: props.data.path }}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 10,
                    }} />
                <AntDesign name="closecircle" style={styles.imageCloseIcon} />
            </TouchableOpacity>
        )
    }
    // ==================
    const RoomTypeCard = (props) => {
        return (
            <TouchableOpacity style={styles.roomType_con} onPress={() => {
                setSelectedRoomType(props.info.room_type),
                    setSelectedRoomTypeId(props.info.room_id),
                    setvisible(!visible)
            }}>
                <Text style={styles.roomType_text}>{props.info.room_type}</Text>
            </TouchableOpacity>
        )
    }
    // =================
    const onSubmitForm = async () => {
        console.log('the images data', imageUrls);
        if (imageUrl !== null) {
            if (imageUrl.length >= 1 && imageUrl.length < 5) {
                let userId = ''; let accessToken = '';
                userId = await AsyncStorage.getItem('userId');
                accessToken = await AsyncStorage.getItem('accessToken');
                let ImagesListIs = [];
                ImagesListIs = imageUrls;
                RNFetchBlob.fetch('POST', 'https://spaceup.co.in/api/v1/sitemanager/upload-weekly-update', {
                    'Authorization': 'Bearer ' + String(accessToken),
                    otherHeader: "foo",
                    'Content-Type': 'multipart/form-data',
                },
                    // JSON.stringify({
                    //         manager_id: info.managerId,
                    //         project_id: info.projectID,
                    //         week: info.WeekId,
                    //         room_type: SelectedRoomTypeId,
                    //         comment: Comment,
                    //         images: imageUrls
                    //     })
                    // )
                    [
                        {
                            name: 'images',
                            data: imageUrls
                        },
                        JSON.stringify({
                            manager_id: info.user_id,
                            project_id: info.project_id,
                            week: info.WeekId,
                            room_type: SelectedRoomTypeId,
                            comment: Comment,
                            // images: imageUrls
                        })
                    ])
                    // .uploadProgress((currentCount, totalCount) => {
                    //     console.log(currentCount / totalCount)
                    // })
                    .then((response) => response.json())
                    .then((RES) => {
                        console.log('yes', JSON.stringify(RES))
                        setResponseData(RES)
                        if (RES.status !== true) {
                            setErrorsFound(true)
                            setModalVisible(true)
                            if (RES.errors.manager_id) {
                                setmanagerIdError(RES.errors.manager_id)
                            }
                            else {
                                setmanagerIdError(null)
                            }
                            if (RES.errors.project_id) {
                                setProjectIdError(RES.errors.project_id)
                            }
                            else {
                                setProjectIdError(null)
                            }
                            if (RES.errors.week) {
                                setweekError(RES.errors.week)
                            }
                            else {
                                setweekError(null)
                            }
                            if (RES.errors.room_type) {
                                setroomTypeError(RES.errors.room_type)
                            }
                            else {
                                setroomTypeError(null)
                            }
                            if (RES.errors.comment) {
                                setcommentError(RES.errors.comment)
                            }
                            else {
                                setcommentError(null)
                            }
                        }
                        else {
                            setErrorsFound(false)
                            setModalVisible(true)
                            setComment('')
                            // setTimeout(() => {
                            //     navigation.navigate('home')
                            // }, 3000);
                        }
                        setErrorsData(RES.errors)
                        setErrorsFound(true)
                        console.log('upload status' + JSON.stringify(RES.errors.manager_id[0]));
                    })
                    .catch(function (error) {
                        alert('the api error' + error);
                    });
            }
            else {
                setImagesError('Please select Min 1 and Max 4 images')
            }
        }
        else {
            setImagesError('Please select Min 1 and Max 4 images')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MaterialCommunityIcons name="briefcase-clock-outline" style={styles.iconStyle} />
                <View style={styles.headingCon}>
                    <Text style={styles.headingActiveText}>Weekly Update</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('updateswekly', { data: info })}>
                        <Text style={styles.headingInActiveText}>History</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.SRT_btn} onPress={() => setvisible(!visible)}>
                    <Text style={styles.SRT_text}>{SelectedRoomType !== null ? SelectedRoomType : 'Select Room Type'}</Text>
                </TouchableOpacity>
                <View style={{ paddingHorizontal: '6%' }}>
                    <Text style={styles.LablelText}>Add Comments</Text>
                    <TextInput
                        placeholder="Enter Comments..."
                        style={styles.InputStyle}
                        onChangeText={val => setComment(val)}
                        defaultValue={Comment}
                    />
                    <FlatList
                        // numColumns={2}
                        horizontal={true}
                        data={imageUrls !== null ? imageUrls : images}
                        renderItem={({ item }) => <ImageCard data={item} />}
                        keyExtractor={(item, index) => index}
                    // ListFooterComponent={FooterContainer}
                    // ListHeaderComponent={HeaderContainer}
                    />
                    <TouchableOpacity style={styles.OutLineBtn} onPress={TakePhotoFromGallery}>
                        <Feather name="image" style={styles.ButtonIcon} />
                        <Text style={styles.OutLineBtnText}>Upload Images</Text>
                        <Text style={styles.SmallText}></Text>
                    </TouchableOpacity>
                    <Text style={[styles.SmallText, { color: 'red' }]}>{imagesError}</Text>
                    <TouchableOpacity style={styles.SubmitBtn}
                        onPress={() => onSubmitForm()}
                    >
                        <Text style={styles.SubmitBtnText}>SEND</Text>
                    </TouchableOpacity>
                </View>
                <BottomSheet
                    visible={visible}
                    onBackButtonPress={() => setvisible(false)}
                    onBackdropPress={() => setvisible(false)}
                >
                    {/*Bottom Sheet inner View*/}
                    <View style={styles.bottomNavigationView}>
                        {
                            DataFound ?
                                Data.status && Data.message !== 'Unauthenticated.' ?
                                    <>
                                        <Text style={{ color: '#333', fontSize: 18, paddingLeft: 20, paddingBottom: 10, }}>Select Room Type</Text>
                                        <FlatList
                                            key={'upload_images'}
                                            data={Data.data}
                                            renderItem={({ item }) => <RoomTypeCard info={item} />}
                                            keyExtractor={(item, index) => item.room_id}
                                            showsVerticalScrollIndicator={false}
                                            style={{ width: '90%', alignSelf: 'center' }}
                                            ListFooterComponent={<View style={{ paddingBottom: 0 }} />}
                                        // ListHeaderComponent={ListHeader}
                                        />
                                    </>
                                    :
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text>{Data.message}</Text>
                                    </View>
                                : null
                        }
                    </View>
                </BottomSheet>
                {/* ============== */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {
                                ErrorsFound ?
                                    <>
                                        <Text style={styles.modalText}>
                                            {ResponseData.errors}
                                        </Text>
                                        {
                                            managerIdError !== null ?
                                                <Text style={styles.modalText}>
                                                    {managerIdError}
                                                </Text>
                                                : null
                                        }
                                        {
                                            ProjectIdError !== null ?
                                                <Text style={styles.modalText}>
                                                    {ProjectIdError}
                                                </Text>
                                                : null
                                        }
                                        {
                                            weekError !== null ?
                                                <Text style={styles.modalText}>
                                                    {weekError}
                                                </Text>
                                                : null
                                        }
                                        {
                                            roomTypeError !== null ?
                                                <Text style={styles.modalText}>
                                                    {roomTypeError}
                                                </Text>
                                                : null
                                        }
                                        {
                                            commentError !== null ?
                                                <Text style={styles.modalText}>
                                                    {commentError}
                                                </Text>
                                                : null
                                        }
                                    </>
                                    :
                                    <View style={{ backgroundColor: 'red' }}>
                                        <Text>Success:{ResponseData.message}</Text>
                                    </View>
                            }
                        </View>
                    </View>
                </Modal>
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
        color: '#333',
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
    bottomNavigationView: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: DeviceHeight * 85 / 100,
        paddingTop: 20
    },
    roomType_con: {
        paddingVertical: 15,
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 0.5,

    },
    roomType_text: {

    },
    SRT_btn: {
        width: '80%',
        alignSelf: 'center',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#383974',
        borderRadius: 25,
        borderWidth: 1
    },
    SRT_text: {
        color: '#333'
    },
    // ========================modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        // margin: 20,
        width: '90%',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'red'
    },
    modalHeddingText: {
        color: '#333',
        fontSize: 22,
        textAlign: 'center'
    }
})
