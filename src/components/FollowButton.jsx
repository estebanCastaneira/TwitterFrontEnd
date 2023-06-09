import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { follow } from "../redux/userSlice";
import axios from "axios";

function FollowButton({ userIdToFollow }) {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleClick = () => {
    dispatch(follow(userIdToFollow));

    // navigate("/");
    async function saveFollowDb() {
      const response = await axios({
        method: "PATCH",
        url: `http://localhost:3000/follow/${userIdToFollow}`,
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
