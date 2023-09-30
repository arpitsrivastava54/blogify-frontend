import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Register from "./page/Register";
import Login from "./page/Login";
import BlogPage from "./page/BlogPage";
import UpdateProfilePage from "./page/UpdateProfilePage";
import CreateNewBlogPage from "./page/CreateNewBlogPage";
import UserBlogPage from "./page/UserBlogPage";
import UpdateBlog from "./page/UpdateBlog";



function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blogpage/:id" element={<BlogPage/>}/>
        <Route path="/updateprofile" element={<UpdateProfilePage/>}/>
        <Route path="/createnewblog/:userid" element={<CreateNewBlogPage/>}/>
        <Route path="/userblogs/:userid" element={<UserBlogPage/>}/>
        <Route path="/updateblog/:blogid" element={<UpdateBlog/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
