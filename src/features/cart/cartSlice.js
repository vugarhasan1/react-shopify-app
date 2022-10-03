import { createSlice } from '@reduxjs/toolkit';


localStorage.clear()

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    totalAmount: 0,
    totalQuantity: 0,
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
            // ////////////////////////////////////////////////////////////////////
            
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
            localStorage.getItem("cartItems", JSON.stringify(state.cartItems));
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (state.cartItems[cartItem].cartQuantitiy > 1) {
                state.cartItems[cartItem].cartQuantitiy -= 1;
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        calculateTotals(state) {
            let { price, quantity } = state.cartItems.reduce(

                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    price: 0,
                    quantity: 0,
                }
            );
            price = parseFloat(price.toFixed(2));
            state.totalQuantity = quantity;
            state.totalAmount = price;

        },
    },
});



export const { addToCart, clearCart, removeItem, increase, decrease} = cartSlice.actions;

export default cartSlice.reducer;