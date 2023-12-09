import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../styles/colors";

const{width, height}= Dimensions.get('window')



export default StyleSheet.create({
    container : {
        height : height * 0.06,
        alignItems : 'center',
        paddingHorizontal : 4,
        backgroundColor : '#fff',
        borderBottomWidth :.3,
        borderBottomColor : 'gray',
        marginBottom:11,
        
    },
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