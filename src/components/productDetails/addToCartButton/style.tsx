import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";

const { height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        height: height / 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
    },
    button_container: {
        backgroundColor: colors.purple,
        width: '90%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        marginVertical: 15,
    },
    button_text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },

})


