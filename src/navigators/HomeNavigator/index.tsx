import React, { useLayoutEffect } from 'react'
import { Image, Text, TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import colors from '../../styles/colors';
import CategoryFilterScreen from '../../screens/ProductsScreen';
import ProductDetails from '../../screens/ProductDetailsScreen';
import CustomHeaderRight from './CustomHeaderRightCart';
import Cart from '../../screens/CartScreen';
import { clearCart, setKeyForCartRender } from '../../redux/features/cart/actions';


const Stack = createNativeStackNavigator()


const HomeStack: React.FC<any> = ({ navigation, route }) => {

  const tabHiddenRoutes  = ['ProductDetails', 'Cart' ]

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    //@ts-ignore
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);


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
              source={require('../../../assets/getirlogo.png')} />
          )
        }}

      />

      <Stack.Screen
        name='CategoryDetails'
        component={CategoryFilterScreen}
        options={{
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.purple,

          },
          headerTitle: () => <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Ürünler</Text>,

          headerRight: () => (<CustomHeaderRight />),

        }}

      />


      <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={{

          headerTintColor: '#fff',
          headerBackTitleVisible: false,

          headerStyle: {
            backgroundColor: colors.purple
          },

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={.9}>
              <Ionicons name='close' size={22} color='#fff' />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity activeOpacity={.9} >
              <AntDesign name="heart" size={22} color="#32177a" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Ürün Detayı</Text>
          ),


        }}
      />

      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: colors.purple
          },
          headerTitle: () => <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Sepetim</Text>,
          headerLeft: () => (
            <TouchableOpacity activeOpacity={.9} onPress={() => navigation.goBack()}>
              <Ionicons name='close' size={22} color='#fff' />
            </TouchableOpacity>
          ),

          headerRight: () => (
            <TouchableOpacity activeOpacity={.9} onPress={() => {clearCart(), setKeyForCartRender()}}>
              <FontAwesome5 name="trash-alt" size={20} color="#fff" />
            </TouchableOpacity>
          )
        }}
      />

    </Stack.Navigator>
  )
}

const HomeNavigator: React.FC<any> = ({ navigation, route }) => {
  return <HomeStack navigation={navigation} route={route} />;
}


export default HomeNavigator
