import React from 'react'
import { ScrollView} from 'react-native'
import styles from './style'
import categories from '../../../../assets/categories'
import categoryType from '../../../models'
import CategoryBox from './categoryBox'
import SubCategories from './subCategories'



const CategoriesHeader: React.FC<categoryType[] | any> = ({category}) => {
  


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
