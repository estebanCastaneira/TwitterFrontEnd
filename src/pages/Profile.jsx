import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import "./profile_styles.css";
import Tweet from "../components/Tweet";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    async function getUserInfo() {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3000/users/profile/", //TODO
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          username: "@Pantoja",
        },
      });
      setUserInfo(response.data);
      console.log(response.data);
    }
    getUserInfo();
  }, []);
  // response.data && console.log(userInfo);

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
