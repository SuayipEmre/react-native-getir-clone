import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../components/profileComp/login'
import ContentBody from '../../components/profileComp/contentBody'
import FooterInfo from '../../components/profileComp/footer'
import LetsGetStartedModal from '../../components/profileComp/letsGetStartedModal'

const Profile = () => {
  return (
    <View style={{ flex: 1, }}>
      <Login />
      <ContentBody />
      <Text style={styles.info}>Language - Dil</Text>
      <FooterInfo text='Language - Dil' />
      <Text style={styles.info}>Versiyon</Text>
      <FooterInfo text='2.17.20' />
      <LetsGetStartedModal />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  info : { color: 'gray', marginTop: 14, marginLeft: 14, }
})