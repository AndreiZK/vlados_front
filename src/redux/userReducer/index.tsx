import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isAuthenticated: true,
  isAdmin: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ username: string; isAdmin: boolean }>
    ) => {
      state.username = action.payload.username;
      state.isAdmin = action.payload.isAdmin;
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      state.isAuthenticated = false;
      state.username = "";
      state.isAdmin = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
