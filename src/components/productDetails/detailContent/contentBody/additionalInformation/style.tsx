import { StyleSheet } from "react-native";
import colors from "../../../../../styles/colors";

export default StyleSheet.create({
    container: {
        alignItems :'center',
        height : 450
    },

    header_coontainer:{
        width: '90%',
    },
    header_info_text:{
        fontSize :13,
        color : colors.gray,
        marginTop:12,
    },
    content: {
        width: '90%',
        marginTop :15,

    },
   
    title:{},
    text:{
        color : colors.gray,
    },
    warning:{
        marginBottom :12,
    },
})
