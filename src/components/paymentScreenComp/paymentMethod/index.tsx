import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import colors from '../../../styles/colors';

const PaymentMethod: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content_container}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>

          <View style={styles.radio_container}>
            <View style={styles.active_radio} />
          </View>

          <View style={styles.mid_content}>

            <View style={styles.card_icon_container}>
              <FontAwesome name="cc-visa" size={24} color="blue" />
            </View>

            <View>
              <Text style={styles.card_info_text}>Card</Text>
              <Text style={styles.info_number}>1231231*****313</Text>
            </View>

          </View>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>Kart Değiştir</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.content_container}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>

          <View style={styles.radio_container}>
            <View style={styles.radio} />
          </View>

          <View style={styles.mid_content}>

            <View style={styles.icon_container}>
            <EvilIcons name="credit-card" size={28} color="black" />
            </View>

            <View>
              <Text style={styles.istanbul_text}>İstanbul Kart İle Öde </Text>
            </View>

          </View>
        </View>





      </View>

      <View style={{
        flexDirection :'row',
        alignItems :'center',
        gap : 12,
      }}>



            <View style={styles.plus_icon_container}>
              <Entypo name="plus" size={20} color={colors.purple} />
            </View>

            <View>
              <Text style={styles.bkm_text}>BKM Express ile Kart Ekle </Text>
            </View>



      </View>

    </View>
  )
}


/* */
export default PaymentMethod
