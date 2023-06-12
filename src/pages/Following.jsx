import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import FollowersNav from "../components/FollowersNav";
import FollowersCard from "../components/FollowersCard";
import "./following_styles.css";
import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFollowing } from "../redux/followsSlice";

function Following() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const token = useSelector((state) => state.user.token);
  const following = useSelector((state) => state.follows.following);
  const username = params.username;

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    async function getUserInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/following/${username}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setFollowing(response.data.following));
      setUser(response.data);
    }
    getUserInfo();
  }, []);

  return (
    following && (
      <div className="container">
        <div className="row m-0 p-0 justify-content-center">
          <div className="col-2 col-md-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-10 col-md-9 col-lg-6 col-xl-5 p-0">
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

              {following &&
                following.map((user) => {
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
