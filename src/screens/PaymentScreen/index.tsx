import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DeliveryAddressInformation from '../../components/DeliveryAddressInformation'
import OrderNote from '../../components/paymentScreenComp/orderNote'
import PaymentMethod from '../../components/paymentScreenComp/paymentMethod'
import PaymentSummary from '../../components/paymentScreenComp/paymentSummary'
import Footer from '../../components/paymentScreenComp/footer'
import Button from '../../components/cartItem/keepGoing/button'
import PlaceAnOrder from '../../components/paymentScreenComp/placeAnOrder'


const PaymentScreen = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <DeliveryAddressInformation />
        <Text style={styles.text}>Not Ekleyin</Text>
        <OrderNote />
        <Text style={styles.text}>Ödeme Yöntemi</Text>
        <PaymentMethod />
        <Text style={styles.text}>Ödeme Özeti</Text>
        <PaymentSummary />
        <Footer />

        
      </ScrollView>
     <PlaceAnOrder />
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({

  container: {
    paddingBottom: 50,
  },
  text: {
    marginBottom: 7,
    marginTop: 15,
    marginHorizontal: 15,
  },
 
})