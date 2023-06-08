import React from "react";
import FollowButton from "./FollowButton";
import { Link } from "react-router-dom";
import axios from "axios";

function ProfileHeader() {
  return (
    <div>
      <div id="mainHeader" className="container-sm mw-50 pb-0 border">
        <div id="profileHeader" className="row position-relative">
          <div id="containerPhoto">
            <img
              id="profilePhoto"
              src="/public/public copy PROV/img/foto_prueba.jpg"
              className="rounded-circle"
              width="170px"
              height="170px"
              alt="User profile photo"
            />
          </div>
        </div>
        <div id="profileInfo" className="row justify-content-end border">
          <div className="col-4 col-md-3 align-self-center p-0">
            <FollowButton />
          </div>
          <div className="row d-flex align-self-end justify-content-md-between p-0 m-0">
            <div className="col-12 col-md-auto align-self-end p-0">
              <div id="userName" className="ms-2">
                <h1 className="m-0 main-username">Nombre de Usuario</h1>
                <p className="main-usertext m-0 text-body-tertiary">@Nombredeusuario</p>
              </div>
            </div>
            <div className="col-12 col-md-6 text-md-end align-self-end mt-2 mt-md-0 ps-2">
              <div className="d-flex p-0 justify-content-md-end gap-2">
                <Link className="text-decoration-none text-black" to="/Followers">
                  <p className="m-0 d-inline-block">
                    <strong className="text-black follow-number">123 </strong>
                    <span className="main-usertext text-body-tertiary">Followers</span>
                  </p>
                </Link>
                <Link className="text-decoration-none text-black" to="/Following">
                  <p className="m-0 d-inline-block">
                    <strong className="text-black follow-number">123 </strong>
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
  );
}

export default ProfileHeader;
