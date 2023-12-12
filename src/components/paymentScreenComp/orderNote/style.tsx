import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";
const{width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        marginTop :17,
        width : width,
        backgroundColor :'#fff'

    },
   
    input_container:{
        height : height * 0.12,   
    },
    input:{
        width :'90%',
        borderBottomColor : colors.light_gray,
        borderBottomWidth : 1,
        alignSelf :'center',
        paddingVertical :14,
        marginTop : 5,
    
    },
    checkbox_container:{
        flexDirection: 'row',
        alignItems:'center',
        gap :12,
        height :'60%', width :'90%',alignSelf :'center',
        paddingVertical :14,
    },
    checkbox_item:{
        flexDirection :'row',
        alignItems:'center',
        gap :6,
        
    },
    checkbox_item_border:{
        borderLeftWidth :1,
        borderLeftColor :'#f5f5f5',
        paddingHorizontal: 12,
    },
    checkbox:{
        borderWidth :1,
        borderColor : colors.purple,
        padding :10,
    },
})
