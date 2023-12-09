import { Text, TextInput, View } from 'react-native'
import React from 'react'
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons'
import colors from '../../styles/colors'
import styles from './style'
const SearchInput = () => {
    return (
        <View style={styles.wrapper}>
            <View style={ styles.content_container}>
                <EvilIcons name="search" style={styles.icon} size={30} color={colors.purple} />
                <TextInput placeholderTextColor={colors.gray} selectionColor='#FFD301' style={styles.input} autoCapitalize='none' autoCorrect={false} placeholder='Ürün Ara' />
                <FontAwesome5 name="microphone-alt" size={22} color={colors.gray} />
            </View>
        </View>
    )
}

export default SearchInput
