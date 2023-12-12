import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCartTotalPrice } from '../../../../redux/features/cart/hooks'
import { useNavigation } from '@react-navigation/native'
import styles from './style'

type ButtonType = {
  text : string
}

const Button : React.FC<ButtonType> = ({ text}) => {
  const navigation = useNavigation()
  const totalPrice = useCartTotalPrice()
  return (
    <View style={[styles.content, totalPrice < 80 && styles.min_total_content]}>


    <TouchableOpacity style={styles.button_container} onPress={() => navigation.navigate('PaymentScreen') } activeOpacity={.9}>
      <Text
        style={styles.button_text}>{text}</Text>
    </TouchableOpacity>


    <View style={styles.total_price_container}>
      <Text style={styles.new_price} >₺{totalPrice.toFixed(2)}</Text>
    </View>


  </View>
  )
}

export default Button
