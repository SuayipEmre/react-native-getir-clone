import React from 'react'
import {  Text,  View} from 'react-native'
import ProductItem from '../productItem'
import styles from './style'
import products from '../../../../assets/products'

const ProductsContainer :  React.FC = () => {

   return (
    <View style={styles.container}>

     
        <View style={styles.top_container}>
           {
            products.slice(0, 2).map((item, idx) => (
                <ProductItem item={item} key={idx} />
            ))
           }
        </View>


        <Text style={styles.title}>Çubuk</Text>

       
        <View style={styles.bottom_container}>
            {
                products.slice(2).map((item, idx) => (
                    <ProductItem item={item} key={idx} />
                ))
            }
        </View>
    </View>
   )


}

export default ProductsContainer
