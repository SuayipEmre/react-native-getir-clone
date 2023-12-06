import { Dimensions, StyleSheet } from "react-native";

const{height} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : '#7849f7',
        height : height * 0.065,
    },
})
