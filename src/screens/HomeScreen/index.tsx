import React from 'react'
import HeaderMain from '../../components/headerMain'
import { ScrollView, StyleSheet } from 'react-native'
import BannerCarousel from '../../components/BannerCarousel'
import CategoryMain from '../../components/categories/main'


const Home : React.FC = () => {

    return (
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
            <HeaderMain />
            <BannerCarousel />
            <CategoryMain />
        </ScrollView>
    )
}

export default Home


export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5'
    },
})