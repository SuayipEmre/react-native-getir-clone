import { Text, View } from 'react-native'
import React from 'react'
import { StepByStepContent } from '../constants'
import RecomendedProducts from './recomendedProducts'
import colors from '../../../../styles/colors'



type ContentBodyType = {
    active: string
}


const ContentBody: React.FC<ContentBodyType> = ({ active }) => {
    const { carbohydrate, sugar, energy, protein, quantity } = StepByStepContent['NutritionalValues'].content


    const renderInfo = () => {
        if (active == 'NutritionalValues') {
            return (
                <View>
                    <Text>karbonhidrat{quantity}    <Text>{carbohydrate}</Text>     </Text>
                    <Text>enerji {energy}</Text>
                    <Text>şeker {sugar}</Text>
                    <Text>protein {protein}</Text>
                </View>
            )
        } else if (active == 'Recommendation') {
            return <RecomendedProducts />
        }
        return (
            <Text>
                {
                    StepByStepContent[active]?.content
                }
            </Text>
        )
    }

    
    return (
        <View >
         {
            renderInfo()
         }
        </View>
    )
}

export default ContentBody
