import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Welcome from '../screens/Welcome';
import constants from './constants';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Welcome} name={constants.welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
