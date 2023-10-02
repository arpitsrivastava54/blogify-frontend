import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const UpdateBlog = () => {
  const navigate = useNavigate();
  const blogid = useParams().blogid;
  const blogdata = useSelector((state) => state.updateblog);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(blogdata ? blogdata.title : "");
  const [desc, setDesc] = useState(blogdata ? blogdata.desc : "");
  const [imagePath, setImagePath] = useState(
    blogdata ? blogdata.imagePath : ""
  );

  async function submitHandler(e) {
    let data = null;
    e.preventDefault();
    if (file) {
      data = {
        title,
        desc,
        imagePath,
      };
    } else {
      data = {
        title,
        desc,
        imagePath,
      };
    }
    


    try {
      await axios.post(
        `https://react-personal-blog-app.onrender.com/api/blog/updateblog/${blogid}`,
        data
      );
      navigate(`/blogpage/${blogid}`);
      alert("blog updated succesfully..");
    } catch (error) {
      alert("Something wrong !! \n please try after some time");
      console.log("blog create karte samay error aayi hai ==> ", error);
    }

  }

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImagePath(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  };

  return (
    <div className="createNewBlog w-full min-h-[86vh]">
      <form
        className="flex flex-col lg:flex-row  lg:w-[80%] mx-auto my-10 h-full"
        onSubmit={submitHandler}
      >
        <div className="left lg:w-[80%] h-full p-2">
          <div className="img w-full h-[250px]">
            <img
              src={file ? URL.createObjectURL(file) : blogdata?.imagePath}
              alt="your choosen pic"
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" flex flex-col gap-8 mt-[5rem]">
            <div className="flex gap-5 flex-col lg:flex-row">
              <label htmlFor="photo" className="text-center">
                <i className="bi bi-image text-2xl"></i>
              </label>
              <input
                type="file"
                name=""
                id="photo"
                onChange={fileHandler}
                className="create-input"
              />

              <input
                type="text"
                placeholder="Title"
                className="placeholder:text-2xl text-3xl font-semibold"
                id=""
                name="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <textarea
              placeholder="Write your Description here"
              cols="30"
              rows="10"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="right lg:w-[20%]  flex items-center justify-center">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Update Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
