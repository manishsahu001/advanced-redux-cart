import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slice/UISlice";
import cartSlice from './slice/cartSlice'
const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice
    }
})

export default store;