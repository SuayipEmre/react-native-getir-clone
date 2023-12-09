import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import styles from './styles'
import colors from '../../../styles/colors'


const Version : React.FC = () => {
    

    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Text style={styles.info_text}>2.17.20</Text>
            </View>
            <AntDesign  name="right" size={18} color={colors.purple} />
        </TouchableOpacity>
    )
}

export default Version
