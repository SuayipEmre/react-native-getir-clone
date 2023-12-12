import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../../../models";


type stateType = {
    cart: Array<productType & { count: number }>,
    totalPrice: number,
    cartKeyforRender: number,
    productCount  : number,
}
const initialState: stateType = {
    cart: [],
    totalPrice: 0,
    cartKeyforRender: 0,
    productCount : 0,
}


export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        _getCartTotal: (state) => {
            state.totalPrice = state.cart.reduce((cartTotal, cartItem) => {
                //@ts-ignore
                return cartTotal += cartItem?.reducedPrice * cartItem.count

            }, 0)
        },

       

        _addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        _removeFromCart: (state, action) => {
            state.cart =    state.cart.filter(item => item.id !== action.payload)
        },
        _clearCart: (state) => {
            state.cart = []
            state.totalPrice = 0
        },

        _editCart: (state, action) => {
            const{id, count} = action.payload
            state.cart.filter(item => item.id == id).map(item => item.count = count)
        },

        _keyForCartRender: (state) => {
            state.cartKeyforRender += 1
        }


    }
})



export const { _addToCart, _removeFromCart, _clearCart, _getCartTotal, _keyForCartRender, _editCart} = cart.actions

export default cart.reducer
