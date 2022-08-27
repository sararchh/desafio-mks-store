import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { ProductProps } from ".././../../@types/product.interface"

// declaring the types for our state
export type ProductState = {
    productsList: ProductProps[];
    loading: boolean
};

const initialState: ProductState = {
    productsList: [],
    loading: false,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setLoadingProducts: (state, action: PayloadAction<boolean>) => {            
            state.loading = action.payload;
        },
        setProductList: (state, action: PayloadAction<ProductProps[]>) => {            
            state.productsList = action.payload;
        },
    },
});

// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
    setProductList,
    setLoadingProducts,
} = productSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const getListProducts = (state: RootState) => state.product.productsList;
export const getLoadingProducts = (state: RootState) => state.product.loading;


export default productSlice.reducer;