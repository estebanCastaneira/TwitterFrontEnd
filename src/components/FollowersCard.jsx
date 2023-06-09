import React from "react";
import { useSelector } from "react-redux";
import FollowButton from "./FollowButton";
import FollowingButton from "./FollowingButton";

function FollowersCard({ user }) {
  const loggedUserId = useSelector((state) => state.user.id);

  return (
    <div className="card-footer pe-2 align-items-center py-3">
      <div className="row g-0 justify-content-between align-items-center">
        <div className="col-2 align-items-start m-0">
          <div className="d-flex justify-content-around align-items-center ps-3 ps-md-0">
            <img
              src={user.avatar}
              className="rounded-circle"
              width="50px"
              height="50px"
              alt="avatar"
            />
          </div>
        </div>
        <div className="col-6 col-md-7">
          <div className="card-body">
            <h5 className="card-title mb-0 p-0 fs-6">
              {user.firstname} {user.lastname}
            </h5>
            <p className="card-text">
              <small className="text-body-tertiary">{user.username}</small>
            </p>
          </div>
        </div>
        <div className="col-3">
          {user.followers.includes(loggedUserId) ? (
            <FollowingButton userIdToUnFollow={user._id} />
          ) : (
            <FollowButton userIdToFollow={user._id} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FollowersCard;
