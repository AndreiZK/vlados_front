import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;

export type TypedDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
