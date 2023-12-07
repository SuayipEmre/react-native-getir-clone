import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { productType } from '../../models'
import ImageCarousel from '../../components/productDetails/imageCarousel'
import colors from '../../styles/colors'
import DetailBox from '../../components/productDetails/detailBox'
import styles from './style'
import DetailContent from '../../components/productDetails/detailContent'
import Button from '../../components/productDetails/addToCartButton'

const ProductDetails: React.FC<any> = ({ route }) => {
  const [product, setProduct] = useState<productType>()



  useEffect(() => {
    setProduct(route.params.product)
  }, [])

  if (!product) return <ActivityIndicator color={colors.purple} />

  return (
    <View style={styles.container}>
      <ScrollView >
        <ImageCarousel images={product?.images} />
        <DetailBox quantity={product.miktar} name={product.name} price={product.fiyat} />

        <Text style={styles.title}>Detaylar</Text>

        <DetailContent />

      </ScrollView>
      <Button />
    </View>
  )
}

export default ProductDetails
