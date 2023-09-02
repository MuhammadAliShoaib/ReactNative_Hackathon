import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../../screens/Home';
import Profile from '../../screens/profile';
import SearchMovie from '../../screens/searchMovie';
import Ticket from '../../screens/ticket';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'black',
                    borderTopWidth: 0,
                    height: 100
                }
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarShowLabel: false,
                tabBarIcon: (({focused}) => {
                    return (<View style={[Style.active, focused ? { backgroundColor: "#F76B0E" } : {}]}>
                        <Icon name="home" color='white' size={30} />
                    </View>)
                })
            }} />
            <Tab.Screen name="Search" component={SearchMovie} options={{
                tabBarShowLabel: false,
                tabBarIcon: (({focused}) => {
                    return (<View style={[Style.active, focused ? { backgroundColor: "#F76B0E" } : {}]}>
                        <Icon name="search" color='white' size={30} />
                    </View>)
                })
            }}/>
            <Tab.Screen name="Ticket" component={Ticket}options={{
                tabBarShowLabel: false,
                tabBarIcon: (({focused}) => {
                    return (<View style={[Style.active, focused ? { backgroundColor: "#F76B0E" } : {}]}>
                        <Icon name="confirmation-number" color='white' size={30} />
                    </View>)
                })
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarShowLabel: false,
                tabBarIcon: (({focused}) => {
                    return (<View style={[Style.active, focused ? { backgroundColor: "#F76B0E" } : {}]}>
                        <Icon name="account-circle" color='white' size={30} />
                    </View>)
                })
            }}/>
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
