import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get('screen')
export default StyleSheet.create({
    header_main: {
        height: height * 0.06,
        backgroundColor: '#f7f102',
        flexDirection :'row',
        alignItems : 'center',
        justifyContent :'space-between',
    },

    header_one: {
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: '#fff',
        paddingHorizontal : 5,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    image: {
        width: 30,
        height: 30,
    },
    header_one_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        borderLeftColor : '#f3f2fd',
        borderLeftWidth : 2,
        paddingLeft : 2,
    
    },

    header_two : {
        paddingHorizontal : 12,
        alignItems : 'center',
        justifyContent : 'center',
        width : '20%',
    }
  
})