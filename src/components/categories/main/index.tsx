import React from 'react'
import { View } from 'react-native'
import styles from './style'
import CategoryItem from '../categoryItem'
import categories from '../../../../assets/categories'



const CategoryMain: React.FC = () => {




  return (
    <View style={styles.list_container}>
      {
        categories.map((item, idx) => (
          <CategoryItem key={idx} item={item} />

        ))
      }
    </View>
  )
}

export default CategoryMain
