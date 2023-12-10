import { Modal,  Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
import { useCampaignModal } from '../../../../redux/features/campaigns/hooks'
import colors from '../../../../styles/colors'
import { setCamapaignModalVisible } from '../../../../redux/features/campaigns/actions'


const CampaignCodeModal: React.FC = () => {
    const modal = useCampaignModal()

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modal}>
            <View style={styles.container}>
                <View style={styles.modalView}>

                    <View style={styles.input_container}>
                        <TextInput autoFocus placeholderTextColor={colors.gray} selectionColor='#FFD301' style={styles.input} placeholder='Kampanya Kodunu Girin' />
                    </View>

                    <View style={styles.button_container}>

                        <TouchableOpacity style={styles.close_btn} onPress={() => setCamapaignModalVisible(false)} activeOpacity={.9}>
                            <Text style={styles.btn_text}>Kapat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.save_btn} activeOpacity={.9} >
                            <Text style={styles.btn_text}>Kaydet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </Modal>
    )
}

export default CampaignCodeModal
