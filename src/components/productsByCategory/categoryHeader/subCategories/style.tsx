import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../../styles/colors";

const { height } = Dimensions.get('window')



export default StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        marginBottom: 12,
        height: height * 0.07,
        shadowRadius: 3.8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowColor: colors.gray,
        shadowOpacity: .3
    },
    scrool_container: {
        alignItems: 'center',
        paddingHorizontal: 4,
        
    },
    btn_container: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 7,
        borderWidth: .5,
        borderColor: '#c1c1c1',
        marginHorizontal: 4,
        paddingVertical: 8,
    },
    active_container: {
        backgroundColor: colors.purple,
        color: '#fff'
    },
    active_text: {
        color: '#fff'
    },
    text: {
        fontSize: 13,
        color: colors.purple,
        fontWeight: '400',
    }
})