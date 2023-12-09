import { TouchableOpacity, Text } from "react-native"
import styles from "./style"
import React from "react"

type TypeBoxType =  {
  item: string,
  active: string,
  setCategory : any
}

const TypeBox : React.FC<TypeBoxType> = ({ item, active, setCategory }) => {
  return (
    <TouchableOpacity activeOpacity={.8} style={[styles.btn_container, item == active && styles.active_container ]} onPress={() => setCategory(item)}>
      <Text style={[styles.text, item == active && styles.active_text]}>{item}</Text>
    </TouchableOpacity>
  )
}

export default TypeBox