import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return { ...state, ...action.payload };
    },
    clearToken: (state) => {
      return { ...state, token: null };
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, clearToken } = actions;
export default reducer;
