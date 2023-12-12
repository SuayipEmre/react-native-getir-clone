import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../../styles/colors";

const{width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        width : width,
        alignItems :'center',
        marginTop : 25,
    },
    quantity_info:{
        width :'90%',
        borderWidth  :1,
        borderColor : '#E6E6FA',
        borderRadius : 8,
        paddingVertical :12,
        alignItems :'center',
        justifyContent :'center'
    },
    quantity:{
        color : colors.purple,
        fontSize : 12,
    },
    values_main_container:{
        width :'90%',

    },
    values_container:{
        flexDirection :'row',
        justifyContent :'space-between',
        borderBottomWidth : 1,
        borderColor : '#E6E6FA' ,
        paddingVertical:  5,     
        marginVertical : 4, 
    },
    text:{
        color : colors.gray,
        fontSize : 11,
    },
})
