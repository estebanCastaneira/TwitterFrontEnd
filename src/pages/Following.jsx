import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import FollowersNav from "../components/FollowersNav";
import FollowersCard from "../components/FollowersCard";
import "./Following.css";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Following() {
  const params = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const token = useSelector((state) => state.user.token);

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    async function getUserInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/following/${params.username}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(response.data);
      console.log(response.data);
    }
    getUserInfo();
  }, []);

  return (
    userInfo && (
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-9 col-lg-6 col-xl-5 p-0">
            <div className="container-sm mw-50 pb-0 border">
              <div className="d-flex flex-row align-items-center">
                <div className="col-1 align-item-center me-2">
                  <Link className="text-black" onClick={handleGoBack}>
                    <i className="bi bi-arrow-left circle-hover"></i>
                  </Link>
                </div>
                <div className="col-10 col-md-8 ps-2 ps-md-0">
                  <h1 className="m-0 main-username mt-3">
                    {userInfo.user.firstname} {userInfo.user.lastname}
                  </h1>
                  <p className="main-usertext m-0 text-body-tertiary">{userInfo.user.username}</p>
                </div>
              </div>
              <FollowersNav user={userInfo} />

              {userInfo.user.following.map((user) => {
                return <FollowersCard key={user._id} user={user} />;
              })}
            </div>
          </div>
          <div className="col-md-4">
            <SidebarRight />
          </div>
        </div>
      </div>
    )
  );
}

export default Following;
