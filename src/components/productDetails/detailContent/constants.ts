


export const StepByStepContent = {
    Recommendation:{},
    
    Ingredients: {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste totam modi dignissimos ipsa necessitatibus sint aliquam quidem, sequi assumenda. Porro sint similique, excepturi atque architecto, nam maxime consequatur non ipsam, ut distinctio sapiente! Blanditiis inventore cumque, debitis in culpa veniam autem reprehenderit a molestias, sunt recusandae obcaecati laboriosam quam?"
    },

    NutritionalValues: {
        content: {
            energy: '13',
            sugar: '0.4',
            carbohydrate: '0.05',
            protein: '0.7',
            quantity : 'g'
        }

    },

    Usage: {
        content: '-18 derecede muhafaza ediniz'
    },

    AdditioanlInformation: {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste totam modi dignissimos ipsa necessitatibus sint aliquam quidem, sequi assumenda. "
    }

}


type infoType = {
    originalTitle: string,
    text: string
}[]

export const ContentInfo: infoType = [
    {
        originalTitle: 'Recommendation',
        text: 'Önerilen'
    },
    {
        originalTitle: 'Ingredients',
        text: 'Içindekiler'
    },
    {
        originalTitle: 'NutritionalValues',
        text: 'Besin Değerleri'
    },
    {
        originalTitle: 'Usage',
        text: 'Kullanım'
    },
    {
        originalTitle: 'AdditioanlInformation',
        text: 'Ek Bilgiler'
    }
]
