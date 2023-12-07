import { Dimensions, FlatList, Image, View } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './style'

type propsType = {
    images: Array<string>
}

const { width} = Dimensions.get('window')

const ImageCarousel: React.FC<propsType> = ({ images }) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const renderedItem = ({ item }: any) => (
        <Image
            source={{ uri: item }}
            style={styles.images}
        />
    )


    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

    const onViewRef = useRef((viewableItems : any) => {
        if(viewableItems.viewableItems.length){
            setActiveIndex(viewableItems.viewableItems[0].index || 0)
        }
    })


    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width / 2}
                snapToAlignment='center'
                decelerationRate='fast'
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                style={styles.images_container}
                data={images}
                renderItem={renderedItem}

            />

            <View style={styles.dot_container}>
                {
                    images.map((item ,idx) => (
                        <View style={[styles.dot, activeIndex == idx && styles.active_index]} key={idx}></View>
                    ))
                }
            </View>
        </View>
    )


}

export default ImageCarousel
