import { Entypo } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import colors from "../../styles/colors"

const CustomtabBarButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn_container}>
                <Entypo name='list' size={32} color={colors.yellow} />
            </TouchableOpacity>
        </View>
    )
}


export default CustomtabBarButton


const styles = StyleSheet.create({
    
    container:{
        borderWidth :2,
        borderColor :'#fff',
        width : 60,
        height :60,
        borderRadius: 30,
        marginTop: -8,
        shadowColor: colors.purple,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: .1,
        shadowRadius: .5,
        alignItems :'center',
        justifyContent :'center',
        
    },
    btn_container: {
        width: '100%',
        height :'100%',
        backgroundColor: colors.purple,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff'
    }
})