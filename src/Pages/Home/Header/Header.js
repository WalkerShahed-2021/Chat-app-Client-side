import React from "react";
import "./Header.css";
import logo from "../../../Image_Icon/Image/Group 33069.png";
import imges from "../../../Image_Icon/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-[#F3F3F3] h-max">
        <div class="navbar header-container">
              <div className="w-[20%]">
                <img src={logo} alt=""/>
              </div>
          <div class="navbar-center font-bold text-xl">
              <div class="flex mx-20 space-x-10 lg:block">
                <Link to="/home">Home</Link>
                <Link to="/home">About us</Link>
                <Link to="/home">Projects</Link>
                <Link to="/messenger">Messenger</Link>
                <Link to="/home">Admin</Link>
              </div>
          </div>
          <div class="navbar-end">
              <button className="p-1.5 m-1 w-20 text-center bg-slate-500 rounded text-white">
                LogIn
              </button>
          </div>
      </div>

       <div className="header-container flex md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 img-design">
             <div className="mt-20">
                <h1 className="font-bold text-5xl">We Build <br /> Your Dream</h1>
                <p className="mt-4 text-sm leading-loose">Online Easte Agency, the mordern way to sell your own home,<br />
                You can use Griffin Residential to market your property</p>
                <button className="p-1.5 m-1 mt-2 w-20 text-center bg-slate-500 rounded text-white">
                 Booking
                </button>
             </div>
             <div className="w-[40%] md:w-[100%] sm:w-[100%] mb-20 mt-4">
                 <img src={imges} alt="" />
             </div>
       </div>
    </div>
  );
};

export default Header;
