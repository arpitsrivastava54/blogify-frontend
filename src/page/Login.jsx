import React, { useState } from "react";
import { user } from "../apiCallingFunctions";
import {useNavigate} from "react-router-dom"
import { setUser} from "../redux/reducers/userReducer"
import {useDispatch} from "react-redux"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");


  async function userLogin(e) {
    e.preventDefault();
    try {
      const result = await user("login", {
        email,
        password
      });
      if(result){
        alert("login successfull...")
        navigate(`/userblogs/${result.userId}`)
        dispatch(setUser(result))
        localStorage.setItem("user",JSON.stringify(result))
      }
    } catch (error) {
      alert("login failed...\n please try again")
      console.log("error aa gyi ==> ", error);
    }
  }



  return (
    <div className="Login min-h-[86vh] w-full flex justify-center flex-col items-center ">
      <h1 className="my-14 text-4xl font-semibold text-white">Login</h1>
      <form className="flex flex-col w-full lg:w-[80%] justify-center items-center" onSubmit={userLogin}>
        <label htmlFor="email" className="label ">
          Entery your Email 
        </label>
        <input
          type="email"
          id="email"
          placeholder="enter you username or email here"
          required
          className="input"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
        />

        <label htmlFor="password" className="label ">
         Enter your Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="enter you password here"
          required
          className="input"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button className="input text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
