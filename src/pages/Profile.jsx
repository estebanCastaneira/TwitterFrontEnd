import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import "./profile_styles.css";
import Tweet from "../components/Tweet";

function Profile() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 col-lg-2">Left Sidebar</div>
          <div className="col-8 col-lg-6 p-0">
            <ProfileHeader />
            <div className="row position-relative border">
              <Tweet />
            </div>
          </div>

          <div className="col-2 col-lg-4">Right Sidebar</div>
        </div>
      </div>
    </>
  );
}

export default Profile;
