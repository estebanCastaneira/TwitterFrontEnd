import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Following from "./pages/Following";
import Followers from "./pages/Followers";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/following/:username" element={<Following />} />
        <Route path="/followers/:username" element={<Followers />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
