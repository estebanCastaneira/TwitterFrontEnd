import React from "react";
import "./Following.css";
import { Link } from "react-router-dom";

function Following() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1 col-md-2">left_sidebar</div>
        <div className="col-11 col-md-6 col-lg-5">
          <div className="container-sm mw-50">
            <div className="d-flex flex-row align-items-center">
              <div className="mx-3">
                <Link className="text-black" to="/<%= locals.user.username %>">
                  <i class="bi bi-arrow-left fs-4 fw-600"></i>
                </Link>
              </div>
              <div>
                <h1 className="mb-0 mt-3 fs-2">Firstname Lastname</h1>
                <small className="text-body-tertiary">Username</small>
              </div>
            </div>
            <div className="d-flex justify-content-between ml-2 my-3">
              <h3 className="fs-4">
                <Link className="text-black text-decoration-none" to="./followers">
                  Followers
                </Link>
              </h3>
              <h3 className="fs-4">
                <Link className="text-black text-decoration-none" to="./following">
                  Following
                </Link>
              </h3>
            </div>

            {/* <!-- tarjeta FOLLOWERS --> */}
            {/* <% for (const followingUser of user.following){ %> */}
            <div className="card-footer bg-white">
              <div className="row mb-3 g-0">
                <div className="col-1">
                  <div className="d-flex justify-content-end align-items-center">
                    <img
                      src="/img/icons/generic_avatar.PNG"
                      className="img-fluid rounded-circle w-50 mb-2"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div className="card-body px-3">
                    <h5 className="card-title mb-0 p-0 fs-6">Firstname Lastname</h5>
                    <p className="card-text">
                      <small className="text-body-tertiary">Username</small>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-end">
                    <form
                      action="/unfollow/<%=followingUser.id %>?_method=PATCH"
                      method="post"
                      className="d-inline"
                    >
                      <button
                        className="btn mt-1 btn-outline-dark rounded-pill px-3 fw-bold"
                        type="submit"
                      >
                        Following
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- tarjeta FOLLOWERS --> */}
          </div>
        </div>
        <div className="col-md-4">right sidebar</div>
      </div>
    </div>
  );
}

export default Following;
