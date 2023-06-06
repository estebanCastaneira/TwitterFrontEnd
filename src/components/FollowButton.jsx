import React from "react";

function FollowButton() {
  return (
    <div className="text-end p-0">
      <form method="post" action="">
        <button id="button" type="button" className="btn btn-sm">
          Follow
        </button>
      </form>
    </div>
  );
}

export default FollowButton;
