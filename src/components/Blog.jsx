import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUpdateBlog } from "../redux/reducers/updateBlogReducer";
import axios from "axios";

const Blog = ({ blogData }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  function editHandler() {
    dispatch(setUpdateBlog(blogData));
    navigate(`/updateblog/${blogData._id}`);
  }

  async function deleteHandler() {
    try {
      await axios.delete(
        `https://react-personal-blog-app.onrender.com/api/blog/deleteblog/${blogData._id}`
      );
        alert("blog delete succesfull...")
        navigate("/");
      } catch (error) {

        alert("something wrong ! please try again...")
      }
    }

  return (
    <div className="userBlog lg:w-[75%] mt-10">
      <div className="blog-img w-full h-[350px]">
        <img
          src={blogData.imagePath}
          alt="userblogimage"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="blog-content">
      <div className="text-center my-5 text-xl font-semibold">
      <p className=" my-5 text-center">Author : <span className="text-orange-500">@ {blogData.username}</span></p>
        </div>
        <div className="heading-wrapper flex flex-col gap-3 justify-center items-center my-5">
          {user && user.username === blogData.username && (
            <div className="blog-icons flex gap-5">
              <button
                type="button"
                onClick={editHandler}
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 flex gap-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                <i className="bi bi-pencil-square"></i>Edit
              </button>
              <button
                type="button"
                onClick={deleteHandler}
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 flex gap-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                <i className="bi bi-trash-fill"></i>Delete
              </button>
            </div>
          )}

          <h1 className="w-full text-3xl font-normal text-red-800 ">{blogData.title}</h1>
        </div>

        

        <p className="first-letter:uppercase first-letter:text-2xl mb-5 bg-slate-100">
          {blogData.desc}
        </p>
      </div>
    </div>
  );
};

export default Blog;

