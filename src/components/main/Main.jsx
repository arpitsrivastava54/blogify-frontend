import React from 'react'
import MainBlogs from "./MainBlogs";
import MainAbout from "./MainAbout";



const Main = () => {
  return (
    <div className='Main flex flex-col w-full  lg:flex-row  gap-[10%] px-10 py-3 mt-8'>
        <MainBlogs/>
        <MainAbout/>
    </div>
  )
}

export default Main