import { FlatList,  Text, View } from 'react-native'
import React from 'react'
import styles from './style'
import sectionContent from './constants/profileSection'
import { AntDesign } from '@expo/vector-icons'
import colors from '../../../styles/colors'


const ContentBody  : React.FC = () => {

    const renderItem = ({ item }: any) => (
        <View style={styles.content_container}>
            <View style={styles.info_container}>
                <View style={item.text =='Yardım' && styles.icon_container}>
                    {item.icon}
                </View>
                <Text>{item.text}</Text>
            </View>
            <View>
                <AntDesign style={styles.right_icon} name="right" size={18} color={colors.purple} />
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <FlatList
                snapToAlignment='center'
                decelerationRate='fast'
                data={sectionContent}
                renderItem={renderItem}
                keyExtractor={(item) => item.text}
                ItemSeparatorComponent={() => <View style={styles.content_footer_border} />}

            />
        </View>
    )
}

export default ContentBody
