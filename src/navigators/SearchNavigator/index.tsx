import { createNativeStackNavigator } from '@react-navigation/native-stack'
import colors from '../../styles/colors'
import { Text } from 'react-native'
import Search from '../../screens/SearchScreen'
import CustomHeaderRight from '../CustomHeaderRightCart'


const Stack = createNativeStackNavigator()



const SearchNavigator = () => {

    return (
        <Stack.Navigator initialRouteName='Search'>

            <Stack.Screen
                name='Search'
                component={Search}
                options={{
                    headerTintColor : '#fff',
                    headerStyle : {
                        backgroundColor : colors.purple
                      } ,

                      headerTitle : () => <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>Arama</Text>,
                      headerRight: () => (<CustomHeaderRight />),
                }}
            
            />
          

        </Stack.Navigator>
    )
}


export default SearchNavigator