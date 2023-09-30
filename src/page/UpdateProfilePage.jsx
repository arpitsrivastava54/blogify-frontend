import React from "react";
import MainAbout from "../components/main/MainAbout";

const UpdateProfilePage = () => {
  return (
    <div className="min-h-[86vh] flex p-5 gap-[5%] my-5">
      <div className="update w-[75%]">
        <div className="u-heading my-5 text-red-500 flex justify-between">
          <h1 className="text-3xl">Update Your Account</h1>
          <span>Delete Account</span>
        </div>

        <form className="flex flex-col my-10">
          <label htmlFor="profile" className="">
            Profile Picture
          </label>
          <input type="file" name="" id="profile" className="input input-full" />

          <label htmlFor="username" className="">
            Username
          </label>
          <input
            type="text"
            name=""
            placeholder="enter your new username"
            id="username"
            className="input input-full"
          />

          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name=""
            placeholder="enter your new email here"
            id="email"
            className="input input-full"
          />

          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            name=""
            placeholder="enter your new password here"
            id="password"
            className="input input-full"
          />

          <button className="input input-full">Update</button>
        </form>
      </div>

      <MainAbout />
    </div>
  );
};

export default UpdateProfilePage;
