import { Text, View } from 'react-native'
import React from 'react'
import { StepByStepContent } from '../constants'
import RecomendedProducts from './recomendedProducts'
import NutritionalValues from './nutritionalValues'
import Additionalinformation from './additionalInformation'



type ContentBodyType = {
    active: string
}


const ContentBody: React.FC<ContentBodyType> = ({ active }) => {
   


    const renderInformation = () => {
        if (active == 'NutritionalValues') {
            return (
               <NutritionalValues />
            )
        } else if (active == 'Recommendation') {
            return <RecomendedProducts />
        }else if(active =='AdditioanlInformation'){
            return <Additionalinformation />
        }
        return (
            <Text>
                {
                    //@ts-ignore
                    StepByStepContent[active]?.content
                }
            </Text>
        )
    }

    
    return (
        <View style={{flex : 1,}} >
         {
            renderInformation()
         }
        </View>
    )
}

export default ContentBody
