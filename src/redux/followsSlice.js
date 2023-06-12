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
  },
});

const { actions, reducer } = followsSlice;
export const { setFollowers, setFollowing } = actions;
export default reducer;
