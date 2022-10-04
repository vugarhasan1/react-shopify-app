import { createSlice } from '@reduxjs/toolkit';


// localStorage.clear()

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    amount: 0,
    total: 0,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const indexOfItem = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (indexOfItem >= 0) {
                state.cartItems[indexOfItem] = {
                    ...state.cartItems[indexOfItem],
                    cartQuantitiy: state.cartItems[indexOfItem].cartQuantitiy + 1
                }
            } else {
                const uniqueProduct = { ...action.payload, cartQuantitiy: 1 }
                state.cartItems.push(uniqueProduct)
            }
           
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeItem: (state, action) => {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    );
                    state.cartItems = nextCartItems;
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[cartItem].cartQuantitiy >= 1) {
                state.cartItems[cartItem].cartQuantitiy += 1;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (state.cartItems[cartItem].cartQuantitiy > 1) {
                state.cartItems[cartItem].cartQuantitiy -= 1;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        calculateTotals(state) {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
});



export const { addToCart, clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;