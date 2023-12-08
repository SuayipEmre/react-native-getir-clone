import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import colors from '../../../styles/colors'
import { setModalVisible } from '../../../redux/features/profile/actions'

const Login: React.FC = () => {

    const openModal = () => setModalVisible(true)
    return (
        <TouchableOpacity style={styles.container} onPress={openModal} activeOpacity={.8} >

            <View style={styles.content_container}>
                <View style={styles.info_container}>
                    <Ionicons name="person" size={26} color={colors.purple} />
                    <Text>Giriş yap</Text>
                </View>
                <View>
                    <AntDesign style={styles.right_icon} name="right" size={18} color={colors.purple} />
                </View>
            </View>


        </TouchableOpacity>
    )
}

export default Login
