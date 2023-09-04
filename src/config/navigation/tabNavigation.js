import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import Add from '../../screens/add';


const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    height: 100
                }
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarShowLabel: false,
                tabBarIcon: () => <Icon name="home" color='#756ef3' size={30} />
            }} />
            <Tab.Screen name="Project" component={Home} options={{
                tabBarShowLabel: false,
                tabBarIcon: () => <Icon name="folder" color='#756ef3' size={30} />
            }} />
            <Tab.Screen name="Add" component={Add} options={{
                tabBarShowLabel: false,
                tabBarIcon: () => <Icon name="add" color='#756ef3' size={30} />
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarShowLabel: false,
                tabBarIcon: () => <Icon name="account-circle" color='#756ef3' size={30} />
            }} />
        </Tab.Navigator>
    );
}

const Style = StyleSheet.create({
    active: {
        backgroundColor: 'black',
        padding: 13,
        borderRadius: 180
    }
})
