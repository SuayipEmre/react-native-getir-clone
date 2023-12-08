import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { productType } from '../../models'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import { Entypo } from '@expo/vector-icons'
import colors from '../../styles/colors'
import { addToCart, getCartTotal } from '../../redux/features/cart/actions'
import { useCart } from '../../redux/features/cart/hooks'


type propsType = {
    item: productType
}
const ProductCard: React.FC<propsType> = ({ item }) => {
    const navigation = useNavigation()

    const cart = useCart()

    //@ts-ignore
    const handleClick = () => navigation.navigate('ProductDetails', { product: item })

    const handleAddToCartClick = () => {

        const isOnCart = cart.some(product => product.name == item.name)
        if(isOnCart ) return null
        addToCart({
            ...item,
            count: 1,
        })
        getCartTotal()
    }
    return (
        <TouchableOpacity style={style.container} activeOpacity={.7} onPress={handleClick}>
            <Image style={style.image} source={{ uri: item.image }} />

            <View style={style.price_container}>

                <Text style={style.old_price}>
                    {item.price}
                </Text>

                <Text style={style.new_price}>
                    {item?.reducedPrice}
                </Text>

            </View>

            <Text style={style.brand_text}>{item.name}</Text>
            <Text style={style.product_quantity}>{item.Productquantity}.</Text>

            <TouchableOpacity style={style.plus_icon} activeOpacity={.9} onPress={handleAddToCartClick}>
                <Entypo name="plus" size={22} color={colors.purple} />
            </TouchableOpacity>

        </TouchableOpacity>

    )
}

export default ProductCard

const styles = StyleSheet.create({})