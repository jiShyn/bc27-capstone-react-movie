import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { logout } from "modules/Authentication/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const movePath = (path) => {
      navigate(`${path}`);
      console.log("login");
   };

   // const user = JSON.parse(localStorage.getItem("user"));
   const { user } = useSelector((state) => state.auth);
   // console.log("user redux", user.hoTen);
   const handleLogout = () => {
      dispatch(logout());
   };
   return (
      <nav className="m-container navbar navbar-expand-lg h-100">
         <div className="container-fluid">
            <a onClick={() => movePath("/")} className="navbar-brand">
               <MdLocalMovies />
               <span className="ms-1">Cyber Movie</span>
            </a>
            <button
               className="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarNav"
               aria-controls="navbarNav"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
                  <li className="nav-item px-3">
                     <button
                        onClick={() => movePath("/")}
                        className="nav-link"
                        aria-current="page"
                     >
                        Lịch Chiếu
                     </button>
                  </li>
                  <li className="nav-item px-3">
                     <button onClick={() => movePath("/")} className="nav-link">
                        Cụm rạp
                     </button>
                  </li>
                  <li className="nav-item px-3">
                     <button onClick={() => movePath("/")} className="nav-link">
                        Tin Tức
                     </button>
                  </li>
                  <li className="nav-item px-3">
                     <button onClick={() => movePath("/")} className="nav-link">
                        Ứng Dụng
                     </button>
                  </li>

                  <li className="nav-item px-3 ms-3">
                     {user ? (
                        <button
                           onClick={() => movePath("login")}
                           className="nav-link "
                        >
                           <FaUserCircle />

                           <span className="ms-1">{user.hoTen}</span>
                        </button>
                     ) : (
                        <button
                           onClick={() => movePath("login")}
                           className="nav-link "
                        >
                           <FaUserCircle />

                           <span className="ms-1">Đăng Nhập</span>
                        </button>
                     )}
                  </li>

                  <li className="nav-item px-3">
                     {user ? (
                        <button onClick={handleLogout} className="nav-link ">
                           <AiOutlineLogout />
                           <span className="ms-1">Đăng Xuất</span>
                        </button>
                     ) : (
                        <button
                           onClick={() => movePath("register")}
                           className="nav-link "
                        >
                           <FaUserCircle />
                           <span className="ms-1">Đăng Ký</span>
                        </button>
                     )}
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Header;
