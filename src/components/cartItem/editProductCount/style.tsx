import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export default StyleSheet.create({
    quantity_content: {
        gap: 10,
        width: '70%',
        height :'100%',
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    count_container: {
        backgroundColor: colors.purple,
        width: '70%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    count: {
        color: '#fff',
    },
})