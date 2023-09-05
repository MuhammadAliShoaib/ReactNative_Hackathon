import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import Add from '../../screens/add';
import Chat from '../../screens/chat';


const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 0,
                    height: 100
                }
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => <Icon name="home" color={focused ? "#756ef3" : '#000'} size={30} />
            }} />
            <Tab.Screen name="Project" component={Home} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => <Icon name="folder" color={focused ? "#756ef3" : '#000'} size={30} />
            }} />
            <Tab.Screen name="Add" component={Add} options={{
                tabBarShowLabel: false,
                tabBarIcon: () =>
                    <View style={Style.circle}>
                        <Icon name="add" color='#fff' size={30} />
                    </View>
            }} />
            <Tab.Screen name="Chat" component={Chat} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => <Icon name="chat" color={focused ? "#756ef3" : '#000'} size={30} />

            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => <Icon name="account-circle" color={focused ? "#756ef3" : '#000'} size={30} />

            }} />
        </Tab.Navigator>
    );
}

const Style = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        borderRadius: 40,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#756ef3",
        marginBottom: 20
    },
})
