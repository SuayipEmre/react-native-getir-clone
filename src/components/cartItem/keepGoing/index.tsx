import { Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import styles from './style'
import { useCartTotalPrice } from '../../../redux/features/cart/hooks'
import { useNavigation } from '@react-navigation/native'
import Button from './button'
const KeepGoing: React.FC = () => {
  const navigation = useNavigation()
  
  
  const totalPrice = useCartTotalPrice()

  return (

    <View style={[styles.container, totalPrice < 80 && styles.min_total]} >
      {
        totalPrice < 80 && (
          <View style={styles.min_price_info}>
        
            <Text>
              80TL'lik minumum sepet tutarına {(80 - totalPrice).toFixed(2)} kaldı!
            </Text>

          </View>
        )
      }

     
      <Button text='Devam' />
    </View>
  )
}

export default KeepGoing
