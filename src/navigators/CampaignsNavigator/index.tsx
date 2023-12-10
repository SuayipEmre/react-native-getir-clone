import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../../screens/ProfileScreen'
import colors from '../../styles/colors'
import { Text, Image } from 'react-native'
import Campaigns from '../../screens/CampaignsScreen'
import CustomHeaderRight from '../CustomHeaderRightCart'


const Stack = createNativeStackNavigator()



const CampaignsNavigator = () => {

  return (
    <Stack.Navigator initialRouteName='Gift'>

      <Stack.Screen
        name='Gift'
        component={Campaigns}
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
          ),
          headerRight: () => (<CustomHeaderRight />),
        }}

      />



    </Stack.Navigator>
  )
}


export default CampaignsNavigator