import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../../../../styles/colors";
const { height } = Dimensions.get('screen')
export default StyleSheet.create({
    
   
    container:{
        paddingVertical : 12,
        marginHorizontal : 12,
    },
    text:{
        color : colors.purple,
        fontWeight : '600',
        fontSize : 14,
        padding :2,
    },
    active_text_container:{
        borderBottomColor : colors.purple,
            borderBottomWidth : 2,
            paddingBottom : 6,
    },
  
})
