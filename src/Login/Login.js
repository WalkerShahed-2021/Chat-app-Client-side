import React, { useState } from "react";
import Nav from '../Pages/Home/Header/Nav/Nav';
import { useForm } from "react-hook-form";



const Login = () => {
   const [user, setUser] = useState({})

   const { register, handleSubmit } = useForm();
   const onSubmit = (data) => console.log(data);


  return (
   <div>
       <Nav></Nav>
       <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                    <input className="bg-[#F3F3F3] p-2 w-80 rounded mt-4 outline-none" placeholder="Enter Email" {...register("email")} />
                    <input className="bg-[#F3F3F3] p-2 w-80 rounded mt-4 outline-none" placeholder="Enter Password" {...register("password")} />
                    <input className="bg-black rounded p-2 w-80 text-white" value="Login" type="submit" />
                  <div className="divider">OR</div>
                  <button className="btn btn-outline btn-secondary">Continue With Google</button>
                </div>
            </div>
        </div>
   </div>
  );
};

export default Login;