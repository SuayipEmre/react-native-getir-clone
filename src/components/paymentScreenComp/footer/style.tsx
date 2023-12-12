import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    container: {
        marginTop :12,
        marginLeft :12,

    },
    text_info: {
        color: colors.gray,
        fontSize: 13,
    },
    content:{
        flexDirection :'row',
        alignItems:'center',
        gap :5,
        marginTop :8,
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
})