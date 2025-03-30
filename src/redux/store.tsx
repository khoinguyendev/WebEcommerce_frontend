import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productViewtedSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
