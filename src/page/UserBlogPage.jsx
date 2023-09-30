import React, { useEffect, useState } from "react";
import { getBlog } from "../apiCallingFunctions";
import Post from "../components/Post";
import { useParams } from "react-router-dom";

const UserBlogPage = () => {
  const getUsersBlogByUsername = getBlog;
  const userId = useParams().userid;
  const [blogs, setBlogs] = useState([]);

  

  useEffect(() => {
    const fetchData = async ()=> {
      try {
        const result = await getUsersBlogByUsername(`allusersblogs/${userId}`);
        setBlogs(result);
      } catch (error) {
        console.log("KUCH gadbad hai");
      }
    }
    fetchData();
  }, [getUsersBlogByUsername,userId]);

  return (
    <div className="UserblogPage min-h-[80vh] p-5 mt-9">
      {blogs.length > 0 ? (
        <Post blogs={blogs} />
      ) : (
        <>
          <h1 className="mt-[5rem] text-3xl font-semibold text-center">
            No Blogs Posted Yet ! <br /> <br />
            please write some blogs first ..
          </h1>

        </>
      )}
    </div>
  );
};

export default UserBlogPage;
