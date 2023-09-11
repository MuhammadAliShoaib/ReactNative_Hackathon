import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { TabNavigator } from './tabNavigation';
import AddTask from '../../screens/Add Task/addTask';




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
            <Stack.Screen name="AddTask" component={AddTask} options={{
                animation:'default'
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  container: {}
});
