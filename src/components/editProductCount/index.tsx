import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import colors from '../../styles/colors'
import styles from './style'


const EditProductCount: React.FC = () => {

    const [productCount, setProductCount] = useState<number>(1)

    const handleEditCart = (status: string) => {
        switch (status) {
            case 'inc':
                setProductCount(prev => prev + 1)
                break;
            case 'dec':
                productCount > 0 && setProductCount(prev => prev - 1)
                break
            default:
                break;
        }
    }



    return (
        <View style={styles.container}>

            <TouchableOpacity activeOpacity={.9} onPress={() => handleEditCart('dec')} style={styles.minus_container} >
                <Entypo name="minus" size={24} color={colors.purple} />
            </TouchableOpacity>

            <View style={styles.count_container}>
                <Text style={styles.count}>{productCount}</Text>
            </View>

            <TouchableOpacity activeOpacity={.9} onPress={() => handleEditCart('inc')} style={styles.plus_container}>
                <Entypo name="plus" size={20} color={colors.purple} />
            </TouchableOpacity>
        </View>
    )
}

export default EditProductCount
