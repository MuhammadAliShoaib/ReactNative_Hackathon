import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { TabNavigator } from './tabNavigator';
import MovieDetails from '../../screens/movieDetails';
import Seats from '../../screens/seats';


const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Tab" component={TabNavigator} options={{
                animation:'default'
            }}/>
            <Stack.Screen name="movieDetails" component={MovieDetails} options={{
                animation:'slide_from_left'
            }}/>
            <Stack.Screen name="seats" component={Seats} options={{
                animation:'slide_from_bottom'
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  container: {}
});
