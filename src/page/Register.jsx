import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { user } from "../apiCallingFunctions";


const Register = () => {

  const navigate = useNavigate();

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[username,setUsername] = useState("");



  async function userRegister(e) {
    e.preventDefault();
    try {
      const result = await user("register", {
        email,
        password,
        username
      });
      
      if(result === "OK"){
        alert("registration successfull ..\n please login")
        navigate(`/login`)
      }
    } catch (error) {
      alert("registration failed ...\n please try after some time")
      setEmail("")
      setPassword("")
      setUsername("")
      console.log("error aa gyi ==> ", error);
    }
  }


  return (
    <div className="Register min-h-[86vh] w-full  flex justify-center flex-col items-center">
      <h1 className="my-14 text-5xl font-semibold text-white">Register</h1>
      <form className="flex flex-col w-[80%] justify-center items-center" onSubmit={userRegister}>
        <label htmlFor="username" className="label">Username</label>
        <input
          type="text"
          id="username"
          placeholder="enter you username here"
          required
          className="input"
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}}
        />

        <label htmlFor="email" className="label">Email</label>
        <input
          type="email"
          id="email"
          placeholder="enter you email here"
          required
          className="input"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />

        <label htmlFor="password" className="label">Password</label>
        <input
          type="password"
          id="password"
          placeholder="enter you password here"
          required
          className="input"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button className="input text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
