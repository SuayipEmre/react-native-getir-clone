type categoryType = {
    id : string,
    name:  string
    src : string,
    subCategories : Array<String>

}


export  type productType = {
    id:  string,
    image:string,
    images : string[],
    name : string,
    miktar : string,
    fiyat : number,
    fiyatIndirimli? : number
}


export default categoryType