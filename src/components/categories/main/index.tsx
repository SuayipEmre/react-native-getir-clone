import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'

import styles from './style'
import CategoryItem from '../categoryItem'
import categories from '../../../../assets/categories'
import categoryType from '../../../models'



const CategoryMain: React.FC = () => {
  const [categoryData, setCategoryDatas] = useState<categoryType[]>(categories)



  return (
    <View style={styles.list_container}>
      {
        categoryData.map((item, idx) => (
          <CategoryItem key={idx} item={item} />

        ))
      }
    </View>
  )
}

export default CategoryMain
