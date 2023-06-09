import { createSlice } from "@reduxjs/toolkit";

const followsSlice = createSlice({
  name: "follows",
  initialState: { following: null, followers: null },
  reducers: {
    setFollowers(state, action) {
      return { ...state, followers: action.payload };
    },
    setFollowing(state, action) {
      return { ...state, following: action.payload };
    },
    follow(state, action) {
      state.following.push(action.payload);
    },
    unFollow(state, action) {
      state.following = state.following.filter((userId) => userId !== action.payload);
    },
  },
});

const { actions, reducer } = followsSlice;
export const { setFollowers, setFollowing, follow, unFollow } = actions;
export default reducer;
