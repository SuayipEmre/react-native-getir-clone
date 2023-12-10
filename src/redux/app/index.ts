import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/cart";
import profile from "../features/profile";
import campaignSlice from "../features/campaigns";


export const store = configureStore({
    reducer:{
        cart,
        profile,
        campaign : campaignSlice,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch