import React, { useEffect, useState } from "react";
import MainAbout from "../components/main/MainAbout";
import Blog from "../components/Blog";
import {useParams} from "react-router-dom"
import {getBlog} from "../apiCallingFunctions"

const BlogPage = () => {
  const [blogData , setBlogData] = useState({});


  const blogid = useParams().id;
  
  
  useEffect(()=>{
   const fetchData = async ()=>{
      const result = await getBlog(blogid);
      setBlogData(result[0])
    }
    fetchData();
  },[blogid])


  return (
    <div className="UserBlogPage min-h-[86vh] flex flex-col lg:flex-row w-full px-5 gap-[5%] mt-9">
       
       <Blog blogData={blogData}/>
      <MainAbout/>
    </div>
  );
};
export default BlogPage;
