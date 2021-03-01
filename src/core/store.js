import { configureStore } from '@reduxjs/toolkit';
import ProductViewModel from '../presentation/viewmodel/product.viewmodel';

export default configureStore({
  reducer: {
    products: ProductViewModel
  },
});
