import { StyleSheet} from "react-native";
import colors from "../../../styles/colors";



export default StyleSheet.create({
    container: {
        alignItems:  'center',
        paddingVertical : 15,
        backgroundColor : '#fff',
    },
    price:{
        fontSize : 17,
        fontWeight : 'bold',
        color:  colors.purple,
        marginBottom : 3,
    },
    name : {
        fontWeight : '600',
        fontSize : 17,
    },
    quantity:{
        color : colors.gray,
        marginTop :4,
    },
})