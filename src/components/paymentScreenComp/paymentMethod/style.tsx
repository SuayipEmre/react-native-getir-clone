import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";
import shadows from "../../../styles/shadows";
const { width, height } = Dimensions.get('window')


const base_style = StyleSheet.create({
    radio: {
        width: '80%',
        height: '80%',
        borderRadius: 20,
    },
    container : {
        alignItems: 'center',
        backgroundColor :'#fff',
        justifyContent: 'center',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowColor: colors.purple,
            shadowOpacity: .40,
            borderWidth: 1,
            borderColor: '#f5f5f5',
            marginLeft :5,
    }
})


export default StyleSheet.create({
    container: {
        width: width,
        height: height * 0.2,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    content_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBlockColor: '#f5f5f5',
        paddingVertical: 9,
        marginBottom :12,
    },
    radio_container: {
        width: 25,
        height: 25,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#f5f5f5',
        marginRight : 5,
    },
    active_radio: {
        ...base_style.radio,
        backgroundColor: colors.purple
    },
    radio:{
        ...base_style.radio,
        backgroundColor :'#fff'
    },
    
    mid_content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    istanbul_text:{
        fontSize :13,
        fontWeight :'500'
        
    },

    card_icon_container: {
        paddingVertical: 6,
        paddingHorizontal: 3,
        ...base_style.container,
      
    },
    icon_container:{
        ...base_style.container,
        paddingHorizontal: 5,
    },
    card_info_text: {
        fontWeight: '500'
    },
    info_number: {
        color: colors.gray,
    },


    btn: {
        borderWidth: 1,
        borderColor: colors.purple,
        paddingVertical: 10,
        borderRadius: 5,
        paddingHorizontal: 4,

    },
    btn_text: {
        color: colors.purple,
        fontWeight: 'bold',
    },


    plus_icon_container: {
        paddingVertical : 4,
        paddingHorizontal : 8,
        backgroundColor :'#fff',
        borderRadius : 3,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowColor: colors.purple,
        shadowOpacity: .25,
        borderWidth: .7,
        borderColor : '#f5f5f5'
    },
    bkm_text:{
        color : colors.purple,
        fontWeight : '600'
    },

})
