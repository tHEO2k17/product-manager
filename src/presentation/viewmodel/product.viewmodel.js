import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productList: []
}

const productsViewModel = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addNewProduct: (state, action) => {
            state.productList.push(action.payload);
        },
    }
});

export const { addNewProduct } = productsViewModel.actions;
export const currentProductList = state => state.products.productList;


const ProductViewModel = productsViewModel.reducer;
export default ProductViewModel;