import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageViewer from 'react-native-image-zoom-viewer';
import { useState } from 'react';
import { Button } from 'native-base';
function FlatlistTop() {
    return (
        <View style={styles.dateContainer}>
            <AntDesign name="calendar" style={styles.calenderIcon} />
            <Text>1-06-2021</Text>
        </View>
    );
}
const kitchenScreen = ({ navigation }) => {
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
        return (
            <TouchableOpacity style={styles.imageContainer} onPress={() => setImagePreview(!ImagePreview)}>
                <Image source={props.data.source} style={{ width: 165, height: 165, borderRadius: 10, marginTop: 40 }} />
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', }} >
            <FlatList
                numColumns={2}
                data={images}
                renderItem={({ item }) => <ImageCard data={item} />}
                keyExtractor={(item, index) => item.id}
                ListHeaderComponent={FlatlistTop}
                ListFooterComponent={<View style={{ height: 50 }} />}
            />
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

export default kitchenScreen;


const styles = StyleSheet.create({
    imageContainer: {
        width: '45%',
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: '2.5%'
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
