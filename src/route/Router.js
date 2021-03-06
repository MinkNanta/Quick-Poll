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
import SharePoll from "../pages/feedback/SharePoll";
import ViewPoll from "../pages/ViewPoll";
import VoteQuestion from "../components/viewpoll/VoteQuestion";
import Profile from "../pages/Profile";
import MyPoll from "../pages/MyPoll";
import { useAuth } from "../contexts/AuthContext";
import PollDetail from "../pages/PollDetail";

export default function Router() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route path="" element={<Home />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Explore" element={<Explore />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="poll/:id" element={<ViewPoll />} />
        <Route path="poll/:id/questions" element={<VoteQuestion />} />
        <Route path="poll/completed/:id" element={<SharePoll />} />
        {user && (
          <>
            <Route path="profile" element={<Profile />} />
            <Route path="myPoll" element={<MyPoll />} />
            <Route path="pollDetail/:id" element={<PollDetail />} />
          </>
        )}
      </Route>

      <Route path="/poll/create" element={<CreatePoll />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
