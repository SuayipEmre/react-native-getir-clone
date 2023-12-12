import { Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo,  FontAwesome5 } from '@expo/vector-icons'
import colors from '../../../styles/colors'
import OrderTotal from './orderTotal'

const PaymentSummary: React.FC = () => {
    return (
        <View style={styles.container}>

            <View style={styles.campaign_container}>
                <View style={styles.campaign_content}>
                    <View style={styles.campaign_icon}>
                        <FontAwesome5 name="gift" size={24} color={colors.purple} />
                    </View>
                    <Text style={styles.campaign_text}>Kampanya Seçin</Text>
                </View>
                <Entypo name="chevron-right"  size={21} color={colors.purple} />
            </View>

            <View style={styles.bill_container}>
                <View style={styles.plus_icon_container}>
                    <Entypo name="plus" size={20} color={colors.purple} />
                </View>
                <Text style={styles.add_bill_info_text}>Fatura Bilgisi ekle</Text>
            </View>
            
            
            <OrderTotal />


        </View>
    )
}

export default PaymentSummary
