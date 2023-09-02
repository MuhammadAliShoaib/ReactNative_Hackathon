import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { TabNavigator } from './tabNavigation';
import Signup from '../../screens/signup';
import Login from '../../screens/login';




const Stack = createNativeStackNavigator();

const FormNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Signup" component={Signup} options={{
                animation:'default'
            }}/>
            <Stack.Screen name="Login" component={Login} options={{
                animation:'default'
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FormNavigation;

const styles = StyleSheet.create({
  container: {}
});
