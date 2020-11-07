import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

// Stacks
import ActivitiesStack from '../navigations/ActivitiesStack'
import FavoritesStack from '../navigations/FavoritesStack'
import HomeStack from '../navigations/HomeStack'
import AccountStack from '../navigations/AccountStack'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
             initialRouteName = "account"
             tabBarOptions = {{
                 inactiveTintColor: '#646464',
                 activeTintColor: '#00a680'
             }}
             screenOptions = { ({ route }) => ({
                 tabBarIcon: ({ color }) => screenOptions(route, color)
             }) }
            >
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

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "account":
            iconName = "account"
            break;
        case "home":
            iconName = "home"
            break;
        case "activities":
            iconName = "format-list-bulleted"
            break;
        case "favorites":
            iconName = "heart"
            break;
        
        default:
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}