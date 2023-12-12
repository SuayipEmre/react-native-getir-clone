import { Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import { StepByStepContent } from '../../constants'


const Additionalinformation: React.FC = () => {
    const { warning, businessRegistrationNumber, foodOperator, text, origin } = StepByStepContent['AdditioanlInformation']


    return (
        <View style={styles.container}>
            <View style={styles.header_coontainer}>
                <Text style={styles.header_info_text}>{text}</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Menşei</Text>
                <Text style={styles.text}>{origin}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Gıda İşletmecisi/ Üretici/ İthalatçi/ Dağıtıcı</Text>
                <Text style={styles.text}>{foodOperator}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>İletme kayıt No</Text>
                <Text style={styles.text}>{businessRegistrationNumber}</Text>
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, styles.warning]}>Uyarı</Text>
                <Text style={styles.text}>{warning}</Text>
            </View>
        </View>
    )
}

export default Additionalinformation
