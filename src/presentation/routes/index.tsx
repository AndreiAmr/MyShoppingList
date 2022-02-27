import {
  faBasketShopping,
  faHandHoldingDollar,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'styled-components';
import TabButton from '../components/TabButton';
import AddItem from '../screens/AddItem';
import Total from '../screens/Total';
import Home from '../screens/Home';

import NewList from '../screens/NewList';
import Welcome from '../screens/Welcome';
import constants from './constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NewListBottomTab = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.color.blue,
        tabBarStyle: {
          borderRadius: 10,
          paddingBottom: -12,
          height: heightPercentageToDP(8),
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.bold,
          fontSize: heightPercentageToDP(2),
        },
      }}
    >
      <Tab.Screen
        name={constants.itemsList}
        component={NewList}
        options={{
          tabBarLabel: 'Lista',
          tabBarIcon: ({ size, color }) => {
            return (
              <FontAwesomeIcon
                icon={faBasketShopping}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={constants.itemsTaked}
        component={AddItem}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => (
            <TabButton size={size} focused={focused} icon={faPlus} />
          ),
        }}
      />
      <Tab.Screen
        name={constants.addReceipt}
        component={Total}
        options={{
          tabBarLabel: 'Total',
          tabBarIcon: ({ size, color }) => (
            <FontAwesomeIcon
              icon={faHandHoldingDollar}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
        <Stack.Screen component={NewListBottomTab} name={constants.Items} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
