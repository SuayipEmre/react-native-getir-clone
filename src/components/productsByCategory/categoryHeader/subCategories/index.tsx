import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'


type SubCategoriesType = {
  subCategories : Array<string>
}




const SubCategories:  React.FC<SubCategoriesType>= ({subCategories}) => {

  const [category, setCategory] = useState<string>("Birlikte İyi Gider",)


  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces
        contentContainerStyle={styles.scrool_container}>

        {
          subCategories.map((item, idx) => (
            <TouchableOpacity key={idx} activeOpacity={.8} style={[styles.btn_container, item == category && styles.active_container]} onPress={() => setCategory(item)}>
              <Text style={[styles.text, item == category && styles.active_text]}>{item}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  )
}
export default SubCategories

