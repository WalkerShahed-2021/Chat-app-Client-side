import React from "react";
import logo from "../../../Image_Icon/Image/Ellipse 91.png";

const MainMessegeSection = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg rounded-lg">
        <div className="flex-1">
          <div className="flex">
            <img className="w-[20%] rounded-lg" src={logo} alt="" />
            <div className="mt-4">
              <h2 className="text-xl text-bold">Ali Mohammed</h2>
              <p>Online</p>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div>{/* main msg see */}</div>
      <div className="mt-96">
        <textarea
          placeholder="Write Messege"
          className="bg-[#F3F3F3]  h-32 p-2 w-full mt-4 border-2"
          name=""
          id=""
        ></textarea>
      </div>
      <input className="btn" type="submit" value="Send" />
    </div>
  );
};

export default MainMessegeSection;
