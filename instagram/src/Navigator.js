import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './screens/Feed';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont()

const Tab = createBottomTabNavigator();

export default function MenuNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Feed'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        if (route.name === 'Feed') {
                            return <Icon name='home' size={30} color={color} />
                        } else if (route.name === 'AddPhoto') {
                            return <Icon name='camera' size={30} color={color} />
                        }
                        return <Icon name='user' size={30} color={color} />
                    },
                    tabBarShowLabel: false,
                })}
            >
                <Tab.Screen name="Feed" component={Feed} options={{ title: 'Feed' }} />
                <Tab.Screen name="AddPhoto" component={Feed} options={{ title: 'Add Photo' }} />
                <Tab.Screen name="Profile" component={Feed} options={{ title: 'Profile' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}