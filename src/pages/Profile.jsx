import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import "./profile_styles.css";

function Profile() {
  return (
    <>
      <container>
        <div className="row">
          <div className="col-2 col-lg-2"></div>
          <div className="col-8 col-lg-6 p-0">
            <ProfileHeader />
          </div>
          <div className="col-2 col-lg-4"></div>
        </div>
      </container>
    </>
  );
}

export default Profile;
