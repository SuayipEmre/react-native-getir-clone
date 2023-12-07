import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import products from '../../../../../../assets/products'
import ProductCard from '../../../../productCard'
import style from './style'



const { height } = Dimensions.get('window')
const renderedItem = ({ item }: any) => <ProductCard item={item} />

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

const styles = StyleSheet.create({})



