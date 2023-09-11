import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './tabNavigation';
import Signup from '../../screens/signup';
import Login from '../../screens/login';
import Splash from '../../screens/intro/splash';
import Intro1 from '../../screens/intro/intro1';
import Intro2 from '../../screens/intro/intro2';
import Intro3 from '../../screens/intro/intro3';

const Stack = createNativeStackNavigator();

const FormNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Intro1" component={Intro1}/>
        <Stack.Screen name="Intro2" component={Intro2}/>
        <Stack.Screen name="Intro3" component={Intro3}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FormNavigation;

const styles = StyleSheet.create({
  container: {}
});
