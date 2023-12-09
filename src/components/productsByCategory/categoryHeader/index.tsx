import React from 'react'
import { ScrollView} from 'react-native'
import styles from './style'
import categories from '../../../../assets/categories'
import categoryType from '../../../models'
import CategoryBox from './categoryBox'



type CategoriesHeaderType = {
  category : categoryType
}

const CategoriesHeader: React.FC<CategoriesHeaderType> = ({category}) => {
  


  return (
    <ScrollView
      style={styles.container}
      horizontal
      bounces
      showsHorizontalScrollIndicator={false}
    >

      {
        categories.map((item, idx) => (<CategoryBox item={item} key={idx} active={category} />))
      }


    </ScrollView>
  )
}

export default CategoriesHeader
