import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="header-container h-auto">
      <div className="text-center mt-28">
        <h1 className="font-bold">Contact</h1>
        <h2 className="text-2xl font-bold">
          Let us handle your <br /> project, professionally.
        </h2>
      </div>
      <div>
        <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
             <div className="grid justify-items-center">
                <div>
                    <input className="bg-[#F3F3F3] p-2 w-80 mx-10 mt-4 outline-none " placeholder="First Name" {...register("firstName")} />
                    <input className="bg-[#F3F3F3] p-2 w-80 mx-10 mt-4 outline-none" placeholder="Last Name" {...register("lastName")} />
                </div>
                <div>
                    <input className="bg-[#F3F3F3] p-2 w-80 mx-10 mt-4 outline-none" placeholder="Enter Email" {...register("email")} />
                    <input className="bg-[#F3F3F3] p-2 w-80 mx-10 mt-4 outline-none" placeholder="Enter Phone" {...register("phone")} />
                </div>
                   <textarea placeholder="Your Messege" className="bg-[#F3F3F3]  h-32 p-2 w-[63%] mx-10 mt-4 outline-none" name="" id="" ></textarea>              
              </div>
          <div className="mt-4 flex justify-center mb-20">
                <input className="bg-gray-500 p-2 w-40 text-white" value="Send Messege" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
