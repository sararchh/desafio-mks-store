import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { CartProps } from ".././../../@types/cart.interface"

// declaring the types for our state
export type CartState = {
    cart: CartProps[];
    loading: boolean
};

const initialState: CartState = {
    cart: [],
    loading: false,
};

export const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setLoadingCart: (state, action: PayloadAction<boolean>) => {            
            state.loading = action.payload;
        },
        setCart: (state, action: PayloadAction<CartProps[]>) => {            
            state.cart = action.payload;
        },
    },
});

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
    setCart,
    setLoadingCart,
} = cartSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const getCart = (state: RootState) => state.cart.cart;
export const getLoadingCart = (state: RootState) => state.cart.loading;


export default cartSlice.reducer;