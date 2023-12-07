import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'
const Button = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button_container}>
                <Text style={styles.button_text}>Sepete Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button
