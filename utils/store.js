import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// create slices
const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default store;
