import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors";
const { width, height } = Dimensions.get('window')


const base_style = StyleSheet.create({
    container: {
        width: '47.5%',
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: '600',
        fontSize: 15,
    }
})


export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.06,
        width: width

    },
    active_item_container: {
        ...base_style.container,
        backgroundColor: '#f2f0fe',
    },
    active_text: {
        ...base_style.text,
        color: colors.purple,
    },
    inactive_item_container: {
        ...base_style.container,
        backgroundColor: '#fff'
    },
    inactive_text: {
        ...base_style.text,
        color: colors.gray
    },

 
})
