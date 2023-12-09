import {   View } from 'react-native'
import React from 'react'
import CampaignsHeader from '../../components/campaignComp/header'
import CampaignsContent from '../../components/campaignComp/content'

const Campaigns : React.FC = () => {
  return (
    <View style={{flex :1,}}>
      <CampaignsHeader />
      <CampaignsContent />
    </View>
  )
}

export default Campaigns
