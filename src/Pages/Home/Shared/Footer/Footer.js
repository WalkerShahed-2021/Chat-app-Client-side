import React from 'react';
import map from '../../../../Image_Icon/Icon/map-pin-2-fill.png'
import vactor from '../../../../Image_Icon/Icon/Vector.png'
import vactor1 from '../../../../Image_Icon/Icon/Vector-1.png'
import vactor2 from '../../../../Image_Icon/Icon/Vector-2.png'
import vactor3 from '../../../../Image_Icon/Icon/Vector-3.png'

const Footer = () => {
    return (
        <div className='h-auto py-20 bg-slate-500'>
              <div className='header-container grid grid-cols-4 gap-4 text-white'>
                    <div className='flex'>
                        <img className='h-[30px] mx-4' src={map} alt="" />
                        <p>H#000 (0th Floor), Road #00, <br />
                        New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <p className="text-1xl font-bold">Company</p>
                       <div className='mt-4'>
                            <p>About</p>
                            <p>Project</p>
                            <p>Our Team</p>
                            <p>Terms Conditions</p>
                            <p>Submit Listing</p>
                       </div>
                    </div>
                    <div>
                        <p className="text-1xl font-bold">Quick Links</p>
                         <div className='mt-4'>
                            <p>Quick Links</p>
                            <p>Rentals</p>
                            <p>Sales</p>
                            <p>Contact</p>
                            <p>Our blog</p>
                         </div>
                    </div>
                    <div>
                        <p className="text-1xl font-bold">About us</p>
                        <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Purus commodo ipsum
                        duis laoreet maecenas. Feugiat</p>
                        <div className='flex mt-3'>
                            <div>
                              <img className='h-[30px] mx-2' src={vactor} alt="" />
                            </div>
                            <div>
                                <img className='h-[30px] mx-2' src={vactor1} alt="" />
                            </div>
                            <div>
                                <img className='h-[30px] mx-2' src={vactor2} alt="" />
                            </div>
                            <div>
                                <img className='h-[30px] mx-2' src={vactor3} alt="" />
                            </div>
                        </div>
                    </div>
              </div>
              <p className='text-center text-white mt-20'>Copyright programming hero 2021</p>
        </div>
    );
};

export default Footer;