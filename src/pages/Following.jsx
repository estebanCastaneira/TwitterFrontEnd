import React from "react";
import "./Following.css";
import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import FollowersNav from "../components/FollowersNav";
import FollowersCard from "../components/FollowersCard";

function Following() {
  return (
    <div className="container">
      <div className="row m-0 p-0">
        <div className="col-2 col-lg-2">
          <Sidebar />
        </div>
        <div className="col-8 col-lg-6 col-xl-5 p-0">
          <div className="container-sm mw-50 pb-0 border">
            <div className="d-flex flex-row align-items-center justify-content-start ">
              <div className="me-3">
                <Link className="text-black" to="#">
                  <i class="bi bi-arrow-left fs-4 fw-600"></i>
                </Link>
              </div>
              <div>
                <h1 className="m-0 main-username mt-3">Firstname Lastname</h1>
                <p className="main-usertext m-0 text-body-tertiary">@username</p>
              </div>
            </div>
            <FollowersNav />
            {/* <!-- tarjeta FOLLOWERS --> */}

            {/* <% for (const userFollower of user.followers){ %> */}
            <div className="row border-top">
              <FollowersCard />

              {/* //   <!-- tarjeta FOLLOWERS --> */}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
}

export default Following;
