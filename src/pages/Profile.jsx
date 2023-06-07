import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import "./profile_styles.css";
import Tweet from "../components/Tweet";

function Profile() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-8 col-lg-6 col-xl-5">
            <ProfileHeader />
            <div className="row position-relative">
              <Tweet />
            </div>
          </div>

          <div className="col-2 col-lg-4">
            <SidebarRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
