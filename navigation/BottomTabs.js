import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator();
const PaymentTrackingStack = createStackNavigator();
const ProjectTrackerStack = createStackNavigator();
const LiveStreamingStack = createStackNavigator();
const DocumentsStack = createStackNavigator();
const MaterialsStack = createStackNavigator();
const SupportStack = createStackNavigator();
// -------------
import PaymentTracking from '../screens/PaymentTracking'
import ProjectTracker from '../screens/ProjectTracker'
import LiveStreaming from '../screens/LiveStreaming'
import Documents from '../screens/Documents'
import Materials from '../screens/Materials'
import Support from '../screens/Support'
<<<<<<< Updated upstream
import kitchenScreen from '../screens/ProjectTracker/kitchen';
import DrawingRoom from '../screens/ProjectTracker/DrawingRoom';
import ProjectTrackerRequests from '../screens/ProjectTracker/ProjectTrackerRequests';

=======
import EmiScreen from '../screens/PaymentTracking/emi';
import NeftScreen from '../screens/PaymentTracking/neft';
// -------------
>>>>>>> Stashed changes
const BottomTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f3f3fb',
                showLabel: false,
                activeColor: "#f3f3fb",
                inactiveColor: "#f1f1f1",
                style: {
                    backgroundColor: '#383974',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                },
            }}
        >
            <Tab.Screen name="PaymentTracking" component={PaymentTrackingStackscreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="payment" color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="ProjectTracker" component={ProjectTrackerStackscreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="briefcase-clock-outline" color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="LiveStreaming" component={LiveStreamingStackscreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name='tap-and-play' color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="Documents" component={DocumentsStackscreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="text-document" color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="Materials" component={MaterialsStackscreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="box" color={color} style={styles.iconStyle} />
                    )
                }}
            />
            <Tab.Screen name="Support" component={SupportStackscreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="headset" color={color} style={styles.iconStyle} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
// ======================================================below stack screens 
const PaymentTrackingStackscreen = ({ navigation }) => (
    <PaymentTrackingStack.Navigator>
        <PaymentTrackingStack.Screen name='PaymentTracking' component={PaymentTracking}
            options={{
                title: 'Payment Tracking',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500'
                },
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                },
                headerRight: () => (
                    <TouchableOpacity style={styles.HlpBtn}>
                        <Feather name="info" style={styles.HlpIcon} />
                        <Text style={styles.helpText}>Help</Text>
                    </TouchableOpacity>
                )
            }}
        />
        <PaymentTrackingStack.Screen name='Emi' component={EmiScreen}
            options={{
                title: 'Payment Tracking',
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                },
                headerRight: () => (
                    <TouchableOpacity style={styles.HlpBtn}>
                        <Feather name="info" style={styles.HlpIcon} />
                        <Text>help</Text>
                    </TouchableOpacity>
                )
            }}
        />
        <PaymentTrackingStack.Screen name='Neft' component={NeftScreen}
            options={{
                title: 'NEFT',
                headerShown: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                }
            }}
        />
    </PaymentTrackingStack.Navigator>
);
const ProjectTrackerStackscreen = ({ navigation }) => (
    <ProjectTrackerStack.Navigator>
        <ProjectTrackerStack.Screen name='ProjectTracker' component={ProjectTracker}
            options={{
                title: 'Project Tracker',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500'
                },
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                },
<<<<<<< Updated upstream
                headerRight: () => (
                    <TouchableOpacity style={styles.HlpBtn}>
                        <Feather name="info" style={styles.HlpIcon} />
                        <Text  style={styles.helpText}>Help</Text>
                    </TouchableOpacity>
                )
=======
>>>>>>> Stashed changes
            }}
        />
         <ProjectTrackerStack.Screen name='Kitchen' component={kitchenScreen}
            options={{
                title: 'Kitchen',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500'
                },
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                },
            }}
        />
          <ProjectTrackerStack.Screen name='DrawingRoom' component={DrawingRoom}
            options={{
                title: 'DrawingRoom',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500'
                },
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                },
            }}
        />
         <ProjectTrackerStack.Screen name='ProjectRequests' component={ProjectTrackerRequests}
            options={{
                title: 'Drawing Room',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500'
                },
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                },
            }}
        />
    </ProjectTrackerStack.Navigator>
    
);
const LiveStreamingStackscreen = ({ navigation }) => (
    <LiveStreamingStack.Navigator>
        <LiveStreamingStack.Screen name='LiveStreaming' component={LiveStreaming}
            options={{
                title: 'Live Streaming',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500'
                },
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                },
                headerRight: () => (
                    <TouchableOpacity style={styles.HlpBtn}>
                        <Feather name="info" style={styles.HlpIcon} />
                        <Text style={styles.helpText}>Help</Text>
                    </TouchableOpacity>
                )
            }}
        />
    </LiveStreamingStack.Navigator>
);
const DocumentsStackscreen = ({ navigation }) => (
    <DocumentsStack.Navigator>
        <DocumentsStack.Screen name='Documents' component={Documents}
            options={{
                title: 'Documents',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500'
                },
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                },
                // headerRight: () => (
                //     <Text>help</Text>
                // )
            }}
        />
    </DocumentsStack.Navigator>
);
const MaterialsStackscreen = ({ navigation }) => (
    <MaterialsStack.Navigator>
        <MaterialsStack.Screen name='Materials' component={Materials}
            options={{
                title: 'Materials',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500'
                },
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                },
                // headerRight: () => (
                //     <Text>help</Text>
                // )
            }}
        />
    </MaterialsStack.Navigator>
);
const SupportStackscreen = ({ navigation }) => (
    <SupportStack.Navigator>
        <SupportStack.Screen name='Support' component={Support}
            options={{
                title: 'Support',
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontWeight: '500'
                },
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1
                },
                // headerRight: () => (
                //     <Text>help</Text>
                // )
            }}
        />
    </SupportStack.Navigator>
);
export default BottomTabs;

const styles = StyleSheet.create({
    TabBar: {
        backgroundColor: 'red'
    },
    iconStyle: {
        // color: '#383974',
        fontSize: 28,
        //marginBottom: 10,
    },
    HlpBtn: {
        flexDirection:'row',
        alignItems:'center',
        marginRight:18,
    },
    HlpIcon: {
        // color: '#ccc',
        marginRight:5,
        fontSize: 18
    },
    helpText: {
        fontWeight: '600'
    }
})
