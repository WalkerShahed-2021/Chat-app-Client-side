import React from "react";
import "./Service.css";
import logo1 from '../../../Image_Icon/Icon/affordable 1.png'
import logo2 from '../../../Image_Icon/Icon/apartment 1.png'
import logo3 from '../../../Image_Icon/Icon/lessee 1.png'


const Service = () => {
    const cards = [
        {img: logo1, id: 1, title: 'Office Interior Design', price: 450, pragrap: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duisenim velit mollit'},
        {img: logo2, id: 2, title: 'Showroom Design', price: 320, pragrap: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duisenim velit mollit'},
        {img: logo3, id: 3, title: 'Residential/ Home', price: 290, pragrap: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duisenim velit mollit'},
    ]
  return (
    <div className="mt-20">
      <div className="text-center mb-10">
        <p className="font-bold">Service</p>
        <h1 className="text-2xl font-bold">
          We re an agency tailored to all <br /> clients needs that always delivers
        </h1>
      </div>
       
       <div className="header-container flex mb-14">
          <div className="md:grid md:grid-cols-3 md:gap-14 sm:grid sm:grid-cols-2 sm:gap-14">
            {
              cards.map(card => 
              <div key={card.id} className="text-center mt-2">
                  <div className="hover:card mt-14 h-38 w-70 hover:card-compact hover:h-80 hover:w-80  hover:p-2  hover:bg-base-100 hover:shadow-2xl">
                      <div className="hover:mt-6 h-48">
                          <img className="w-[80px]  ml-20" src={card.img} alt="" />
                          <h2 className="text-xl font-bold">{card.title}</h2>
                          <p className="text-xl font-bold">${card.price}</p>
                          <p>{card.pragrap}</p>
                      </div>
                  </div>
              </div>)
            }
          </div>
       </div>
       <div className="mt-10 flex justify-center sm:mt-40">
          <p className="bg-gray-500 p-2 w-38 text-white">Explore more</p>
       </div>
</div>
  );
};

export default Service;
