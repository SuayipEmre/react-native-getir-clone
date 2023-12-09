import { Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import styles from './style'
import colors from '../../../styles/colors'
import { editCart, getCartTotal, removeFromCart } from '../../../redux/features/cart/actions'

type EditCartType = {
    count: number
    productID : string
}



const EditCart: React.FC<EditCartType> = ({ count, productID }) => {

    
    const [productCount, setProductCount] = useState<number>(count)

    const handleEditCart = (status : string) => {
      switch (status) {
        case 'inc':
            setProductCount(prev => prev + 1)
           
            break;
        case  'dec':
            productCount > 0 &&  setProductCount(prev => prev - 1) 
            break
        default:
            break;
      }
    }

    useEffect(() => {
        productCount == 0 && removeFromCart(productID)
        editCart({id : productID, count: productCount})
        getCartTotal()
    },[productCount])


    return (
        <View style={styles.quantity_content}>
            <TouchableOpacity activeOpacity={.9} onPress={() => handleEditCart('dec')} >
                <Entypo name="minus" size={24} color={colors.purple} />
            </TouchableOpacity>
            <View style={styles.count_container}>
                <Text style={styles.count}>{productCount}</Text>
            </View>
            <TouchableOpacity activeOpacity={.9} onPress={() => handleEditCart('inc')}>
                <Entypo name="plus" size={20} color={colors.purple} />
            </TouchableOpacity>
        </View>
    )
}

export default EditCart
