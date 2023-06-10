import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import "./profile_styles.css";
import Tweet from "../components/Tweet";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const token = useSelector((state) => state.user.token);
  const tweets = useSelector((state) => state.tweets)
  useEffect(() => {
    async function getUserInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/users/${params.username}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(response.data);
    }
    getUserInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-9 col-lg-6 col-xl-5 p-0">
            <ProfileHeader user={userInfo} />
            <div>
              {userInfo &&
                tweets.map((tweet) => {
                  tweet.author = {
                    avatar: userInfo.avatar,
                    username: userInfo.username,
                    firstname: userInfo.firstname,
                    lastname: userInfo.lastname,
                  };
                  return <Tweet key={tweet._id} tweet={tweet} />;
                })}
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
