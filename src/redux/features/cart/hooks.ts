import { useSelector } from "react-redux";
import { RootState } from "../../app";


export const useCart = () => useSelector((state : RootState) => state.cart.cart)
export const useCartTotalPrice = () => useSelector((state : RootState) => state.cart.totalPrice)
export const useCartKeyForRender = () => useSelector((state : RootState) => state.cart.cartKeyforRender)

