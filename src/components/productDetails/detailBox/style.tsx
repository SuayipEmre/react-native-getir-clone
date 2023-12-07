import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";
const { width, height } = Dimensions.get('window')


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