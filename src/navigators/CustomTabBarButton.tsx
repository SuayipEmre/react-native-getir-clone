import { Entypo } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity } from "react-native"
import colors from "../styles/colors"

const CustomtabBarButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Entypo name='list' size={32} color={colors.yellow} />
        </TouchableOpacity>
    )
}


export default CustomtabBarButton


const styles = StyleSheet.create({
    container:{
        width : 60,
        height : 60,
        backgroundColor : colors.purple,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 30,
        marginTop : -8,
        borderWidth : 2,
        borderColor :'#fff'
    }
})