import React from "react";

function FollowersCard() {
  return (
    <div className="card-footer border-top border-bottom pt-3 pe-2">
      <div className="row mb-3 g-0 justify-content-between">
        <div className="col-3 col-md-2 align-items-start m-0">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="/img/foto_prueba.jpg"
              className="rounded-circle"
              width="50px"
              height="50px"
              alt="avatar"
            />
          </div>
        </div>
        <div className=" col-5 col-md-7">
          <div className="card-body">
            <h5 className="card-title mb-0 p-0 fs-6">Firstname Lastname</h5>
            <p className="card-text">
              <small className="text-body-tertiary">@username</small>
            </p>
          </div>
        </div>
        <div className="col-4 col-md-3">
          {/* <% if (userFollower.followers.includes(user._id)) { %> */}
          <div className="text-center">
            <form
              action="/unfollow/<%=userFollower.id %>?_method=PATCH"
              method="post"
              className="d-inline"
            >
              <button
                className="btn mt-1 btn-outline-dark rounded-pill  fw-bold followingBtn w-100"
                type="submit"
              >
                Following
              </button>
            </form>
          </div>

          {/* // <% } else { %> */}
          <div className="text-end">
            <form
              action="/followFollower/<%=userFollower.id%>?_method=PATCH"
              method="post"
              className="d-inline"
            >
              <button className="btn mt-1 rounded-pill fw-bold followBtn w-100" type="submit">
                Follow
              </button>
            </form>
          </div>
          {/* // <% } %> */}
        </div>
      </div>
    </div>
  );
}

export default FollowersCard;
