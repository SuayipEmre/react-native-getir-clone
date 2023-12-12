import { Text, View } from 'react-native'
import React from 'react'
import { StepByStepContent } from '../../constants'
import styles from './style'
const NutritionalValues = () => {
    const { carbohydrate, sugar, energy, protein, quantity } = StepByStepContent['NutritionalValues'].content

    
    return (
        <View style={styles.container}>

        <View style={styles.quantity_info}>
            <Text style={styles.quantity}>100 g/ml</Text>
        </View>

            <View style={styles.values_main_container}>
                <View style={styles.values_container}>
                    <Text style={styles.text}>Enerji (kj)</Text>
                    <Text style={styles.text}>{energy}</Text>
                </View>

                <View style={styles.values_container}>
                    <Text style={styles.text}>Şeker ({quantity})</Text>
                    <Text style={styles.text}>{sugar}</Text>
                </View>

                <View style={styles.values_container}>
                    <Text style={styles.text}>Karbonhidrat ({quantity})</Text>
                    <Text style={styles.text}>{carbohydrate}</Text>
                </View>

                <View style={styles.values_container}>
                    <Text style={styles.text}>Proten ({quantity})</Text>
                    <Text style={styles.text}>{protein}</Text>
                </View>
            </View>

        </View>
    )
}

export default NutritionalValues
