import { Dimensions, StyleSheet } from "react-native";
import shadows from "../../styles/shadows";
import colors from "../../styles/colors";
const { height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        backgroundColor :'#fff',
        width : 35,
        height : height * 0.10,
        alignItems :'center',
        justifyContent :'center',
        ...shadows.border_shadow,
        borderRadius : 6,
        
    },
    minus_container:{
        flex :1,
    },
    count_container:{
        backgroundColor : colors.purple,
        width : '100%',
        alignItems :'center',
        justifyContent :'center',
        flex :1,
    },
    count:{
        color : '#fff'
    },
    plus_container:{
        flex :1,
    },
})
