import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    // reducers
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
