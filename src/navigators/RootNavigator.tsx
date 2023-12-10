import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CustomtabBarButton from './customNavComponents/CustomTabBarButton';
import colors from '../styles/colors';
import Profile from '../screens/ProfileScreen';
import ProfileNavigator from './ProfileNavigator';
import SearchNavigator from './SearchNavigator';
import { View } from 'react-native';
import CampaignsNavigator from './CampaignsNavigator';
const Tab = createBottomTabNavigator();



const RootNavigator = () => {


    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='HomeNavigator'
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: colors.purple,
                    tabBarInactiveTintColor: '#959595',
                    headerShown: false,
                    tabBarStyle: { height: 80 },
                    
                }}>

                <Tab.Screen
                    name='HomeNavigator'
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Entypo name="home" size={24} color={color} />
                        )
                    }}
                />

                <Tab.Screen
                    name='SearchNavigator'
                    component={SearchNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                          
                                <EvilIcons name="search" size={30} color={color}  />
                        )
                      
                    }}
                />

                <Tab.Screen
                name='list'
                component={HomeNavigator}
                options={{
                    tabBarButton : () => <CustomtabBarButton />
                }}
                />

                <Tab.Screen
                    name='Profile'
                    component={ProfileNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="person" size={24} color={color} />
                        ),
                    
                    }}
                />



                <Tab.Screen
                    name='CampaignsNavigator'
                    component={CampaignsNavigator}
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
