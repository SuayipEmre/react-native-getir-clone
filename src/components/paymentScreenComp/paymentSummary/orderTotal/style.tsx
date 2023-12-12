import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../styles/colors";


const{width, height} = Dimensions.get('window')


const base_style = StyleSheet.create({
    content :{
        flexDirection :'row',
        alignItems :'center',
        justifyContent :'space-between',
        marginBottom :18,
    }
})

export default StyleSheet.create({
    container:{
        paddingHorizontal :8,
    },
    header:{
        flexDirection :'row',
        alignItems: 'center',
        gap :10,
        marginBottom: 10,
    },
    close_content_header :{
        justifyContent :'space-between'
    },
    title:{
        fontWeight :'500',
        fontSize :13,
    },
    btn:{
        backgroundColor :colors.light_purple,
        padding :2,
        borderRadius : 20
    },

    content:{
        borderWidth : .4,
        borderColor :colors.light_gray,
        borderRadius :10,
        paddingVertical: 12,
    },
    content_item:{
      ...base_style.content,
      paddingHorizontal : 8,

    },
    price_detail:{
        ...base_style.content,
        backgroundColor : colors.light_purple,
        width :'100%',
        paddingVertical :7,
    },
    price_detail_text:{
        color : colors.purple,
        fontWeight :'500',
    },
    content_item_text:{
        color : colors.gray,
        fontWeight :'500'
    },
    sub_total_text:{
        fontWeight :'600',
    },
    free_delivery:{
        backgroundColor :colors.light_purple,
        flexDirection : 'row',
        paddingHorizontal:  4,
        paddingVertical :12,
        alignItems :'center',
        gap :12,
    borderRadius :8,        
    },
    total_info_container:{
        marginTop :12,
        flexDirection : 'row',
        alignItems :'center',
        justifyContent :'space-between',
        backgroundColor :colors.light_purple,
        padding :14,
    },
    total_info_text:{
        color : colors.purple,
        fontWeight : '500'
    },
    total_info:{
        color : colors.purple,
        fontWeight : 'bold',
        fontSize : 16,
    },
    contractInformation:{
        marginTop :12,
        flexDirection :'row',
        gap : 12,
        alignItems :'center'
    },
})
