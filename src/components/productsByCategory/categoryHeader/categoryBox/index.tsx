
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categoryType from '../../../../models'
import styles from './style'

type propType = {
    item: categoryType,
    active : categoryType 
}

const CategoryBox: React.FC<propType> = ({ item, active }) => {

    return (
        <View style={styles.container}>
            <Text style={[styles.text, item.name== active.name && styles.active_text]} >{item.name}</Text>
        </View>
    )


}

export default CategoryBox
