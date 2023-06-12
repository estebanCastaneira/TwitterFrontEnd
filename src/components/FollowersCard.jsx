import React from "react";
import { Link } from "react-router-dom";

import FollowsButton from "./FollowsButton";

function FollowersCard({ user }) {
  return (
    <div className="card-footer align-items-center py-3">
      <div className="row g-0 justify-content-between align-items-center">
        <div className="col-1 align-items-start m-0">
          <Link className="text-decoration-none text-black" to={`/profile/${user.username}`}>
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
        <div className="col-5 col-md-6 col-lg-7">
          <Link className="text-decoration-none text-black" to={`/profile/${user.username}`}>
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
        <div className="col-4 col-lg-3">
          <FollowsButton user={user} />
        </div>
      </div>
    </div>
  );
}

export default FollowersCard;
