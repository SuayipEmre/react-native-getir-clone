import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";
const { height } = Dimensions.get('screen')
export default StyleSheet.create({
    header_main: {
        height: height * 0.05,
        backgroundColor: '#ffd301',
        flexDirection :'row',
        alignItems : 'center',
        justifyContent :'space-between',
    },

    home_info_container: {
        width: '75%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#fff',
        justifyContent :'space-between',
        paddingHorizontal : 10,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,

    },
    image: {
        width: 30,
        height: 30,
    },

    info_content:{
        flexDirection :'row',
        alignItems :'center',
        justifyContent :'space-between',
        gap: 4,
    },
    home_text:{
         fontWeight: '600',
          fontSize: 15 ,
          color : colors.purple,
    },

    time_container : {
        paddingHorizontal : 12,
        alignItems : 'center',
        justifyContent : 'center',
        width : '25%',
    }
  
})