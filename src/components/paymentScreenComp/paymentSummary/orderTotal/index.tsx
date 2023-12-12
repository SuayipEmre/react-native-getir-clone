import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import colors from '../../../../styles/colors'
import { useCartTotalPrice } from '../../../../redux/features/cart/hooks'
import Checkbox from 'expo-checkbox'


const OrderTotal: React.FC = () => {

    const [contentModal, setContentModal] = useState<boolean>(false)
    const bagFee = 0.25
    const deliveryFee = 19.99
    const totalPrice = useCartTotalPrice()

    const subTotal: number = totalPrice + deliveryFee + bagFee

    return (
        <View style={styles.container}>

            <View style={[styles.header, !contentModal && styles.close_content_header]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <Text style={styles.title}>Sipariş Toplam</Text>
                    <TouchableOpacity style={styles.btn} activeOpacity={.9} onPress={() => setContentModal(!contentModal)}>

                        {
                            contentModal ? <Entypo name="chevron-up" size={18} color={colors.purple} /> : <Entypo name="chevron-down" size={18} color={colors.purple} />
                        }


                    </TouchableOpacity>

                </View>
                {
                    !contentModal && <Text style={{ fontWeight: '600' }}>₺{totalPrice}</Text>
                }
            </View>

            {
                contentModal && (
                    <View style={styles.content}>

                        <View style={styles.content_item}>
                            <Text style={styles.content_item_text}>Ürünler</Text>
                            <Text style={styles.content_item_text}>₺{totalPrice}</Text>
                        </View>

                        <View style={styles.content_item}>
                            <Text style={styles.content_item_text}>Poşet Ücreti(1)</Text>
                            <Text style={styles.content_item_text}>₺{bagFee}</Text>
                        </View>

                        <View style={styles.content_item}>
                            <Text style={styles.content_item_text}>Poşet Ücreti(1)</Text>
                            <Text style={styles.content_item_text}>₺{deliveryFee}</Text>
                        </View>

                        <View style={[styles.content_item, styles.price_detail]}>
                            <Text style={styles.price_detail_text}>Ücret Detayları</Text>
                            <Entypo name="chevron-right" size={21} color={colors.purple} />
                        </View>

                        <View style={styles.content_item}>
                            <Text style={styles.sub_total_text}>Alt Toplam</Text>
                            <Text style={styles.sub_total_text}>₺{subTotal.toFixed(2)}</Text>
                        </View>


                    </View>
                )
            }

            {
                totalPrice < 300 && (
                    <View style={styles.free_delivery}>
                        <MaterialIcons name="motorcycle" size={24} color="black" />
                        <Text style={{
                            textAlign: 'left',
                            width: '90%'
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>₺{(300 - totalPrice).toFixed(2)} </Text>
                            sonra
                            <Text style={{ fontWeight: 'bold' }}> getirmesi ücretsiz! </Text>
                            Birkaç ürün daha ekle
                        </Text>
                    </View>
                )
            }

            <View style={styles.total_info_container}>
                <Text style={styles.total_info_text}>Toplam</Text>
                <Text style={styles.total_info}>₺{subTotal.toFixed(2)}</Text>
            </View>

            <View style={styles.contractInformation}>
                <Checkbox
                    value={true}
                    onValueChange={() => null}
                    color={true ? colors.purple : undefined}
                />
                <Text>
                    <Text style={{color : colors.purple}}>Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi'</Text>
                    ni okudum ve kabul ediyorum
                </Text>

            </View>
        </View>
    )
}

export default OrderTotal
