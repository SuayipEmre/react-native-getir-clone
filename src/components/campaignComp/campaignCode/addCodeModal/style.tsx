import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../../styles/colors";
const { width, height } = Dimensions.get('window')


const base_button_style = StyleSheet.create({
    container: {
        width: '47.5%',
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color :'#fff'
    }
})

export default StyleSheet.create({
    
    container:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex :1,
    },
    modalView: {
        position: 'absolute',
        top: '40%', 
        width : width * 0.98,
        borderRadius : 6,
        backgroundColor :'#fff',
        marginHorizontal : 12,        
        height : height * 0.20 ,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingHorizontal :12,
        justifyContent :'space-between',
        paddingVertical :12,
    },
    input_container:{
        paddingVertical :12,
        borderBottomWidth :1,
        borderBottomColor :colors.light_gray,
        marginTop : 5,

    },
    input :{
        fontSize : 15,
        fontWeight :'500',
    },
    button_container:{
        flexDirection :'row',
        gap :12,
    },
    close_btn:{
        ...base_button_style.container,
        backgroundColor : '#A9A9A9'
    },
    save_btn:{
        ...base_button_style.container,
        backgroundColor : colors.purple,
    },
    btn_text:{
        ...base_button_style.text,
    }
})