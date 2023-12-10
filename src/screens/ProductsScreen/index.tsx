import { ScrollView } from 'react-native'
import React, { useState } from 'react'
import categoryType from '../../models';
import SubCategories from '../../components/productsByCategory/categoryHeader/subCategories';
import CategoriesHeader from '../../components/productsByCategory/categoryHeader';
import ProductsContainer from '../../components/productsByCategory/products';

const Products: React.FC<any> = ({ route }) => {
  const [category, setCategory] = useState<categoryType>(route.params.category)




  return (
    <ScrollView>
      <CategoriesHeader category={category} />
      <SubCategories subCategories={category.subCategories} />
      <ProductsContainer />
    </ScrollView>
  )
}

export default Products
