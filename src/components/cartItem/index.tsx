import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './style'
import { Entypo } from '@expo/vector-icons';
import colors from '../../styles/colors';
import { productType } from '../../models';
import EditCart from './editProductCount';



type CartItemType = {
    product: productType & {count : number}
}

const CartItem: React.FC<CartItemType> = ({ product }) => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.content_container} >


                    {/*Image*/}
                    <View style={styles.image_container}>
                        <Image style={styles.image} source={{ uri: product.image }} />
                    </View>

                    {/*content */}
                    <View style={styles.product_info_container}>
                        <Text style={styles.product_name}>{product.name}</Text>
                        <View style={styles.price_container}>
                            <Text style={styles.old_price}>₺{product.price}</Text>
                            <Text style={styles.new_price}>₺{product.reducedPrice}</Text>
                        </View>
                    </View>

                    {/*Count */}
                    <View style={styles.quantity_container} >

                        <EditCart  count={product.count} productID = {product.id} />

                    </View>



                </View>

            </View>
        </View>

    )
}
export default CartItem
