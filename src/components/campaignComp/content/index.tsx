
import { Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo } from '@expo/vector-icons'
import CampaignCode from '../campaignCode'
import { useActiveValue, useCampaignContent } from '../../../redux/features/campaings/hooks'

const CampaignsContent = () => {

    const content = useCampaignContent()

    //active value  can be announcements(duyurular) or campaigns(kampanyalar)
    const activeValue = useActiveValue()

    const renderItem = ({ item }: any) => (

        <View style={styles.content_container}>


            <View style={styles.image_container}>
                <Image style={styles.image} source={{ uri: item.img }} />
            </View>

            <View style={styles.bottom_container}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subtitle} >{item.subtitle}</Text>

                <View style={styles.icon_container}>
                    <Entypo name="chevron-right" size={21} color="#5d3ebd" />
                </View>
            </View>


        </View>
    )


    const renderHeaderElement = () => {
      return activeValue == 'Kampanyalar' ? <CampaignCode /> : null
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                ListHeaderComponent={renderHeaderElement}
                showsVerticalScrollIndicator={false}
                bounces
                data={content}
                renderItem={renderItem}
            />


        </View>
    )
}

export default CampaignsContent