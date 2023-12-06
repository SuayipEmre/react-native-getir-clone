import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { Image, Text } from 'react-native';
import colors from '../styles/colors';
import CategoryFilterScreen from '../screens/ProductsScreen';


const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.purple
          },
          headerTitle: () => (
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: 'contain',
                marginTop: -20,
              }}
              source={require('../../assets/getirlogo.png')} />
          )
        }}

      />

      <Stack.Screen
        name='CategoryDetails'
        component={CategoryFilterScreen}
        options={{
          headerTintColor : '#fff',
          headerBackTitleVisible : false,
          headerStyle: {
            backgroundColor: colors.purple,
            
          },
          headerTitle : () => <Text style={{color:'#fff', fontSize : 14, fontWeight : 'bold'}}>Ürünler</Text>
        
        }}

      />



    </Stack.Navigator>
  )
}

export default HomeNavigator
