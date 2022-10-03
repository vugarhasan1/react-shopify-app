import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    wishItems: localStorage.getItem("wishItems") ? JSON.parse(localStorage.getItem("wishItems")) : [],
    total: 0,
    amount: 0
};

const wishSlice = createSlice({
    name: "wishlist",
    initialState,

    reducers: {
        addToWish: (state, action) => {
            const indexOfItem = state.wishItems.findIndex((item) => item.id === action.payload.id)
            if (indexOfItem >= 0) {
                state.wishItems[indexOfItem] = {
                    ...state.wishItems[indexOfItem],
                    wishQuantitiy: state.wishItems[indexOfItem].wishQuantitiy + 1
                }
            } else {
                const uniqueProduct = { ...action.payload, wishQuantitiy: 1 }
                state.wishItems.push(uniqueProduct)
            }

        },
        deleteWish: (state, action) => {
            state.wishItems.map((wishItem) => {
                if (wishItem.id === action.payload.id) {
                    const newWishItems = state.wishItems.filter(
                        (item) => item.id !== wishItem.id
                    );
                    state.wishItems = newWishItems;
                }
                localStorage.setItem("cartItems", JSON.stringify(state.wishItems));
                return state;
            });
        },
    },
});

export const { addToWish, deleteWish} = wishSlice.actions;

export default wishSlice.reducer;