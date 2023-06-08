import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken } = actions;
export default reducer;
