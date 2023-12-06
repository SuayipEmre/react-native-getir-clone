import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import TypeBox from './typeBox'





const SubCategories = () => {
    const [category, setCategory] = useState<string>("Birlikte İyi Gider",)
    const subCategories = ["Birlikte İyi Gider","Çubuk","Kutu","Külah","Çoklu","Bar"]
    
    
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    bounces
    contentContainerStyle={styles.container}>
     
     {
        subCategories.map((item, idx) =>  <TypeBox setCategory={setCategory} item={item} key={idx} active={category} />)
     }
    </ScrollView>
  )
}

export default SubCategories

