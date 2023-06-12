import FollowersCard from "../components/FollowersCard";
import SidebarRight from "../components/SidebarRight";
import FollowersNav from "../components/FollowersNav";
import Sidebar from "../components/Sidebar";
import "./Following.css";
import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFollowers } from "../redux/followsSlice";

function Followers() {
  const dispatch = useDispatch();
  const params = useParams();
  const [user, setUser] = useState("");
  const token = useSelector((state) => state.user.token);
  const followers = useSelector((state) => state.follows.followers);
  const username = params.username;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    async function getUserInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/followers/${username}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setFollowers(response.data.followers));
      setUser(response.data);
    }
    getUserInfo();
  }, []);

  return (
    followers && (
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-9 col-lg-6 col-xl-5 p-0">
            <div className="container-sm mw-50 pb-0 border">
              <div className="d-flex flex-row align-items-center ">
                <div className="col-1 align-item-center me-2">
                  <Link className="text-black" onClick={handleGoBack}>
                    <i className="bi bi-arrow-left circle-hover"></i>
                  </Link>
                </div>
                <div className="col-10 col-md-8 ps-2 ps-md-0">
                  <h1 className="m-0 main-username mt-3">
                    {user.firstname} {user.lastname}
                  </h1>
                  <p className="main-usertext m-0 text-body-tertiary">{user.username}</p>
                </div>
              </div>
              <FollowersNav username={user.username} />

              {followers &&
                followers.map((user) => {
                  return <FollowersCard key={user.id} user={user} />;
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

export default Followers;
