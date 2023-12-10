import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/ProfileScreen'
import colors from '../../styles/colors'
import { Text } from 'react-native'
import Language from '../../screens/LanguageScreen'
import CustomHeaderRight from '../CustomHeaderRightCart'


const Stack = createNativeStackNavigator()



const ProfileNavigator = () => {

    return (
        <Stack.Navigator initialRouteName='User'>

            <Stack.Screen
                name='User'
                component={Profile}
                options={{
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: colors.purple
                    },

                    headerTitle: () => <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>Profil</Text>,
                    headerRight: () => (<CustomHeaderRight />),
                }}

            />

            <Stack.Screen
                name='Language'
                component={Language}
                options={{
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: colors.purple
                    },

                    headerTitle: () => <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>Dili Değiştir</Text>,
                }}

            />


        </Stack.Navigator>
    )
}


export default ProfileNavigator