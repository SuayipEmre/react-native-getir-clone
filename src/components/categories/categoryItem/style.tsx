import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";
const{width, height} = Dimensions.get('window')
export default StyleSheet.create({
    main_container:{
        width : width  / 4.2,
        height : height* 0.11 ,
        alignItems :'center',
        justifyContent : 'space-between',
    
    },
  
   
    image:{
        width : width * 0.20,
        height : height * 0.08,
        resizeMode :'stretch',

    },
    info_text:{

        height : '20%',
        fontSize : 12,
        color : '#000',
        fontWeight : '500',
    }

})
