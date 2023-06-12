import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FollowsButton from "./FollowsButton";

function ProfileHeader({ user }) {
  const follows = useSelector((state) => state.follows);
  const loggedUser = useSelector((state) => state.user._doc);

  return (
    user && (
      <div>
        <div id="mainHeader" className="container-sm mw-50 pb-0 border">
          <div id="profileHeader" className="row position-relative">
            <div id="containerPhoto" className="col">
              <img
                id="profilePhoto"
                src={user.avatar}
                className="rounded-circle img-fluid col-4 col-md-5 col-lg-4 col-xl-4 m-0"
                width="170px"
                height="170px"
                alt="User profile photo"
              />
            </div>
          </div>
          <div id="profileInfo" className="row justify-content-end border">
            <div className="col-4 col-md-3 align-self-center p-0">
              <FollowsButton user={user} />
            </div>
            <div className="row d-flex align-self-end justify-content-md-between p-0 m-0">
              <div className="col-12 col-md-auto align-self-end p-0">
                <div id="userName" className="ms-2">
                  <h1 className="m-0 main-username">
                    {user.firstname} {user.lastname}
                  </h1>
                  <p className="main-usertext m-0 text-body-tertiary">{user.username}</p>
                </div>
              </div>
              <div className="col-12 col-md-6 text-md-end align-self-end mt-2 mt-md-0 ps-2">
                <div className="d-flex p-0 justify-content-md-end gap-2">
                  <Link
                    className="text-decoration-none text-black"
                    to={`/followers/${user.username}`}
                  >
                    <p className="m-0 d-inline-block">
                      <strong className="text-black follow-number">
                        {follows.followers.length}{" "}
                      </strong>
                      <span className="main-usertext text-body-tertiary">Followers</span>
                    </p>
                  </Link>
                  <Link
                    className="text-decoration-none text-black"
                    to={`/following/${user.username}`}
                  >
                    <p className="m-0 d-inline-block">
                      <strong className="text-black follow-number">
                        {follows.following.length}{" "}
                      </strong>
                      <span className="main-usertext text-body-tertiary mt-0">Following</span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row p-0 m-0">
              <div className="col-12 align-self-end">
                <h4 className="m-0" id="tweets">
                  Tweets
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProfileHeader;
