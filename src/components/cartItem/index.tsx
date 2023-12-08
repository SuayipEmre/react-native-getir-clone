import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import styles from './style'
import { Entypo } from '@expo/vector-icons';
import colors from '../../styles/colors';
import KeppGoing from '../keepGoing/'
import { productType } from '../../models';



type propType = {
    product: productType
}

const CartItem: React.FC<propType> = ({ product }) => {

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
                            <Text style={styles.old_price}>₺{product.fiyat}</Text>
                            <Text style={styles.new_price}>₺{product.fiyatIndirimli}</Text>
                        </View>
                    </View>

                    {/*Count */}
                    <View style={styles.quantity_container} >

                        <View style={styles.quantity_content}>
                            <Entypo name="minus" size={24} color={colors.purple} />
                            <View style={styles.count_container}>
                                <Text style={styles.count}>1</Text>
                            </View>
                            <Entypo name="plus" size={20} color={colors.purple} />
                        </View>

                    </View>



                </View>

            </View>
        </View>

    )
}
//  
export default CartItem
