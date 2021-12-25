import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'react-native-fetch-blob'
const ProductWarenty = ({ route, navigation }) => {
    const info = route.params.data;
    console.log('the unique id', info);
    // ==============
    const DownloadHandler = async (val) => {
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                description: ('downloading_file')
                // path: 'image/',
            }
        };
        config(options)
            .fetch('GET', info.document_file)
            .then(res => {
                console.log('The file saved to ', res.path())
            }).catch(function (error) {
                console.log(error);
            });
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={styles.HeddingText}>{info.document_type}</Text>
            <Pdf
                source={{ uri: info.document_file }}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf} />
            <TouchableOpacity style={styles.SubmitBtn} onPress={DownloadHandler}>
                <Text style={styles.SubmitBtnText}>Download</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProductWarenty

const styles = StyleSheet.create({
    con: {
        //marginLeft: 30
        // marginVertical: 30,
        // flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    HeddingText: {
        // marginVertical: 25,
        paddingVertical: 10,
        borderWidth: 0,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    SubmitBtn: {
        paddingVertical: 15,
        backgroundColor: '#393874',
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    SubmitBtnText: {
        fontSize: 15,
        color: '#fff'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})
