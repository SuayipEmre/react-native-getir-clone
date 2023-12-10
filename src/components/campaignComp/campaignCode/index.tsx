import { Modal, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import colors from '../../../styles/colors'
import styles from './style'
import { useCampaignModal } from '../../../redux/features/campaigns/hooks'
import { setCamapaignModalVisible } from '../../../redux/features/campaigns/actions'
import CampaignCodeModal from './addCodeModal'

const CampaignCode = () => {

  const modal = useCampaignModal()

  return (
    <View>
      <TouchableOpacity style={styles.campaign_code_wrapper} activeOpacity={.9} onPress={() => setCamapaignModalVisible(!modal)}>
        <View style={styles.campaign_code_container}>
          <View style={styles.icon_container}>
            <Entypo name="plus" size={20} color={colors.purple} />
          </View>
          <Text style={styles.add_text}>Kampanya Kodu Ekle</Text>
        </View>
      </TouchableOpacity>

    <CampaignCodeModal />
    </View>
  )
}

export default CampaignCode

