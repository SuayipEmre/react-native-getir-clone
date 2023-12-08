import { Text, TouchableOpacity, View,  } from 'react-native'
import React from 'react'
import styles from './style'

const KeepGoing = () => {
    return (
        <View style={styles.container}>
    
            <TouchableOpacity style={styles.button_container}>
              <Text
                style={styles.button_text}>Devam</Text>
            </TouchableOpacity>
            <View style={styles.total_price_container}>
    
              <Text style={styles.old_price}>₺123</Text>
              <Text style={styles.new_price} >₺88</Text>
            </View>
    
    
          </View>
    )
}

export default KeepGoing
