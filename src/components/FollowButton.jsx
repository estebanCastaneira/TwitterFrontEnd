import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { follow, crossFollow, followOnProfile } from "../redux/followsSlice";
import axios from "axios";

function FollowButton({ user }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const token = userInfo.token;
  const loggedUser = userInfo._doc;

  const handleClick = () => {
    const pageOn = location.pathname;

    function dinamicDispatch(pageOn) {
      if (pageOn.includes("profile")) {
        dispatch(followOnProfile(loggedUser._id));
      } else {
        dispatch(follow(user));
        dispatch(crossFollow({ userId: user._id, loggedUserId: loggedUser._id }));
      }
    }
    dinamicDispatch(pageOn);

    async function saveFollowDb() {
      const response = await axios({
        method: "PATCH",
        url: `http://localhost:3000/follow/${user._id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    saveFollowDb();
  };

  return (
    <div className="text-center me-2">
      <button className="btn mt-1 rounded-pill fw-bold followBtn w-100" onClick={handleClick}>
        Follow
      </button>
    </div>
  );
}

export default FollowButton;
