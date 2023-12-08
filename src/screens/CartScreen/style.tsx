import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    main_container: { 
        flex: 1,
         backgroundColor: '#f5f5f5' 
    },
    footer_container: { paddingBottom: 80, },
    footer_info: {
        backgroundColor: '#f5f5f5',
        paddingVertical : 12,
        color: colors.purple,
        fontWeight: '600',
        fontSize: 13,
        paddingHorizontal: 12,
        marginVertical: 5,
    },
})
