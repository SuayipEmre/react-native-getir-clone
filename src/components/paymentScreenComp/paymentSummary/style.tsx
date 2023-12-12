import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";

const{width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        width : width,
        backgroundColor :'#fff',
        padding : 12,
        gap :12,
        
    },
    campaign_container:{
        flexDirection :'row',
        alignItems :'center',
        paddingHorizontal :12,
        justifyContent:'space-between',
        borderBottomWidth :.5,
        borderBottomColor : colors.light_gray,
        paddingBottom: 12,
    },
    campaign_content:{
        flexDirection :'row',
        alignItems :'center',
        gap : 20,
         
    },
    campaign_icon:{
        backgroundColor : colors.light_purple,
        padding :10,
        borderRadius : 6,
    },
    campaign_text:{
        fontWeight :'500'
    },
    bill_container:{
        flexDirection :'row',
        alignItems :'center',
        paddingHorizontal :12,
        gap :20,
        borderBottomWidth :.5,
        borderBottomColor : colors.light_gray,
        paddingBottom: 12,
    },
    plus_icon_container: {
        padding :10,
        borderRadius : 6,
        backgroundColor :'#fff',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowColor: colors.purple,
        shadowOpacity: .25,
        borderWidth: .7,
        borderColor : '#f5f5f5'
    },
    add_bill_info_text:{
        color : colors.purple,
        fontWeight :'500'
    },
})
