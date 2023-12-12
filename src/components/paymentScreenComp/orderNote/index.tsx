import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './style'
import Checkbox from 'expo-checkbox';


const OrderNote: React.FC = () => {
    const [door, setDoor] = useState(false)
    const [ring, setRing] = useState(false)


    return (
        <View style={styles.container}>

            <View style={styles.input_container}>

                <View >
                    <TextInput style={styles.input} placeholder='Sipariş Notunuzu buraya yazabilirsiniz' />
                </View>

                <View style={styles.checkbox_container}>
                    <View style={styles.checkbox_item}>
                        <Checkbox
                            style={styles.checkbox}
                            value={door}
                            onValueChange={setDoor}
                            color={door ? '#4630EB' : undefined}
                        />
                        <Text>Siparişi Kapıya Bırak</Text>
                    </View>
                    <View style={[styles.checkbox_item, styles.checkbox_item_border]}>
                        <Checkbox
                            style={styles.checkbox}
                            value={ring}
                            onValueChange={setRing}
                            color={ring ? '#4630EB' : undefined}
                        />
                        <Text>Zili Çalma</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}


export default OrderNote