import React from 'react'
import { StyleSheet, Text, View ,Dimensions,Image,TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
const ProductWarenty = () => {
    return (
        <SafeAreaView style={{flex: 1,backgroundColor:'white'}}>
            <ScrollView>
        <View style={styles.con}>
            <Text style={styles.HeddingText}>Plywood</Text>
            <Image 
            source={require('../../assets/images/text.png')}
            style={{width:Devicewidth*80/100,height:Deviceheight*100/100,borderWidth:0}}
            />
            <View 
            style={{height:1,width:'75%',backgroundColor:'#393874',marginBottom:50}}
            />
            <TouchableOpacity style={styles.SubmitBtn}>
                <Text style={styles.SubmitBtnText}>Download</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
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
        alignItems:'center'
    },
    HeddingText:{
        marginVertical:25,
        borderWidth:0,
        fontWeight:'bold',
        fontSize:20
    },
    SubmitBtn: {
        paddingVertical:15,
        backgroundColor:'#393874',
        marginBottom:20,
        marginTop:35,
        alignItems:'center',
        width: '90%'
    },
    SubmitBtnText: {
        fontSize:15,
        color: '#fff'
    },
})
