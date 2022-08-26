import React from "react";
import "./Projects.css";
import Project1 from "../../../Image_Icon/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png";
import Project2 from "../../../Image_Icon/Image/Mask Group.png";
import Project3 from "../../../Image_Icon/Image/Mask Group-1.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <div className="mt-20">
        <div className="text-center mb-10">
            <p className="font-bold">Projects</p>
            <h1 className="text-2xl font-bold">
              Discover the latest Interior Design <br /> available today
            </h1>
        </div>
      <div className="w-[30%] img-style flex header-container">
          <div className="md:grid md:grid-cols-3 md:gap-10 sm:grid sm:grid-cols-2 sm:gap-10">
            <div className="text-center sm:mb-10">
              <img src={Project1} alt="" />
                <div className="mt-4 border-x">
                  <h1 className="text-1xl font-bold">Villa on Washington Avenue</h1>
                  <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="text-center sm:mb-10">
              <img src={Project2} alt="" />
                <div className="mt-4 border-x">
                  <h1 className="text-1xl font-bold">Villa on Washington Avenue</h1>
                  <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="text-center sm:mb-10">
              <img src={Project3} alt="" />
                <div className="mt-4 border-x">
                  <h1 className="text-1xl font-bold">Villa on Washington Avenue</h1>
                  <p>Dhaka, Bangladesh</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Projects;
