import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/features/cartSlice';
import productReducer from '../components/features/productSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
});

export default store;