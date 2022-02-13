import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import NewList from '../screens/NewList';
import Welcome from '../screens/Welcome';
import constants from './constants';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Welcome} name={constants.welcome} />
        <Stack.Screen component={Home} name={constants.home} />
        <Stack.Screen component={NewList} name={constants.newlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
