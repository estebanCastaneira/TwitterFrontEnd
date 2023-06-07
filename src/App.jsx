import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Followers from "./pages/Followers";
import Following from "./pages/Following";

{
  /* login
    register */
}

{
  /* home */
}

{
  /* profile */
}

{
  /* following
    followers */
}

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
      </Routes>
      {/* home */}

      {/* profile */}

      <Following />
      <Followers />
      {/* 404 */}

      {/* tweet
    tweetform */}

      {/* navBar
    sidebar */}
    </>
  );
}

export default App;
