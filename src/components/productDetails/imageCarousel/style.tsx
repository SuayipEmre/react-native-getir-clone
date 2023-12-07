import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    container: {
        alignItems: 'center',
        height: height / 4,
        backgroundColor: '#fff',

    },
    images_container: {
        width: width / 2,
    },
    images: {
        width: width / 2,
        height: 150,
        resizeMode : 'stretch'
    },
    dot_container:{
        flexDirection: 'row',
        gap : 4,
    },
    dot:{
        width : 8,
        height : 8,
        borderRadius : 4,
        backgroundColor : colors.light_gray,
        marginBottom :5,
    },
    active_index:{
        backgroundColor : colors.purple,

    },
})
