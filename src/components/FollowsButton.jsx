import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { follow, unFollow } from "../redux/userSlice";

import axios from "axios";

function FollowsButton({ user }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const token = userInfo.token;
  const loggedUser = userInfo._doc;

  const alreadyFollowing = loggedUser.following.includes(user.id);

  const handleFollow = () => {
    dispatch(follow(user.id));

    async function saveFollowDb() {
      await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_URL_BACK}/follow/${user.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    saveFollowDb();
  };

  const handleFollowing = () => {
    dispatch(unFollow(user.id));

    async function saveFollowDb() {
      await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_URL_BACK}/unfollow/${user.id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    saveFollowDb();
  };

  return (
    <div className="text-center me-2">
      {loggedUser._id !== user.id ? (
        <button
          className={
            alreadyFollowing
              ? "btn mt-1 btn-outline-dark rounded-pill fw-bold followingBtn w-100"
              : "btn mt-1 rounded-pill fw-bold followBtn w-100"
          }
          onClick={alreadyFollowing ? handleFollowing : handleFollow}
        >
          {alreadyFollowing ? "Following" : "Follow"}
        </button>
      ) : null}
    </div>
  );
}

export default FollowsButton;
