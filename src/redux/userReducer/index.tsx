import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  id: null as number | null,
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
      action: PayloadAction<{ id: number; username: string; isAdmin: boolean }>
    ) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.isAdmin = action.payload.isAdmin;
      state.isAuthenticated = true;
    },
    removeUser: (state) => {
      state.id = null;
      state.isAuthenticated = false;
      state.username = "";
      state.isAdmin = false;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
