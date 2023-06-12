import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    clearToken: (state) => {
      return null;
    },
    follow(state, action) {
      state._doc.following.push(action.payload);
    },
    unFollow(state, action) {
      state._doc.following = state._doc.following.filter((userId) => userId !== action.payload);
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, clearToken, follow, unFollow } = actions;
export default reducer;
