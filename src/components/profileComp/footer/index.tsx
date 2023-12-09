import {  Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign } from '@expo/vector-icons'
import colors from '../../../styles/colors'


const FooterInfo  : React.FC <{text:string}>= ({text}) => {
  return (
    <View style={styles.container}>
    <View>
        <Text style={styles.info_text}>{text}</Text>
    </View>
    <AntDesign style={styles.right_icon} name="right" size={18} color={colors.purple} />
</View>
  )
}

export default FooterInfo
