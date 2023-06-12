import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FollowButton from "./FollowButton";
import FollowingButton from "./FollowingButton";

function FollowersCard({ user }) {
  const loggedUser = useSelector((state) => state.user._doc);

  function aux_buttonSelection() {
    if (user.id !== loggedUser._id && user.followers.includes(loggedUser._id)) {
      return <FollowingButton user={user} />;
    } else if (user.id !== loggedUser._id) {
      return <FollowButton user={user} />;
    } else {
      return null;
    }
  }

  return (
    <div className="card-footer pe-2 align-items-center py-3">
      <div className="row g-0 justify-content-between align-items-center">
        <div className="col-2 align-items-start m-0">
          <Link
            className="text-decoration-none text-black"
            to={`http://localhost:5173/profile/${user.username}`}
          >
            <div className="d-flex justify-content-around align-items-center ps-3 ps-md-0">
              <img
                src={user.avatar}
                className="rounded-circle"
                width="50px"
                height="50px"
                alt="avatar"
              />
            </div>
          </Link>
        </div>
        <div className="col-6 col-md-7">
          <Link
            className="text-decoration-none text-black"
            to={`http://localhost:5173/profile/${user.username}`}
          >
            <div className="card-body">
              <h5 className="card-title mb-0 p-0 fs-6">
                {user.firstname} {user.lastname}
              </h5>
              <p className="card-text">
                <small className="text-body-tertiary">{user.username}</small>
              </p>
            </div>
          </Link>
        </div>
        <div className="col-3">
          {/* {user.followers && user.followers.includes(loggedUser) ? (
            <FollowingButton user={user} />
          ) : (
            <FollowButton user={user} />
          )} */}
          {user.followers && aux_buttonSelection()}
        </div>
      </div>
    </div>
  );
}

export default FollowersCard;
