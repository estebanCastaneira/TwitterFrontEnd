import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { follow } from "../redux/userSlice";
import { follow } from "../redux/followsSlice";
import axios from "axios";

function FollowButton({ user }) {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(follow(user));

    async function saveFollowDb() {
      const response = await axios({
        method: "PATCH",
        url: `http://localhost:3000/follow/${user._id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
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
