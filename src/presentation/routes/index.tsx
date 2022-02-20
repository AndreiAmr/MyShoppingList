import {
  faBagShopping,
  faBasketShopping,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'styled-components';
import TabButton from '../components/TabButton';
import AddReceipt from '../screens/AddReceipt';
import Home from '../screens/Home';
import ItemsTaked from '../screens/ItemsTaked';
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
        tabBarActiveTintColor: theme.color.primary,
        tabBarStyle: {
          marginHorizontal: 12,
          marginBottom: 12,
          borderRadius: 10,
          borderTopWidth: 1,
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
        name={constants.newlist}
        component={NewList}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => (
            <TabButton
              size={size}
              focused={focused}
              label="Lista"
              icon={faBasketShopping}
            />
          ),
        }}
      />
      <Tab.Screen
        name={constants.itemsTaked}
        component={ItemsTaked}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => (
            <TabButton
              size={size}
              focused={focused}
              label="Pegos"
              icon={faBagShopping}
            />
          ),
        }}
      />
      <Tab.Screen
        name={constants.addReceipt}
        component={AddReceipt}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => (
            <TabButton
              size={size}
              focused={focused}
              label="Total"
              icon={faHandHoldingDollar}
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
        <Stack.Screen component={NewListBottomTab} name={constants.newlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
