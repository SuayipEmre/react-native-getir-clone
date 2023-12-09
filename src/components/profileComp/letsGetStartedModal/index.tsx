import { Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { useModalVisible } from '../../../redux/features/profile/hooks'
import { setModalVisible } from '../../../redux/features/profile/actions'
import styles from './style'
import { AntDesign, FontAwesome5,  MaterialIcons } from '@expo/vector-icons'
const LetsGetStartedModal = () => {
    const modalVisible = useModalVisible()


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >

            <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>Başlayalım!</Text>

                    <Text style={styles.info_text}>
                        Hesap oluşturmak veya oturum açmak için bir yöntem seçin
                    </Text>

                    <View >
                        <View style={styles.login_options_container}>
                            <FontAwesome5 name="facebook" size={24} color='#4648c8' />
                            <Text style={styles.login_options_text}>Facebook ile devam edin</Text>
                        </View>

                        <TouchableOpacity style={styles.login_options_container} activeOpacity={.9}>
                            <AntDesign name="google" size={24} color="black" />
                            <Text style={styles.login_options_text}>Google ile devam edin</Text>
                        </TouchableOpacity>

                        <View style={styles.tel_container}>
                            <MaterialIcons name="call" size={24} color="#fff" />
                            <Text style={styles.tel_text}>Telefon ile devam edin</Text>
                        </View>
                    </View>

                    <View style={styles.or_section_container}>
                        <View style={styles.or_section_border} />
                        <Text style={styles.or_section_text}>veya</Text>
                        <View style={styles.or_section_border} />
                    </View>

                    <Text style={styles.continue_as_a_guest}>Misafir olarak devam edin</Text>


                </View>
            </TouchableOpacity>


        </Modal>
    )
}

export default LetsGetStartedModal
