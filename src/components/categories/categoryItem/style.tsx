import { StyleSheet, Dimensions } from "react-native";
const{width, height} = Dimensions.get('window')
export default StyleSheet.create({
    main_container:{
        width : width  / 4,
        height : height* 0.13 ,
        alignItems :'center',
    },
    
    image:{
        width : width * 0.18,
        height : height * 0.10,
        resizeMode :'contain',
        backgroundColor : 'transparent',
        borderRadius : 13,

    },
    info_text:{
        fontSize : 12,
        color : '#000',
        fontWeight : '500',
    }

})
