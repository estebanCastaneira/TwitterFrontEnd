import React from "react";
import { Link } from "react-router-dom";
import "../pages/Following.css";

function FollowersNav({ username }) {
  // const pageOn = location.pathname;
  // const underline = pageOn.includes("followers") ? "underline-followers" : "underline-following";
  // console.log(underline);
  return (
    <div className="d-flex justify-content-around  mb-0 sticky-top pt-4 bg-white">
      <h3 className="follow-text">
        <Link className="text-black text-decoration-none" to={`/followers/${username}`}>
          Followers
        </Link>
      </h3>
      <h3 className="follow-text">
        <Link className="text-black text-decoration-none" to={`/following/${username}`}>
          Following
        </Link>
      </h3>
    </div>
  );
}

export default FollowersNav;
