import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    token(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { token } = actions;
export default reducer;
