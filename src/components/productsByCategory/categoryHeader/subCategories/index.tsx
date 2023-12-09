import { ScrollView,  Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'





const SubCategories = () => {
  const [category, setCategory] = useState<string>("Birlikte İyi Gider",)
  const subCategories = ["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"]


  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces
      contentContainerStyle={styles.container}>

      {
        subCategories.map((item, idx) => (
          <TouchableOpacity key={idx} activeOpacity={.8} style={[styles.btn_container, item == category && styles.active_container]} onPress={() => setCategory(item)}>
            <Text style={[styles.text, item == category && styles.active_text]}>{item}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}
export default SubCategories

