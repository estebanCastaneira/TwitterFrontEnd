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
    crossFollow(state, action) {
      const follower = state.followers.find((follower) => follower._id === action.payload.userId);
      follower.followers.push(action.payload.loggedUserId);
    },

    followOnProfile(state, action) {
      state.followers.push(action.payload);
    },
    unFollowOnProfile(state, action) {
      state.followers = state.followers.filter((userId) => userId !== action.payload._id);
    },

    unFollow(state, action) {
      state.following = state.following.filter((userId) => userId._id !== action.payload._id);
    },
    crossUnFollow(state, action) {
      const follower = state.followers.find((follower) => follower._id === action.payload.userId);
      follower.followers = follower.followers.filter(
        (follower) => follower !== action.payload.loggedUserId,
      );
    },
  },
});

const { actions, reducer } = followsSlice;
export const {
  setFollowers,
  setFollowing,
  follow,
  crossFollow,
  followOnProfile,
  unFollowOnProfile,
  unFollow,
  crossUnFollow,
} = actions;
export default reducer;
