import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import Player from "../screens/Player";

export default function Navigation() {
    const Stack = createStackNavigator();
    const HomeStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Player" componet={Player} />
            </Stack.Navigator>
        )
    }
}