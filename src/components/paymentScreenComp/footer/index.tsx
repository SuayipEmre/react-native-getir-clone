import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './style'

const Footer: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text_info}>Bu kart bilgileri MasterPass güvencesiyle tutulmaktadır</Text>

            <View style={styles.content}>
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png' }} style={styles.image} />
                <View>
                    <Text style={{fontWeight :'600'}}>masterpass</Text>
                    <Text style={{fontSize :10,}}>by mastercard</Text>
                </View>
            </View>

        </View>
    )
}

export default Footer

