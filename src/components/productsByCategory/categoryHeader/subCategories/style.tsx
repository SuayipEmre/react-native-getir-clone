import { StyleSheet, Dimensions } from "react-native";

const{width, height}= Dimensions.get('window')



export default StyleSheet.create({
    container : {
        height : height * 0.06,
        alignItems : 'center',
        paddingHorizontal : 4,
        backgroundColor : '#fff',
        borderBottomWidth :.3,
        borderBottomColor : 'gray',
        marginBottom:11,
        
    },
})