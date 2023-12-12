


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
       text : 'Ürünün menşeine, üretici/ithalatçı bilgilerine ve uyarılara ulaşabilirsiniz. ',
       origin : 'Türkiye',
       foodOperator : 'lorem ipsum dolar sit amet',
       warning : "Ürün etiket bilgileri, ürünün tedarikçisi tarafından Getir'e iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile uygulamada bulunan bilgiler arasında herhangi bir farklılık bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.",
       businessRegistrationNumber : "TR-06-34-42"

    }

}


type ContentInfoType = {
    originalTitle: string,
    text: string
}[]

export const ContentInfo: ContentInfoType = [
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
