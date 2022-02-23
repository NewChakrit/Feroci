import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import NavBar from "../components/navBar/NavBar";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";
import Home from "../pages/home/Home";
import AboutUs from "../pages/aboutUs/AboutUs";
import Performance from "../pages/performance/Performance";
import Musician from "../pages/musician/Musicians";
import Audition from "../pages/audition/Audition";
import AuditionForm from "../pages/auditionForm/AuditionForm";
import SupportUs from "../pages/supportUs/SupportUs";
import Admin from "../pages/admin/Admin";

function RoutesConfig() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      {!user ? (
        <Route path="/">
          <Route path="" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      ) : (
        <Route path="/" element={<NavBar />}>
          <Route path="" element={<Home />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="performance" element={<Performance />}></Route>
          <Route path="member" element={<Musician />}></Route>
          <Route path="audition" element={<Audition />}></Route>
          <Route path="auditionform" element={<AuditionForm />}></Route>
          <Route path="supportus" element={<Admin />}></Route>
        </Route>
      )}
    </Routes>
  );
}

export default RoutesConfig;
