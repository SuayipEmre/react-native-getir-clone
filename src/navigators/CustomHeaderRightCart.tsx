import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../styles/colors'
import { useNavigation } from '@react-navigation/native'
import { useCart, useCartTotalPrice } from '../redux/features/cart/hooks'
const { width } = Dimensions.get('window')


const CustomHeaderRight: React.FC = () => {
  const [cartTotalPrice, setCartTotalPrice] = useState(0)
  const totalPrice = useCartTotalPrice()
  const cart = useCart()


  useEffect(() => {
    setCartTotalPrice(totalPrice)
  }, [totalPrice])

  const navigation = useNavigation()
  const handleClick = () => navigation.navigate('Cart')


  return (
    <>
      {
        cart.length > 0 && <TouchableOpacity style={styles.button_continer} activeOpacity={.8} onPress={handleClick}>
          <View style={styles.container}>
            <Image source={require('../../assets/cart.png')} style={styles.image} />
            <View style={styles.content_container}>
              <Text style={styles.price}>{cartTotalPrice.toFixed(2)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      }
    </>
  )
}

export default CustomHeaderRight

const styles = StyleSheet.create({
  button_continer: {
    width: width * 0.25,
    marginRight: 14,
    backgroundColor: 'white',
    height: '100%',
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 8,
  },
  content_container: {
    height: '100%',
    backgroundColor: '#F2F0FE',
    width: '80%',

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

  },
  price: {
    color: colors.purple,
    fontSize: 13,
    fontWeight: '600',
  },


})