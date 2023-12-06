import { StyleSheet, Dimensions } from "react-native";
const{width, height} = Dimensions.get('window')
export default StyleSheet.create({
    main_container:{
        width : width  / 4,
        alignItems :'center',
    },
    
    image:{
        width : width * 0.18,
        height : height * 0.18,
        resizeMode :'contain',

    },
    info_text:{
        fontSize : 12,
        color : '#616161',
        fontWeight : '500',
    }

})
