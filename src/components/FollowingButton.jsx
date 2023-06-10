import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { unFollow } from "../redux/followsSlice";
import axios from "axios";

function FollowingButton({ user }) {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(unFollow(user));

    async function saveUnFollowDb() {
      const response = await axios({
        method: "PATCH",
        url: `http://localhost:3000/unfollow/${user._id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
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
