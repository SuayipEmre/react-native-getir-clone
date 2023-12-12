import { Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import { AntDesign } from '@expo/vector-icons'
import colors from '../../styles/colors'


const DeliveryAddressInformation: React.FC = () => {
    return (
        <View style={styles.header_main}>

            <View style={styles.home_info_container}>


                <View style={styles.info_content}>
                    <Text style={styles.home_text}>Ev,</Text>
                    <Text style={{ fontSize: 12 }}>
                    Lorem ipsum dolor sit amet cons....
                    </Text>
                </View>

                <AntDesign name="down" size={16} color={colors.purple} />


            </View>

            <View style={styles.time_container}>
                <Text style={{ color: '#5d3ebd', fontSize: 10, fontWeight: 'bold' }}>TVS</Text>
                <Text style={{ color: '#5d3ebd', fontSize: 17, fontWeight: 'bold' }}>15 dk</Text>
            </View>



        </View>
    )
}

export default DeliveryAddressInformation
