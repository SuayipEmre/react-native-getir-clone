import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { setActivevalue } from '../../../redux/features/campaings/actions'
import { useActiveValue } from '../../../redux/features/campaings/hooks'


const headerInfo = [
    {
        id: 1,
        title: 'Kampanyalar'
    },
    {
        id: 2,
        title: 'Duyurular'
    }
]

const CampaignsHeader = () => {
    const activeValue = useActiveValue()
    return (
        <View>


            <View style={styles.container}>
                {
                    headerInfo.map(item => (
                        <TouchableOpacity key={item.id} style={[activeValue == item.title ? styles.active_item_container : styles.inactive_item_container]} onPress={() => setActivevalue(item.title)}>
                            <Text style={[activeValue == item.title ? styles.active_text : styles.inactive_text]}>{item.title}</Text>
                        </TouchableOpacity>


                    ))
                }
            </View>

           


        </View>
    )
}

export default CampaignsHeader
