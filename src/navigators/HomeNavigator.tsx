import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { Image } from 'react-native';
import colors from '../styles/colors';


const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerStyle:{
            backgroundColor : colors.purple
          },
            headerTitle : () => (
              <Image
              style={{
              width : 70,
              height : 70,
              resizeMode :'contain',
              marginTop : -20,
              }}
              source={require('../../assets/getirlogo.png') }/>
            )
        }}

      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
