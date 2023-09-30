import React, { useEffect, useState } from "react";
import Post from "../Post";
import axios from "axios";
import Skeleton from "../Skeleton";

const MainBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  async function fetchData() {
    try {
      const result = (
        await axios.get(
          "https://react-personal-blog-app.onrender.com/api/blog/allblogs"
        )
      ).data;
      setBlogs(result);
    } catch (error) {
      console.log("error aa gayi ===> ", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="lg:w-[70%] ">
      {blogs.length > 0 ? <Post blogs={blogs} /> : <><Skeleton />  </>}
    </div>
  );
};

export default MainBlogs;
