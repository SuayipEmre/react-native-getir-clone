import {  Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import colors from '../../../styles/colors'
import styles from './style'

const CampaignCode = () => {
  return (
    <View style={styles.campaign_code_wrapper}>
    <View style={styles.campaign_code_container}>
        <View style={styles.icon_container}>
            <Entypo name="plus" size={20} color={colors.purple} />
        </View>
        <Text style={styles.add_text}>Kampanya Kodu Ekle</Text>
    </View>
</View>
  )
}

export default CampaignCode

