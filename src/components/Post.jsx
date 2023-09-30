import React from "react";
import { Link } from "react-router-dom";

const Post = ({ blogs }) => {
  return (
    <div className="Post flex flex-wrap justify-between">
      {blogs.map((data) => {
        return (
          <div className="p-wrapper lg:w-[45%] mb-[5rem]" key={data._id}>
            <Link to={`/blogpage/${data._id}`}>
            <div className="p-img w-full h-[350px]">
              <img
                src={data.imagePath}
                alt="postimage"
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
            <div className="p-content ">
              
              
              <h2 className="text-2xl font-bold my-3">{data.title}</h2>
              <p className="text-justify text-sm line-clamp-4">{data.desc}</p>
            </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
