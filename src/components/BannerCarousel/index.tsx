import { FlatList, Image, Dimensions, View } from 'react-native'
import React from 'react'
import homepageBanner, { bannerImageType } from '../../../assets/homepageBanner'


const { width, height } = Dimensions.get('window')


const BannerCarousel: React.FC = () => {
  const renderedItem = ({ item }: { item: bannerImageType }) => (
    <View  style={{ width: width, height: height / 4, alignItems :'center', marginTop:4,}}>
      <Image
        source={{ uri: item.img }}
        style={{ width: '90%', height : '100%', resizeMode: 'stretch', borderRadius : 13, }}
      />
    </View>
  )
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={homepageBanner}
      renderItem={renderedItem}
      snapToInterval={width}
      snapToAlignment='center'
      decelerationRate={'normal'}

    />
  )
}

export default BannerCarousel
