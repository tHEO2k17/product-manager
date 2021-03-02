import { createSlice } from "@reduxjs/toolkit"
import productRepository from "../../data/repository/product.repository";

const initialState = {
    productList: productRepository.fetchProducts(),
}

const productsViewModel = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addNewProduct: (state, action) => {
            productRepository.addProduct(action.payload);
            state.productList = productRepository.fetchProducts();
        }
    }
});

export const { addNewProduct } = productsViewModel.actions;
export const currentProductList = state => state.products.productList;


const ProductViewModel = productsViewModel.reducer;
export default ProductViewModel;