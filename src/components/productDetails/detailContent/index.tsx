import { Dimensions, FlatList, Text, View } from 'react-native'
import React, { useState } from 'react'
import ContentItem from './contentItem'

import { ContentInfo, StepByStepContent } from './constants'
import ContentBody from './contentBody'





const DetailContent = () => {
  const [active, setActive] = useState<string>("Ingredients",)

 


  const renderedItem = ({ item }: any) => <ContentItem active={active} setActive={setActive} detail={item} />

  return (
    <View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ContentInfo}
        keyExtractor={(item) => item.originalTitle}
        renderItem={renderedItem}
      />

      <ContentBody  active={active}/>

    </View>
  )
}

export default DetailContent



//active, 

