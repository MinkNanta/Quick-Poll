import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useAuth } from "../../contexts/AuthContext";
import ProfilePic from "../common/ProfilePic";
import { Menu } from "@headlessui/react";
import { UserIcon, LogoutIcon, FolderIcon } from "@heroicons/react/outline";

export default function Header() {
  const { user, signOut, userName } = useAuth();
  // const [userName, setUserName] = useState("");
  // const userName = user?.email?.split("@")[0];

  return (
    <div className="headerSticky">
      <div className="headerContainer">
        <div className="space-x-8 my-auto">
          <Link className="menuItem" to="/">
            All Poll
          </Link>
          <Link className="menuItem" to="/pricing">
            Pricing
          </Link>
          <Link className="primarySmall " to="/poll/create">
            + Poll
          </Link>
        </div>
        <Link className="m-auto" to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="space-x-8 my-auto text-right ">
          {!user && (
            <>
              <Link type="button" to="/signup" className="menuItem">
                Register
              </Link>
              <Link
                type="button"
                className="primarySmall self-end"
                to="/signin"
              >
                Sign in
              </Link>
            </>
          )}

          {user && (
            <>
              <div className="flex gap-4 justify-end relative">
                <Menu>
                  <Menu.Button>
                    <div className="flex gap-2 justify-end items-center bg-main px-4 py-2 text-base  text-t_link rounded-2xl hover:text-t_link hover:bg-buttonHover cursor-pointer">
                      <ProfilePic />
                      <p className="">{userName}</p>
                    </div>
                  </Menu.Button>

                  <div className="absolute top-12 right-0 ">
                    <Menu.Items className="bg-bg_main w-40 border border-main rounded-xl p-4 text-left space-y-4">
                      <Link
                        className="menuItem inline-flex space-x-2"
                        to="/profile"
                      >
                        <UserIcon className="w-5" />
                        <span>Profile</span>
                      </Link>
                      <Link
                        className="menuItem inline-flex space-x-2"
                        to="/MyPoll"
                      >
                        <FolderIcon className="w-5" />
                        <span>My Poll</span>
                      </Link>
                      <p
                        className="menuItem inline-flex space-x-2"
                        onClick={signOut}
                      >
                        <LogoutIcon className="w-5" />
                        <span>Sign out</span>
                      </p>
                    </Menu.Items>
                  </div>
                </Menu>

                {/*  */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
