import React from "react";
import "./Testimonials.css";
import img1 from "../../../Image_Icon/Image/Ellipse 90.png";
import img2 from "../../../Image_Icon/Image/Ellipse 91.png";
import img3 from "../../../Image_Icon/Image/Ellipse 92.png";

const Testimonials = () => {
  const userReview = [
    {
      img: img1,
      name: "Nash Patrik",
      title: "CEO, Manpol",
      pragrap:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Purus commodo ipsumduis laoreet maecenas. Feugiat",
    },
    {
      img: img2,
      name: "Miriam Barron",
      title: "CEO, Manpol",
      pragrap:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Purus commodo ipsumduis laoreet maecenas. Feugiat",
    },
    {
      img: img3,
      name: "Bria Malone",
      title: "CEO, Manpol",
      pragrap:
        "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Purus commodo ipsumduis laoreet maecenas. Feugiat",
    },
  ];
  return (
    <div className="bg-[#F3F3F3] h-96 mt-32">
      <div className="header-container">
        <div>
          <h1 className="text-2xl font-bold">Testimonials</h1>
          {/* <div className="flex items-center">
                    <img src="path/to/image.jpg"/>
                    <div>
                      <strong>Andrew Alfred</strong>
                      <span>Technical advisor</span>
                    </div>
                  </div> */}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Testimonials;

/* 
 <div className="bg-[#F3F3F3] h-[700px] mt-10">
      <div className="header-container">
        <h1 className="text-2xl font-bold text-center">Testimonials</h1>
        <div className="header-container flex mx-20 p-10">
          {userReview.map((user) =>
            <div className=" cart-desgin  bg-white rounded-xl shadow-lg space-y-2 flex">
             <img className="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src={user.img} alt=""/>
                <div className="text-center space-y-2">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            {user.name}
                        </p>
                        <p className="text-slate-500 font-medium">
                            {user.title}
                        </p>
                    </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
*/
