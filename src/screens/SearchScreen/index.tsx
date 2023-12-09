import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchInput from '../../components/searchInput'
import popularSearches from '../../../assets/popularSearches'
import colors from '../../styles/colors'

const screen = Dimensions.get('screen').height

const Search = () => {
  return (
    <View style={styles.main_container}>
      <SearchInput />
      <Text style={styles.info}>Popüler Aramalar</Text>

      <View style={styles.popular_searches_wrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.popular_searches_container}>
          {
            popularSearches.map(item => (
              <View key={item.id} style={styles.item_container}>
                <Text style={styles.item_text}>{item.product_category}</Text>
              </View>
            ))
          }
        </ScrollView>
      </View>

    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  main_container: {

  },
  info: {
    color: 'gray',
    marginTop: 24,
    marginBottom :12,
    marginLeft: 14,
    fontWeight: '600',
  
  },
  popular_searches_wrapper: {
    backgroundColor: '#fff',
    height: screen * 0.06,
    shadowRadius: 3,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowColor: colors.gray,
    shadowOpacity: 0.3,
  },
  popular_searches_container:{
    alignItems: 'center',
    gap: 20

  },
  item_container:{
    borderWidth :1,
    borderColor : '#E6E6FA',
    padding :4,
    borderRadius : 5,
  },
  item_text:{
    color : colors.purple,
    fontWeight : '500',
    fontSize :12,
  }
})