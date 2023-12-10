import { Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo, Ionicons } from '@expo/vector-icons'


const HeaderMain : React.FC = () => {
    return (
        <View style={styles.header_main}>

            <View style={styles.header_one}>
                <Ionicons name="md-home-outline" size={18} color="black" />

                <View style={styles.header_one_container}>
                    <Text style={{ fontWeight: '600', fontSize: 15 }}>Ev</Text>
                    <Text style={{ fontSize: 12 }}>bilmme ne mahallesi bilmem...</Text>
                    <Entypo name="chevron-right" size={21} color="#5d3ebd" />

                </View>

            </View>

            <View style={styles.header_two}>
                <Text style={{ color: '#5d3ebd', fontSize: 10, fontWeight: 'bold' }}>TVS</Text>
                <Text style={{ color: '#5d3ebd', fontSize: 17, fontWeight: 'bold' }}>15 dk</Text>
            </View>



        </View>
    )
}

export default HeaderMain
