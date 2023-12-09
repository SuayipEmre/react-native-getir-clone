import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../components/profileComp/login'
import ContentBody from '../../components/profileComp/contentBody'
import LetsGetStartedModal from '../../components/profileComp/letsGetStartedModal'
import Language from '../../components/profileComp/language'
import Version from '../../components/profileComp/version'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Login />
      <ContentBody />

      <Text style={styles.info}>Language - Dil</Text>
      <Language />

      <Text style={styles.info}>Versiyon</Text>
      <Version />
      <LetsGetStartedModal />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container : { flex: 1, },
  info: { color: 'gray', marginTop: 14, marginLeft: 14, }
})