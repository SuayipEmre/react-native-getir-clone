import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 12,
        marginTop: 4,

    }
})