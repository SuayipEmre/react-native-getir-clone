import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
      marginTop :15,
      backgroundColor :'#fff',
      height : height * 0.07,
      flexDirection :'row',
      alignItems :'center',
      justifyContent  :'space-between',
      paddingHorizontal : 15,
    },
    info_text:{
        fontSize : 14,
        fontWeight : '500'
    },
  
})