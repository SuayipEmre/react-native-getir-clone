import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import categoryType from '../../../models'


type propsType = {
  item: categoryType
}
const CategoryItem: React.FC<propsType> = ({ item }) => {
  let URL = item.src
  return (
    <TouchableOpacity style={styles.main_container} activeOpacity={.8}>
        <Image source={{ uri: URL }} style={styles.image} />
        <Text style={styles.info_text}>{item.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem
