import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Stacks
import ActivitiesStack from '../navigations/ActivitiesStack'
import FavoritesStack from '../navigations/FavoritesStack'
import HomeStack from '../navigations/HomeStack'
import AccountStack from '../navigations/AccountStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="account" 
                    component={ AccountStack } 
                    options = {{ title: 'Mi Cuenta' }}
                />
                <Tab.Screen 
                    name="home" 
                    component = { HomeStack } 
                    options = {{ title: 'Inicio' }}
                />
                <Tab.Screen 
                    name="activities" 
                    component = { ActivitiesStack } 
                    options = {{ title: 'Actividades' }}
                />
                <Tab.Screen 
                    name="favorites" 
                    component={ FavoritesStack } 
                    options = {{ title: 'Favoritos' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}