import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const kitchenScreen = ({navigation}) => {
    const images = [
        {
            id: '1',
            source:require('../../assets/images/kitchen1.png'),
        },
        {
            id: '2',
            source:require('../../assets/images/kitchen2.png'),
        },
        {
            id: '3',
            source:require('../../assets/images/kitchen6.png'),
        },
        {
            id: '4',
            source:require('../../assets/images/kitchen3.png'),
        },
        {
            id: '5',
            source:require('../../assets/images/kitchen4.png'),
        },
        {
            id: '6',
            source:require('../../assets/images/kitchen5.png'),
        }
    ]

    const ImageCard = (props) => {
        return (
        <View style={styles.imageContainer}>
            <Image source={props.data.source} style={{width: 165, height: 165, borderRadius: 10, marginTop: 40}} />
            {/* <Text>{props.data.url}</Text> */}
        </View>
        )}
    return (
        <View style={{flex: 1, alignItems: 'center',}} >
            <View style={styles.dateContainer} >
                <AntDesign name="calendar" style={styles.calenderIcon} />
                <Text>1-06-2021</Text>
            </View>
        <FlatList 
        numColumns={2}
        data={images}
        renderItem={({ item }) => <ImageCard data={item} />}
        keyExtractor={(item, index) => item.id}       
       />
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
})
