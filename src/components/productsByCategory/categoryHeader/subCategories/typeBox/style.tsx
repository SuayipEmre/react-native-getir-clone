import { StyleSheet } from "react-native"
import colors from "../../../../../styles/colors"

export default StyleSheet.create({
    btn_container:{
        paddingHorizontal : 10,
        flexDirection : 'row',
        alignItems : 'center' ,
        height : '50%',
        borderRadius : 7,
        borderWidth : .5,
        borderColor : '#c1c1c1',
        marginHorizontal : 4,
    },
    active_container:{
        backgroundColor : colors.purple,
        color : '#fff'
    },
    active_text :{
        color :'#fff'
    },
    text:{
        fontSize : 13,
        color : colors.purple,
        fontWeight :'400',
    }
})