import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ContentItem from './contentItem'
import { ContentInfo } from './constants'
import ContentBody from './contentBody'
import colors from '../../../styles/colors'





const DetailContent = () => {
  const [active, setActive] = useState<string>("Ingredients",)




  const renderedItem = ({ item }: any) => <ContentItem active={active} setActive={setActive} detail={item} />

  return (
    <View>

      <View style={styles.container}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ContentInfo}
          keyExtractor={(item) => item.originalTitle}
          renderItem={renderedItem}
        />
      </View>


      <ContentBody active={active} />

    </View>
  )
}

export default DetailContent


const styles = StyleSheet.create({
  container: {
    backgroundColor :'#fff',
    shadowRadius: 10,
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowColor: colors.gray,
    shadowOpacity: 0.3,
  },
})




