import SidebarRight from "../components/SidebarRight";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import "./profile_styles.css";
import Tweet from "../components/Tweet";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { setFollowers, setFollowing } from "../redux/followsSlice";
import { setNewTweets } from "../redux/tweetSlice";
import Header from "../components/Header";

function Profile() {
  const dispatch = useDispatch();
  const params = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const token = useSelector((state) => state.user.token);
  const tweets = useSelector((state) => state.tweets);
  const sortedTweets = [...tweets].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  useEffect(() => {
    async function getUserInfo() {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_URL_BACK}/users/${params.username}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(response.data);
      dispatch(setNewTweets(response.data));
      dispatch(setFollowers(response.data.followers));
      dispatch(setFollowing(response.data.following));
    }
    getUserInfo();
  }, [params.username]);

  return (
    <>
      {userInfo && <Header title={`${userInfo.firstname} ${userInfo.username}`} />}
      <div className="container">
        <div className="row m-0 p-0 justify-content-center">
          <div className="col-2 col-md-2 col-lg-2">
            <Sidebar />
          </div>
          <div className="col-10 col-md-9 col-lg-6 col-xl-5 p-0">
            <ProfileHeader user={userInfo} />
            <div>
              {userInfo &&
                sortedTweets.map((tweet) => {
                  if (userInfo.username === tweet.author.username) {
                    return <Tweet key={tweet._id} tweet={tweet} />;
                  }
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
