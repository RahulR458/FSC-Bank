import React from "react";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="max-w-[1640px] mx-auto  h-screen overflow-hidden  bg-slate-100">
      <Navbar />

      {/* Home Details */}

      <div className="xl:flex">
        {/* Home Ad */}
        <div className="xl:w-[640px] h-full  xl:flex bg-custom-image  ">
          <div className="xl:w-[640px] h-full  flex  flex-col items-center xl:pt-32 pt-4">
            <h1 className="sm:text-5xl text-2xl font-bold font-sans">
              Welcome back to <br />
              <span className="text-violet-800 text-6xl font-serif">FSC</span>
            </h1>
            <h1 className="xl:mt-36 md:mt-12 mt-4 font-mono sm:text-xl text-xs font-bold bg-violet-300 p-2 rounded-3xl shadow shadow-custom-light">
              Best Way To Track Money..
            </h1>
          </div>
        </div>

        {/* User Details */}
        <div className="xl:w-[1000px]  h-auto  flex justify-center sm:pt-32  pt-8 bg-slate-100">
          <div className="w-[600px] h-auto sm:bg-slate-200 sm:shadow-md shadow-custom-light flex justify-center items-center flex-col p-4 rounded-md">
            <div className="h-20 w-20 ">
              <img
                className="rounded-sm"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
                alt=""
              />
            </div>
            <h1 className="font-bold font-sans ">User Name</h1>
            <h1 className="font-medium font-sans pt-2">
              Mobile No: 1234567890
            </h1>
            <h1 className="font-medium font-sans pt-2">Email Id :</h1>
            <h1 className="font-medium font-sans pt-2">Account No : </h1>
            <h1 className="font-medium font-sans pt-2">IFSC code :</h1>
            <h1 className="font-medium font-sans pt-2">Branch Name :</h1>
            <h1 className="font-medium font-sans pt-2">Address :</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
