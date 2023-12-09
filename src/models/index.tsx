type categoryType = {
    id: string,
    name: string
    src: string,
    subCategories: Array<string>

}


export type productType = {
    id: string,
    image: string,
    images: string[],
    name: string,
    productQuantity: string,
    price: number,
    reducedPrice?: number
}


export default categoryType