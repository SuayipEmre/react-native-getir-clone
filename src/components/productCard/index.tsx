import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { productType } from '../../models'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import { Entypo } from '@expo/vector-icons'
import colors from '../../styles/colors'
import { addToCart, getCartTotal } from '../../redux/features/cart/actions'
import { useCart } from '../../redux/features/cart/hooks'

type ProductCardType = {
    item: productType
}


const ProductCard: React.FC<ProductCardType> = ({ item }) => {
    const navigation = useNavigation()

    const [isInCart, setIsInCart] = useState<boolean>(false)
    const cart = useCart()

    useEffect(() => {
        const status = cart.some(product => product.name == item.name)
        setIsInCart(status)
    }, [cart])


    const handleClick = () => navigation.navigate('ProductDetails', { product: item })

    const handleAddToCartClick = () => {

        const isOnCart = cart.some(product => product.name == item.name)
        if (isOnCart) return null
        addToCart({
            ...item,
            count: 1,
        })
        getCartTotal()
    }
    return (
        <TouchableOpacity style={style.container} activeOpacity={.7} onPress={handleClick}>
            <View style={[isInCart && style.active_image_container]}>
                <Image style={style.image} source={{ uri: item.image }} />
            </View>

            <View style={style.price_container}>

                <Text style={style.old_price}>
                    {item.price}
                </Text>

                <Text style={style.new_price}>
                    {item?.reducedPrice}
                </Text>

            </View>

            <Text style={style.brand_text}>{item.name}</Text>
            <Text style={style.product_quantity}>{item.productQuantity}.</Text>

            <TouchableOpacity style={style.plus_icon} activeOpacity={.9} onPress={handleAddToCartClick}>
                <Entypo name="plus" size={22} color={colors.purple} />
            </TouchableOpacity>

        </TouchableOpacity>

    )
}

export default ProductCard
