// src/navigation/Maintabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from './HomeStack';
import CheckoutScreen from '../screens/CheckoutScreen';

const Tab = createBottomTabNavigator();

export default function Maintabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#FFC857',
                    borderTopWidth: 0,
                    height: 70,
                },
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color="#000" />
                    ),
                }}
            />
            <Tab.Screen
                name="CartTab"
                component={CheckoutScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? 'cart' : 'cart-outline'} size={24} color="#000" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

