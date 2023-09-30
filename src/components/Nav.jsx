import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser, setUser } from "../redux/reducers/userReducer";
import { setSidebar } from "../redux/reducers/sidebarReducer";

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const sidebar = useSelector((state) => state.sidebar);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      dispatch(setUser(userInfo));
    }
  }, [dispatch]);

  function logoutHandler() {
    localStorage.removeItem("user");
    dispatch(removeUser());
    alert("logout successfully ..");
  }

  return (
    <>
      <div className="Nav p-5" id="nav">
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to={"/"} className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                s
                className="h-8 mr-3"
                alt="blogify Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Blogify
              </span>
            </Link>

            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0  md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white  rounded md:hover:text-blue-700 md:bg-transparent md:text-gray-900 md:p-0"
                    // aria-current="time"
                  >
                    Home
                  </Link>
                </li>

                {user ? (
                  <>
                    <li>
                      <Link
                        to={`/userblogs/${user.userId}`}
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        YOUR BLOGS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/createnewblog/${user.userId}`}
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        WRITE
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={"/"}
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        onClick={logoutHandler}
                      >
                        LOGOUT
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to={"/login"}
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        LOGIN
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/register"}
                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        REGISTER
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className=" md:order-2 n-profile flex gap-5 items-center justify-center">
              {user && (
                <div className="n-pro-img w-[45px] h-[45px] bg-red-400 rounded-full">
                  <Link>
                    <img
                      src="/assets/profile.webp"
                      alt="profile"
                      className="w-full h-full rounded-full"
                    />
                  </Link>
                </div>
              )}
              <div className="n-search-icon ">
                <a href="#nav">
                  <i
                    className="bi bi-list text-3xl md:hidden cursor-pointer"
                    onClick={() => {
                      dispatch(setSidebar(!sidebar));
                    }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* ----------------- side bar section ------------------------------ */}

      <div
        className={
          sidebar
            ? "Sidebar mt-9 bg-blue-100 h-screen md:hidden "
            : "Sidebar h-0"
        }
      >
        <ul
          className={
            sidebar
              ? "flex h-full   flex-col items-center gap-10 justify-center "
              : "hidden"
          }
          onClick={() => {
            dispatch(setSidebar(!sidebar));
          }}
        >
          <li>
            <Link
              to="/"
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
              aria-current="page"
            >
              Home
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link
                  to={`/userblogs/${user.userId}`}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  YOUR BLOGS
                </Link>
              </li>
              <li>
                <Link
                  to={`/createnewblog/${user.userId}`}
                  className="block py-2 pl-3 pr-4 text-white rounded bg-blue-700  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  WRITE
                </Link>
              </li>

              <li>
                <Link
                  to={"/"}
                  className="block py-2 pl-3 pr-4 text-white rounded bg-blue-700  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  onClick={logoutHandler}
                >
                  LOGOUT
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to={"/login"}
                  className="block py-2 pl-3 pr-4 text-white rounded bg-blue-700   md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  LOGIN
                </Link>
              </li>
              <li>
                <Link
                  to={"/register"}
                  className="block py-2 pl-3 pr-4 text-white rounded bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Nav;
