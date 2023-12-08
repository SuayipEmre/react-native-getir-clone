import { StyleSheet, Dimensions,Platform } from "react-native";
import colors from '../../styles/colors'
const { height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        height: height * 0.1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    button_container: {
     

        backgroundColor: colors.purple,
        height: '55%',
        width: '70%',
        marginLeft: 12,
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_text: {
        color: '#fff',
        fontWeight: 'bold',
    },
    total_price_container: {
        backgroundColor: '#fff',
        width: '25%',
        height : '55%',
        borderWidth: 1,
        borderColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 2.8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        shadowColor: colors.purple,
        shadowOpacity: 0.3,
        elevation: 8,
    },
    old_price: {
        fontSize: 16,
        color: colors.gray,
        textDecorationLine: 'line-through'
    },
    new_price:{
        color: colors.purple,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 4,
    }
})


