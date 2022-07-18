import { LockClosedIcon, LogoutIcon, UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import AuthServices from "../components/authservices/AuthServices";
import Tab from "../components/common/Tab";
import TabSilde from "../components/common/TabSilde";
import Form from "../components/from/Form";
import InputYup from "../components/from/InputYup";
import SubmitButton from "../components/from/SubmitButton";
import { useAuth } from "../contexts/AuthContext";
import ProfilePic from "/Users/nantanitlertwittayarat/Documents/CodeCamp11/Poll-Project/quick-poll/src/components/common/ProfilePic.js";
import axios from "../config/axios";

export default function Profile() {
  const { user, userName } = useAuth();
  const [myProfile, setMyProfile] = useState(true);
  const [passwordState, setPassword] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(userName);
  const [lastName, setLastName] = useState("");

  const schemaPassword = yup.object({
    password: yup.string().required(),
    newPassword: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("newPassword"), null], "Passwords don't match."),
  });

  const handelSubmitPassword = async ({
    password,
    newPassword,
    confirmPassword,
  }) => {
    console.log("submit password");
    const body = { password, newPassword, confirmPassword };
    const res = await axios.put("/user", body);
    signOut();
    navigate("/");
  };

  return (
    <div className="mainContainer py-8">
      <div className="space-y-4">
        <div className="flex gap-2">
          <a href="/" className="text-t_support">
            Home
          </a>
          <p>></p>
          <p className="text-t_main">Profile</p>
        </div>
        <h3>Profile</h3>

        <div className="grid grid-cols-4 pt-6">
          <div>
            <div className="bg-bg_sup px-6 rounded-2xl gap-4 p-6 space-y-4 h-96">
              <TabSilde
                title="My Profile"
                value={<UserIcon className="w-5 h-5" />}
                onClick={() => {
                  setMyProfile(true);
                  setPassword(false);
                }}
                active={myProfile}
              />
              <TabSilde
                title="Password"
                value={<LockClosedIcon className="w-5 h-5" />}
                onClick={() => {
                  setMyProfile(false);
                  setPassword(true);
                }}
                active={passwordState}
              />
            </div>

            <button
              className="primaryMd mt-6 flex  gap-2 place-items-center"
              onClick={signOut}
            >
              <span>
                <LogoutIcon className="w-5 h-5" />
              </span>
              logout
            </button>
          </div>

          <div className="col-span-3 mx-24">
            {myProfile && (
              <>
                <div className=" space-y-6 max-w-lg">
                  <h3>My Profile</h3>
                  <p>Fill out your profile details below</p>
                </div>

                <div className="flex gap-12 mt-8  sm:flex-col">
                  <div className="w-64 h-64  xl:h-42  xl:w-42 rounded-full overflow-hidden">
                    <div className=" bg-blue_sup text-center  font-medium flex items-stretch w-full h-full object-cover">
                      <h1 className="self-center mx-auto text-[140px] text-bg_main xl:text-[120px]">
                        {userName?.slice(0, 1).toLocaleUpperCase()}
                      </h1>
                    </div>
                  </div>

                  <div className="grow space-y-6 ">
                    {/* <h5>{user.email}</h5> */}
                    <div>
                      <label className="text-t_support">
                        Email
                        <input
                          className="mainInput"
                          value={user.email}
                          onChange={() => {}}
                          placeholder=""
                          disabled
                        />
                      </label>
                    </div>
                    <div>
                      <label className="text-t_support">
                        First name
                        <input
                          className="mainInput"
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
                          placeholder=""
                        />
                      </label>
                    </div>
                    <div>
                      <label className="text-t_support">
                        Last name
                        <input
                          className="mainInput"
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                          placeholder=""
                        />
                      </label>
                    </div>
                    <div className="w-96">
                      <button className="primaryMd">Save</button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {passwordState && (
              <div className=" space-y-6 max-w-lg">
                <h3>Change password</h3>
                <div>
                  <p>Your new password must be contain</p>
                  <p>At least 8 characters</p>
                  <p>At least one uppercase</p>
                  <p>At least one number </p>
                  <p>At least one special case character </p>
                </div>
                <Form
                  schema={schemaPassword}
                  className="flex flex-col gap-y-6 mt-4"
                >
                  <InputYup
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                  <InputYup
                    name="newPassword"
                    type="password"
                    label="New Password"
                    placeholder="Enter your New password"
                  />
                  <InputYup
                    name="confirmPassword"
                    type="password"
                    label="Confirm New Password"
                    placeholder="Confirm your New password"
                  />
                  <div className="w-96">
                    <SubmitButton onClick={handelSubmitPassword}>
                      Save new password
                    </SubmitButton>
                  </div>
                </Form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
