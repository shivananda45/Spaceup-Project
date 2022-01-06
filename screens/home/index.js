import React from 'react'
import { StyleSheet ,Image,View,TouchableOpacity} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import NewProjects from './NewProjects';
import OnGoingProjects from './onGoingProjects';
import { Container, Header, Left, Body, Right } from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
const HomeScreen = ({ navigation }) => {
    const LogOut = async () => {
        await AsyncStorage.removeItem('userId');
        await AsyncStorage.removeItem('username');
        await AsyncStorage.removeItem('phone');
        await AsyncStorage.removeItem('password');
        await AsyncStorage.removeItem('accessToken');
        try {
            navigation.navigate('login')
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <Container>
            <Header 
            backgroundColor="#fff"
            androidStatusBarColor="#393874"
            transparent
            >
                <Left>
                    <Image source={require('../../assets/images/logo.png')} style={{ width: 115, height: 25, marginLeft: 10, }} />
                </Left>
                <Body />
                <Right>
                    <View style={{ marginRight: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <EvilIcons name="bell" style={{ color: '#393874', fontSize: 32, marginRight: 10, }} />
                        <TouchableOpacity onPress={
                            () => LogOut()
                        }
                        >
                            <Ionicons name="power" style={{ color: '#393874', fontSize: 24, marginRight: 10, }} />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#eaeaf9', borderRadius: 50, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name="user" style={{ color: '#393874', fontSize: 18 }} />
                        </View>
                    </View>
                </Right>
            </Header>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
                    tabBarStyle: { backgroundColor: '#393874', shadowOpacity: 0, elevation: 0 },
                    tabBarIndicatorStyle: { backgroundColor: 'white' }
                }}
            >
                <Tab.Screen name="NewProjects" component={NewProjects}
                    name="New Projects"
                />
                <Tab.Screen name="OnGoingProjects" component={OnGoingProjects}
                    name="On-Going Projects"
                />
            </Tab.Navigator>
        </Container>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

})
