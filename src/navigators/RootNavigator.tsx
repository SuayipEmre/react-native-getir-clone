import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CustomtabBarButton from './CustomTabBarButton';
import colors from '../styles/colors';
const Tab = createBottomTabNavigator();



const RootNavigator = () => {





    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.purple,
                    tabBarInactiveTintColor: '#959595',
                    headerShown: false,
                    tabBarStyle: { height: 80 }
                }}>

                <Tab.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Entypo name="home" size={24} color={color} />
                        )
                    }}
                />

                <Tab.Screen
                    name='Search'
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <EvilIcons name="search" size={32} color={color} />
                        )
                    }}
                />

                <Tab.Screen
                name='list'
                component={HomeNavigator}
                options={{
                    tabBarButton : (props) => <CustomtabBarButton {...props} />
                }}
                />

                <Tab.Screen
                    name='User'
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="person" size={24} color={color} />
                        )
                    }}
                />



                <Tab.Screen
                    name='Gift'
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name="gift" size={24} color={color} />
                        )
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator
