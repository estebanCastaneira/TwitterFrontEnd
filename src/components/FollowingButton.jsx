import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { unFollow, crossUnFollow, unFollowOnProfile } from "../redux/followsSlice";
import axios from "axios";

function FollowingButton({ user }) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const token = userInfo.token;
  const loggedUser = userInfo._doc;

  const handleClick = () => {
    const pageOn = location.pathname;

    function dinamicDispatch(pageOn) {
      if (pageOn.includes("followers")) {
        dispatch(unFollow(user));
        dispatch(crossUnFollow({ userId: user._id, loggedUserId: loggedUser._id }));
      } else if (pageOn.includes("following")) {
        dispatch(unFollow(user));
      } else if (pageOn.includes("profile")) {
        dispatch(unFollowOnProfile(loggedUser));
      }
    }
    dinamicDispatch(pageOn);

    async function saveUnFollowDb() {
      const response = await axios({
        method: "PATCH",
        url: `http://localhost:3000/unfollow/${user._id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    saveUnFollowDb();
  };

  return (
    <div className="text-center me-2">
      <button
        className="btn mt-1 btn-outline-dark rounded-pill fw-bold followingBtn w-100"
        type="button"
        onClick={handleClick}
      >
        Following
      </button>
    </div>
  );
}

export default FollowingButton;
