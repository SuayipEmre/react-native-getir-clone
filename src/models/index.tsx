type categoryType = {
    id: string,
    name: string
    src: string,
    subCategories: Array<String>

}


export type productType = {
    id: string,
    image: string,
    images: string[],
    name: string,
    Productquantity: string,
    price: number,
    reducedPrice?: number
}


export default categoryType