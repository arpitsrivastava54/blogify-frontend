import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const CreateNewBlogPage = () => {
  const userId = useParams().userid;
  const username = JSON.parse(localStorage.getItem("user")).username

  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imagePath, setImagePath] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    if (file) {
      const data = {
        title,
        desc,
        imagePath,
        username,
      };

      try {
        await axios.post(
          `https://react-personal-blog-app.onrender.com/api/blog/createblog/${userId}`,
          data
        );
        navigate(`/userblogs/${userId}`);
        alert("blog created succesfully..");
      } catch (error) {
        alert("Something wrong !! \n please try after some time");
        console.log("blog create karte samay error aayi hai ==> ", error);
      }
    } else {
      alert("please choose photo");
    }



  }


  const fileHandler = (e) =>{
    setFile(e.target.files[0])
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      
      setImagePath(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
  }

  return (
    <div className="createNewBlog w-full min-h-[86vh]">
      <form
        className="flex flex-col lg:flex-row  lg:w-[80%] mx-auto my-10 h-full"
        onSubmit={submitHandler}
      >
        <div className="left lg:w-[80%] h-full p-2">
          <div className="img w-full h-[250px]">
            <img
              src={file ? URL.createObjectURL(file) : "/assets/img.png"}
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
                required={true}
              />
            </div>

            <textarea
              placeholder="Write your Description here"
              cols="30"
              rows="10"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required={true}
            ></textarea>
          </div>
        </div>
        <div className="right lg:w-[20%]  flex items-center justify-center">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Upload Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewBlogPage;
