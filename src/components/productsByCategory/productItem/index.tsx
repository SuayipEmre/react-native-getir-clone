import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo } from '@expo/vector-icons';
import colors from '../../../styles/colors';
import { productType } from '../../../models';

type propsType = {
    item : productType
}
const ProductItem: React.FC<propsType> = ({item}) => {

    return (
        <TouchableOpacity style={styles.container} activeOpacity={.7}>
            <Image style={styles.image} source={{ uri: item.image }} />

            <View style={styles.price_container}>

                <Text style={styles.old_price}>
                    {item?.fiyatIndirimli}
                </Text>

                <Text style={styles.new_price}>
                   {item.fiyat}
                </Text>

            </View>

            <Text style={styles.brand_text}>{item.name}</Text>
            <Text style={styles.product_quantity}>{item.miktar}.</Text>

            <View style={styles.plus_icon}>
                <Entypo name="plus" size={22} color={colors.purple} />
            </View>

        </TouchableOpacity>

    )


}

export default ProductItem
