import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import { addToCart, getCartTotal } from '../../../redux/features/cart/actions'
import { productType } from '../../../models'

type ButtonType = {
    product : productType
}

const Button : React.FC<ButtonType> = ({product}) => {
    
    const handleAddToCartClick = () => {
      addToCart({
        ...product,
        count : 1
      })
      getCartTotal()
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button_container} onPress={handleAddToCartClick}>
                <Text style={styles.button_text}>Sepete Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button
