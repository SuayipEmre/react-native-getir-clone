import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const{width, height} = Dimensions.get('window')



const login_options_base = StyleSheet.create({

    container: {
        flexDirection : 'row',
        width : width * 0.9,
        alignItems :'center',
        justifyContent :'center',
        marginVertical : 6,
        paddingVertical : 13,
        borderRadius : 8,
        gap : 12,
    },
    
})



export default StyleSheet.create({

    container:{
        height : height,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
   
    modalView: {
        position: 'absolute',
        bottom : 0,
        width: width ,
        height : height / 1.9 ,
        alignSelf: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems  :'center',
        paddingVertical :15,
        paddingHorizontal : 8,
        gap : 12,
    },
    title:{
        color : colors.purple,
        fontSize : 18,
        fontWeight : 'bold',
        marginTop :15,
    },
    info_text:{
        textAlign :'center',
        color : colors.gray,
        marginTop :7
    },
    login_options_container:{
        borderWidth :1,
        borderColor : colors.purple,
        ...login_options_base.container        
    },
    login_options_text:{
        color : colors.purple,
        fontWeight :'bold'
    },
    tel_container:{
        ...login_options_base.container ,
        backgroundColor : colors.purple
    },
    tel_text:{
        color :'#fff',
    },
    or_section_container:{
        width : width * 0.9,
        flexDirection : 'row',
        alignItems :'center',
        gap :5,
    },
    or_section_border:{
        width : '45%',
        height :3,
        borderBottomWidth : 1,
        borderColor : colors.light_gray,
        opacity : .3,
    },
    or_section_text:{
        color : colors.gray,
        fontSize : 15,
    },
    continue_as_a_guest:{
        position : 'absolute',
        bottom :25,
        color : colors.gray
    }

})