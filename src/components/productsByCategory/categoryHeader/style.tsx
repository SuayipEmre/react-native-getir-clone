import { Dimensions, StyleSheet, Platform } from "react-native";
import colors from "../../../styles/colors";

const{height} = Dimensions.get('window')

export default StyleSheet.create({
    main_container:{
        flex : 1,
        backgroundColor : '#7849f7',
        height : height * 0.065,
    },

    container: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    active_text: {
        paddingVertical: 4,
        ...Platform.select({
            ios: {
              color : colors.yellow,
            },
            android: {
                borderBottomColor: colors.yellow,
                borderBottomWidth: 1,
            },
        })
    },
})
