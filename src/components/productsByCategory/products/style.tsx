import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../styles/colors";
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    top_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    bottom_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 12,
        marginTop: 4,

    },
    title: {
        color: colors.gray,
        fontSize: 14,
        fontWeight: '600',
        marginTop: 12,
        marginLeft: 6,

    },
})