import React from "react";
import { Link } from "react-router-dom";
const MainAbout = () => {
  return (
    <div className="lg:w-[20%] ">
      <div className="about">
        <h2 className="font-semibold text-xl text-center my-5 ">About Me</h2>
        <div className="img w-full h-[250px]">
          <img
            src="/assets/img.png"
            alt="aboutimage"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <p className="my-5 text-sm first-letter:text-xl first-letter:font-semibold">
        Hi there! I'm a passionate MERN stack web developer with a knack for turning ideas into interactive digital experiences. I thrive on creating sleek, responsive, and user-friendly websites that bring visions to life. Let's build something amazing together!
        </p>
      </div>

      <div className="categories">
        <h2 className="text-center font-semibold mb-5">MY SKILLS</h2>
        <div className="categories-list px-5 text-sm font-serif flex justify-between">
          <div className="left flex flex-col gap-3 ">
            <p>HTML</p>
            <p>CSS</p>
            <p>Java Script</p>
          </div>
          <div className="right flex flex-col gap-3">
            <p>React JS</p>
            <p>MONGO DB</p>
            <p>Express JS</p>
          </div>
        </div>
      </div>

      <div className="follow-us my-5">
        <h2 className="text-center font-semibold">FOLLOW US</h2>
        <div className="icons flex gap-5 justify-center my-5 text-2xl text-red-700">
          <Link
            to="https://www.instagram.com/_arpit__srivastava/"
            target="_blank"
          >
            <i className="bi bi-instagram"></i>
          </Link>
          <Link to="">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link to="">
            <i className="bi bi-linkedin"></i>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
