import React from 'react'
import {  Text, View } from 'react-native'
import styles from './style'


type DetailBoxType= {
    price : number,
    name : string,
    quantity : string
}

const DetailBox : React.FC<DetailBoxType> = ({price, name, quantity}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>₺{price}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  )
}

export default DetailBox
