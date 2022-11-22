import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            console.log(action);
            const item = action.payload;
            let productItem = state.cartItems.find(product => product.id === item.id);
            if(productItem){
              productItem.quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
              });
            }else{
              state.cartItems = [item,...state.cartItems];
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been saved',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        incrementQ(state, action){
            const item = action.payload;
            let productItem = state.cartItems.find(product => product.id === item.id);
            if(productItem){
              productItem.quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        decrementQ(state, action){
            const item = action.payload;
            let productItem = state.cartItems.find(product => product.id === item.id);
            if(productItem){
              productItem.quantity -= 1;
              if(productItem.quantity === 0){
                state.cartItems = state.cartItems.filter(product => product.id !== item.id);
              }
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        removeFromCart(state, action){
            const item = action.payload;
            state.cartItems = state.cartItems.filter(product => product.id !== item.id);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your item has been removed',
              showConfirmButton: false,
              timer: 1500
            });
        }
    }
});


export const { addToCart, incrementQ, decrementQ, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;


