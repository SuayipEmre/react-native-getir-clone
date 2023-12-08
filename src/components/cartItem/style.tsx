import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const { width, height } = Dimensions.get('window')


export default StyleSheet.create({
    wrapper:{
        width: width,
        alignItems : 'center',
        backgroundColor: '#fff',

    },
    container:{
        width : width * 0.92,
        marginBottom : 10,
     
    },
    content_container: {
        backgroundColor: '#fff',
        
        height: height * 0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image_container: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },

    image: {
        width: '80%',
        height: '50%',
        borderWidth: 2,
        borderColor: '#F5F5F5',
        borderRadius: 14,
    },

    product_info_container: {
        width: '45%',
    },
    product_name:{
        width : width * 0.45
    },
    price_container: {
        flexDirection: 'row',
    },
    old_price: {
        fontSize: 14,
        color: colors.gray,
        textDecorationLine: 'line-through'
    },
    new_price: {
        color: colors.purple,
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 4,
    },
    quantity_container: {
        width: '30%',
        height: height * 0.05,
        backgroundColor : '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 3.8,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginRight : 12,
        borderRadius :12,
        shadowColor: colors.purple,
        shadowOpacity: 0.3,
        elevation: 8, // Android için gölge efekti
    },
  
  
   
})
