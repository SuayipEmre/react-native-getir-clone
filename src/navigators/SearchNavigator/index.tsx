import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/ProfileScreen'
import colors from '../../styles/colors'
import { Text } from 'react-native'
import Search from '../../screens/SearchScreen'


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
                }}
            
            />
          

        </Stack.Navigator>
    )
}


export default SearchNavigator