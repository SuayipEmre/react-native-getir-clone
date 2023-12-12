import { StyleSheet, Dimensions,Platform } from "react-native";
import colors from "../../../styles/colors";
const {width, height } = Dimensions.get('window')



const base_container_style = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    content: {
        width : width,
        flexDirection: 'row',
    }
})

export default StyleSheet.create({
    container: {
        ...base_container_style.container,
        height: height * 0.1,
    },

    min_price_info:{
        backgroundColor: colors.light_purple,
        height : '40%',
        width : width,
        alignItems :'center',
        justifyContent :'center',
    },
    min_total:{
        ...base_container_style.container,
        height : height* 0.15,
        
        justifyContent :'flex-end'
    },
    min_total_content:{
        ...base_container_style.content,
        height :'60%'
    },
    content:{
       ...base_container_style.content,
        height :'100%'
    },
    button_container: {
        width: '70%',
        backgroundColor: colors.purple,
        height: '55%',
        marginLeft: 12,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: '#fff',
        fontWeight: 'bold',
    },
    total_price_container: {
        backgroundColor: '#fff',
        width: '30%',
        height : '55%',
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
    new_price:{
        color: colors.purple,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 4,
    }
})


