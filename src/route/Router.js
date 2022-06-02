import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Pricing from "../pages/Pricing";
import Explore from "../pages/Explore";
import { MenuLayout } from "../components/layout/MenuLayout";
import AboutUs from "../pages/AboutUs";
import CreatePassword from "../components/signup/signupform/CreatePassword";
import CreatePoll from "../pages/CreatePoll";

export default function Router() {
  // const user = false;
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route path="" element={<Home />} />
        {/* {!user && (
          <> */}
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        {/* </>
        )} */}
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Explore" element={<Explore />} />
        <Route path="about" element={<AboutUs />} />
      </Route>

      <Route path="/createPoll" element={<CreatePoll />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
