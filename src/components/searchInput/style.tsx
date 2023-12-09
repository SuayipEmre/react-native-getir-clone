import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const screen = Dimensions.get('screen').height

export default StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        height: screen * 0.06,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowColor: colors.gray,
        shadowOpacity: 0.3,
    },
    content_container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    icon:{
        paddingRight :6,
    },
    input: {
        flex: 1,

    }
})
