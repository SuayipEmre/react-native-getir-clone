import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import styles from './style'
import categories from '../../../../assets/categories'
import categoryType from '../../../models'



type CategoriesHeaderType = {
  category: categoryType
}

const CategoriesHeader: React.FC<CategoriesHeaderType> = ({ category }) => {

  return (
    <ScrollView
      style={styles.main_container}
      horizontal
      bounces
      showsHorizontalScrollIndicator={false}
    >

      {
        categories.map((item) => (
          <View key={item.id} style={styles.container}>
            <Text style={[styles.text, item.name == category.name && styles.active_text]} >{item.name}</Text>
          </View>))
      }


    </ScrollView>
  )
}



        
        
      
export default CategoriesHeader
