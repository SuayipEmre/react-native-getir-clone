import {  FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import homepageBanner, { bannerImageType } from '../../../assets/homepageBanner'


const {width, height} = Dimensions.get('window')


const BannerCarousel : React.FC = () => {
    const renderedItem = ({item} : {item : bannerImageType }) => (
        <Image 
        source={{uri: item.img}} 
        style={{width : width, height : height / 4, resizeMode:'stretch'}} 
        />
    )
  return (
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={homepageBanner}
    renderItem={renderedItem}
    snapToInterval={width}
    snapToAlignment='center'
    decelerationRate={'fast'}

    />
  )
}

export default BannerCarousel
