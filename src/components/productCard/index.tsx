import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { productType } from '../../models'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import { Entypo } from '@expo/vector-icons'
import colors from '../../styles/colors'


type propsType = {
    item : productType
}
const ProductCard : React.FC<propsType> = ({item}) => {
    const navigation = useNavigation()

    const handleClick =() => navigation.navigate('ProductDetails', {product : item})
    
    return (
        <TouchableOpacity style={style.container} activeOpacity={.7} onPress={handleClick}>
            <Image style={style.image} source={{ uri: item.image }} />

            <View style={style.price_container}>

                <Text style={style.old_price}>
                    {item?.fiyatIndirimli}
                </Text>

                <Text style={style.new_price}>
                   {item.fiyat}
                </Text>

            </View>

            <Text style={style.brand_text}>{item.name}</Text>
            <Text style={style.product_quantity}>{item.miktar}.</Text>

            <View style={style.plus_icon}>
                <Entypo name="plus" size={22} color={colors.purple} />
            </View>

        </TouchableOpacity>

    )
}

export default ProductCard

const styles = StyleSheet.create({})