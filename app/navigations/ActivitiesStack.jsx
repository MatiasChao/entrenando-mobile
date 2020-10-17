import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Activities from '../screens/Activities'

const Stack = createStackNavigator();

export default function ActivitiesStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = 'activities'
                component = { Activities }
                options = {{ title: "Actividades" }}
            /> 
        </Stack.Navigator>
    )
}