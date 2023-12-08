import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, ScrollView } from 'react-native'
import CartItem from '../../components/cartItem'
import products from '../../../assets/products'
import colors from '../../styles/colors'
import KeepGoing from '../../components/keepGoing'
import ProductCard from '../../components/productCard'
import styles from './style'
import { useCart, useCartKeyForRender } from '../../redux/features/cart/hooks'


const Cart: React.FC = () => {
  const cart = useCart()
  const key = useCartKeyForRender()



  const renderedItem = ({ item }: any) => <CartItem product={item} />

  const renderFooter = () => (
    <View style={{ backgroundColor: '#fff' }} >
      <Text style={styles.footer_info}>Önerilen Ürünler</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces>
        {
          products.map((item, idx) => <ProductCard item={item} key={idx} />)
        }
      </ScrollView>

    </View>
  );

  
  
  return (
    <View style={styles.main_container} >

      <FlatList
        key={key}
        data={cart ? cart : []}
        renderItem={renderedItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ borderBottomColor: colors.light_gray, borderBottomWidth: 1, }} />}
        ListFooterComponent={renderFooter}
        ListFooterComponentStyle={styles.footer_container}
      />
      <KeepGoing />

    </View>
  )
}

export default Cart

