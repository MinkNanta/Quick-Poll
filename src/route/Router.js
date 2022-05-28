import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Pricing from "../pages/Pricing";
import Explore from "../pages/Explore";
import { AuthLayout } from "../components/layout/AuthLayout";
import AboutUs from "../pages/AboutUs";

export default function Router() {
  // const user = true;
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="" element={<Home />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Explore" element={<Explore />} />
        <Route path="about" element={<AboutUs />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
