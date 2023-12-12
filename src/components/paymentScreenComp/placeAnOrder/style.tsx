import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";
const{width, height} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        height : height * 0.1,
        width : width,
        alignItems: 'center',
        justifyContent :'center',
        paddingVertical :15,
        paddingHorizontal : 12,

    },
    button_container: {
        width: '70%',
        backgroundColor: colors.purple,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    button_text:{
        color : '#fff',
        fontWeight :'500'
    },
    total_price_container: {
        backgroundColor: '#fff',
        width: '30%',
        borderWidth: 1,
        borderColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 2.8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        shadowColor: colors.purple,
        shadowOpacity: 0.3,
        elevation: 8,
    },
})