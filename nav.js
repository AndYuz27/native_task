import React from "react";
import Main  from "./main";
import PageOfPet from './pageOfPet'
import EditPg from './EditPg'
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
                <Stack.Screen name='Edit' component={EditPg} options={{title: 'Измена'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}