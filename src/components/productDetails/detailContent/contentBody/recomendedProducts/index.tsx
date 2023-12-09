import {   StyleSheet, View } from 'react-native'
import React from 'react'
import products from '../../../../../../assets/products'
import ProductCard from '../../../../productCard'
import style from './style'




const RecomendedProducts = () => {

  return (
      <View style={style.container}>
        {
          products.map((item, idx) => <ProductCard item={item} key={idx} />)
        }
      </View>
  )
}

export default RecomendedProducts



