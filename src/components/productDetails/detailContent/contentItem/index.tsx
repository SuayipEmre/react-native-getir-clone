import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './style'

const ContentItem: React.FC<any> = ({ detail, setActive, active }) => {


  const handlePress = () => setActive(detail.originalTitle)

  
  return (
    <View style={[active == detail.originalTitle && styles.active_text_container]}>
      <TouchableOpacity style={styles.container} activeOpacity={.9} onPress={handlePress}>
          <Text style={styles.text}>{detail.text} </Text>
      </TouchableOpacity>


    </View>
  )
}

export default ContentItem
