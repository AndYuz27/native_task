import React from "react";
import Main  from "./main";
import PageOfPet from './pageOfPet'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{title: 'Главная'}}
                    />
                <Stack.Screen
                    name="PageOfPet"
                    component={PageOfPet}
                    options={{title: 'Главная'}}
                    />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}