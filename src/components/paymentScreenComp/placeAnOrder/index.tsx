import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import { useCartTotalPrice } from '../../../redux/features/cart/hooks'


const PlaceAnOrder = () => {
    const bagFee = 0.25
    const deliveryFee = 19.99
    const totalPrice = useCartTotalPrice()

    const subTotal: number = totalPrice + deliveryFee + bagFee
  return (
    <View style={styles.container}>
     

    <View style={{
        flexDirection:'row',
        width: '100%',
        height : '80%',
        marginBottom :12,
    }}>
    <TouchableOpacity style={styles.button_container}  activeOpacity={.9}>
      <Text
        style={styles.button_text}>Sipariş Ver</Text>
    </TouchableOpacity>


    <View style={styles.total_price_container}>
      <Text>₺{subTotal.toFixed(2)}</Text>
    </View>

    </View>


    </View>
  )
}

export default PlaceAnOrder
