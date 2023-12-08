import React from 'react'
import { FlatList, View, Text, ScrollView } from 'react-native'
import CartItem from '../../components/cartItem'
import products from '../../../assets/products'
import colors from '../../styles/colors'
import KeepGoing from '../../components/keepGoing'
import ProductCard from '../../components/productCard'
import styles from './style'


const Cart = () => {

  const renderedItem = ({ item }: any) => <CartItem product={item} />

  const renderFooter = () => (
    <View  >
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
        data={products.slice(0, 4)}
        renderItem={renderedItem}
        ItemSeparatorComponent={() => <View style={{ borderBottomColor: colors.light_gray, borderBottomWidth: 1, }} />}
        ListFooterComponent={renderFooter}
        ListFooterComponentStyle={styles.footer_container}
      />
      <KeepGoing />

    </View>
  )
}

export default Cart

