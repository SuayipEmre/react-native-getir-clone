import { Dimensions, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { StepByStepContent } from '../constants'
import RecomendedProducts from './recomendedProducts'


const { height } = Dimensions.get('window')

type propType = {
    active: string
}


const ContentBody: React.FC<propType> = ({ active }) => {
    const { carbohydrate, sugar, energy, protein, quantity } = StepByStepContent['NutritionalValues'].content



    return (
        <View >
            {
                active == 'NutritionalValues' ? (
                    <View>
                        <Text>karbonhidrat{quantity}    <Text>{carbohydrate}</Text>     </Text>
                        <Text>enerji {energy}</Text>
                        <Text>şeker {sugar}</Text>
                        <Text>protein {protein}</Text>
                    </View>
                ) : active == 'Recommendation' ?

                    <RecomendedProducts />
                    : (
                        <Text>
                            {
                                //@ts-ignore
                                StepByStepContent[active]?.content
                            }
                        </Text>
                    )

            }
        </View>
    )
}

export default ContentBody
