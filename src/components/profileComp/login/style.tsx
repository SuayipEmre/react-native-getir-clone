import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";

const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        backgroundColor : '#fff',
        height : height * 0.07,
        justifyContent : 'center',
        shadowRadius: 3.8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: colors.purple,
        shadowOpacity: 0.2,
    },
    content_container:{
        flexDirection : 'row',
        alignItems :'center',
        justifyContent :'space-between',
        paddingHorizontal: 15,
    },
    info_container:{
        flexDirection :'row',
        alignItems :'center',
        gap : 12,
    },
    right_icon:{
        fontWeight : 'bold',
    }
})