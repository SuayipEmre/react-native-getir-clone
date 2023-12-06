import {  FlatList, Text, View,Image, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './style'



const {width, height} = Dimensions.get('window')


const BannerCarousel : React.FC = () => {
    const [banners, setBanners] = useState<String[]>([
        "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
        "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
        "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
        "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg"
    ])
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })


    const renderedItem = ({item} : any) => (
        <Image 
        source={{uri: item}} 
        style={{width : width, height : height / 4, resizeMode:'stretch'}} />
    )
    
  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={banners}
    renderItem={renderedItem}

    snapToInterval={width}
    snapToAlignment='center'
    decelerationRate={'fast'}
    />
  )
}

export default BannerCarousel
