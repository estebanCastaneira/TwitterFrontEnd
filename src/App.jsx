import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";

{
  /* login
    register */
}

{
  /* home */
}

import Profile from "./pages/Profile";

//
import Following from "./pages/Following";
import Followers from "./pages/Followers";
//

{
  /* 404 */
}

{
  /* tweet
    tweetform */
}

{
  /* navBar
    sidebar */
}

import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/following" element={<Following />}/>
        <Route path="/followers" element={<Followers />}/>
      </Routes>
      {/* home */}

    {/* profile */}

    
  

    {/* 404 */}
    
{/* navBar
    sidebar */}

    {/* login
    register */}

    {/* home */}

    {/* profile */}

    {/* following
    followers */}

    {/* 404 */}
    
  {/* tweet
    tweetform */}

    {/* navBar
    sidebar */}
    </>
  )
}

export default App;
