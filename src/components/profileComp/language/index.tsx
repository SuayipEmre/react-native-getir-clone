import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import colors from '../../../styles/colors'


const Language : React.FC = () => {
  const navigation = useNavigation()
    

    //@ts-ignore
    const handleCLick = () =>  navigation.navigate('Language')
    return (
        <TouchableOpacity style={styles.container} onPress={handleCLick}>
            <View>
                <Text style={styles.info_text}>Türkçe</Text>
            </View>
            <AntDesign  name="right" size={18} color={colors.purple} />
        </TouchableOpacity>
    )
}

export default Language
