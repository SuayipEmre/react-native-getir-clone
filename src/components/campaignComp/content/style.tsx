import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import shadows from "../../../styles/shadows";

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    wrapper: {
        width: width,
        alignItems: 'center',
        marginTop: 8,
        flex: 1,
        marginBottom :12,

    },
    content_container: {
        width: width * 0.95,
        height: height * 0.45,
        marginTop: 12,
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        borderRadius: 12,
        shadowRadius: 3.8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowColor: colors.purple,
        shadowOpacity: 0.1,

    },
    image_container: {
        width: '100%',
        height: '60%',
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },


    bottom_container: {
        marginTop: 12,
    },

    title: {
        fontSize: 14,
        color: colors.purple,
        fontWeight: 'bold',
        width: '90%'
    },
    subtitle: {
        marginTop: 12,
        width: '90%'
    },
    icon_container: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        ...shadows.border_shadow,
        borderRadius: 10,
       alignSelf :'flex-end'

    },
})