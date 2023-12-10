import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    container:{
        flex :1,
        backgroundColor :'#fff'
    },
    title:{
        paddingHorizontal:10,
        paddingVertical: 15,
        color:colors.gray,
        fontWeight : '600',
    }
})