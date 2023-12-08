import { Text, TouchableOpacity, View,  } from 'react-native'
import React from 'react'
import styles from './style'
import { useCartTotalPrice } from '../../redux/features/cart/hooks'

const KeepGoing = () => {

  const totalPrice = useCartTotalPrice()
    return (
        <View style={styles.container}>
    
            <TouchableOpacity style={styles.button_container}>
              <Text
                style={styles.button_text}>Devam</Text>
            </TouchableOpacity>
            <View style={styles.total_price_container}>
    
              <Text style={styles.new_price} >₺{totalPrice.toFixed(2)}</Text>
            </View>
    
    
          </View>
    )
}

export default KeepGoing
