import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";

const { height} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
      marginTop :12,
      backgroundColor :'#fff',
      gap : 17,

    },
    content_container:{
        flexDirection : 'row',
        alignItems :'center',
        justifyContent :'space-between',
        paddingHorizontal: 15,
        height : height * 0.07,
    },
    info_container:{
        flexDirection :'row',
        alignItems :'center',
        gap : 12,
    },
    icon_container:{
        borderWidth : 2,
        padding :1,
        borderRadius : 15,
        borderColor: colors.purple
    },
    right_icon:{
        fontWeight : 'bold',
    },
    content_footer_border:{
        borderWidth : 1,
        borderColor : '#f5f5f5'

    }
})