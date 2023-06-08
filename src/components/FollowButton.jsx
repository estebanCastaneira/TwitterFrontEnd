import React from "react";
import { Link } from "react-router-dom";

function FollowButton() {
  return (
    <div className="text-center me-2">
      <Link className="btn mt-1 rounded-pill px-3 fw-bold followBtn w-100" to="#" role="button">
        Follow
      </Link>
    </div>
  );
}

export default FollowButton;
