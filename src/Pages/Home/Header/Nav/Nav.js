import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../Image_Icon/Image/Group 33069.png";

const Nav = () => {
  return (
    <div className="bg-[#F3F3F3] h-max">
      <div className="navbar header-container">
        <div className="w-[20%]">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center font-bold text-xl">
          <div className="flex mx-20 space-x-10 lg:block">
            <Link to="/home">Home</Link>
            <Link to="/home">About us</Link>
            <Link to="/home">Projects</Link>
            <Link to="/messenger">Messenger</Link>
            <Link to="/home">Admin</Link>
          </div>
        </div>
        <div className="navbar-end">
          <button className="p-1.5 m-1 w-20 text-center bg-slate-500 rounded text-white">
            <Link to="/login">LogIn</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
