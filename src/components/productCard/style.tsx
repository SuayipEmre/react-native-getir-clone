import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";
const {width, height} = Dimensions.get('window')

export default StyleSheet.create({
   container:{
        width : width * 0.28,
        height : height * 0.20,
        marginLeft : 12,
        marginTop : 12,
        marginRight : 8,

    },
    active_image_container:{
        borderWidth : .7,
        borderColor : colors.purple,
        borderRadius : 12,
    },
    image:{
        width : '100%',
        height : height * 0.10,
        borderRadius : 12,
        borderWidth : 0.2,
        borderColor : 'gray',
        resizeMode : 'contain',
    
    },
    price_container:{
        marginTop : 12,
        flexDirection :'row',
        alignItems :'center',
    },
    
    old_price:{
        fontSize : 12,
        color : colors.gray,
        textDecorationLine : 'line-through'
    },
    new_price:{
        color : colors.purple,
        fontWeight : '600',
        fontSize : 14,
        marginLeft : 4,
    },
    brand_text:{
       fontSize :13,
       fontWeight : '500', 
       marginTop : 5,
    },
    product_quantity:{
        fontSize : 12,
        marginTop : 5,
        color : colors.gray
    },
    plus_icon:{
        width :37,
        height : 37,
        borderWidth : .3,
        borderColor : 'lightgrey',
        backgroundColor :'#fff',
        position : 'absolute',
        top : -10,
        right : -10,
        borderRadius : 8,
        alignItems : 'center',
        justifyContent :'center',
        shadowRadius : 3.8,
        shadowOpacity : 0.11
    }


})
