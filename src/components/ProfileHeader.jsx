import React from "react";
import FollowButton from "./FollowButton";
import axios from "axios";

function ProfileHeader() {
  return (
    <div>
      <div id="mainHeader">
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
        <div id="profileInfo" className="row border position-relative">
          <div className="col-2">
            <FollowButton />
          </div>
          <div className="row d-flex justify-content-between p-0 m-0">
            <div className="col-6 align-self-end">
              <div id="userName" className="ms-2">
                <h2 className="fs-4 m-0">Nombre de Usuario</h2>
                <p className="fw-light m-0">@Nombredeusuario</p>
              </div>
            </div>
            <div className="col-6 text-end align-self-end">
              <div className="d-flex justify-content-end gap-2">
                <a className="text-decoration-none text-black" href="#">
                  <p className="m-0 d-inline-block">
                    <strong className="text-black">123 </strong>
                    Followers
                  </p>
                </a>
                <a className="text-decoration-none text-black" href="#">
                  <p className="m-0 d-inline-block">
                    <strong className="text-black">123 </strong>
                    Following
                  </p>
                </a>
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
