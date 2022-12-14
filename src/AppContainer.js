import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Launch from './screens/Launch';
import Map from './screens/Map';

const Stack = createNativeStackNavigator();

const AppContainer = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Launch" component={Launch} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "containedModal", headerShown: false }}>
                <Stack.Screen name="Map" component={Map} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppContainer

