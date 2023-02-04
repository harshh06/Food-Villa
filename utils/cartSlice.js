import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        // initial value of the cart
        items: ["banana"],
    },
    reducers: {
        // addItem is the Action that will call the specified reducer function
        addItem: (state, action) => {
            // state : current state , action: data coming in
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // state : current state , action: data coming in
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

// export actions and reducers

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Important..
// export reducer and not reducers !!
export default cartSlice.reducer;
