import { _addToCart, _clearCart, _editCart, _getCartTotal,  _keyForCartRender, _removeFromCart,  } from ".";
import { productType } from "../../../models";
import { store } from "../../app";

type dataType = productType &  {
    count : number
}

export const addToCart = (data : dataType) => store.dispatch(_addToCart(data))
export const removeFromCart = (id : string) => store.dispatch(_removeFromCart(id))
export const clearCart = () => store.dispatch(_clearCart())
export const getCartTotal = () => store.dispatch(_getCartTotal())
export const setKeyForCartRender = () => store.dispatch(_keyForCartRender())
export const editCart = (data : any) => store.dispatch(_editCart(data))