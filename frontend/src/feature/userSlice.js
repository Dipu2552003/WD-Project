import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload; // Update state.value, not state.user
    },
    logout: (state) => {
      state.value = null; // Update state.value, not state.user
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.value; // Correct selector path
export default userSlice.reducer;
