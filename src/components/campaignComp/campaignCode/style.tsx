import { Dimensions, StyleSheet } from 'react-native'
import shadows from '../../../styles/shadows'
import colors from '../../../styles/colors'
const { width, height } = Dimensions.get('window')



export default StyleSheet.create({
    campaign_code_wrapper: {
        alignItems: 'center',
        marginTop: 14,
        width: width * 0.95,
        height: height * 0.08,
    },
    campaign_code_container: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: 'white'
    },
    icon_container: {
        paddingVertical : 4,
        paddingHorizontal : 8,
        backgroundColor :'#fff',
        ...shadows.border_shadow,
        borderRadius : 3,
    },
    add_text:{
        color :colors.purple,
        fontSize : 14,
        fontWeight : '600',
    },



})