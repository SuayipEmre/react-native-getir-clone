import { StyleSheet, Platform } from "react-native";
import colors from "../../../../styles/colors";

export default StyleSheet.create({
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
