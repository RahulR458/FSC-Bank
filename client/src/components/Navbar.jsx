import React from 'react'
import { MdHome } from "react-icons/md";
import { PiHandDeposit } from "react-icons/pi";
import { PiHandWithdraw } from "react-icons/pi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

export const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto sm:h-[80px] h-[100px]  bg-slate-300 pt-6">
      <div className="flex justify-between sm:items-center text-violet-800 px-6 font-serif font-bold sm:text-3xl text-2xl">
      <div>
        FSC
      </div>
      <div className=" space-x-10 sm:space-x-6 text-black px-6 font-sans font-semibold text-lg sm:text-sm hidden sm:flex cursor-pointer">
        <h1>Home</h1>
        <h1>Diposit</h1>
        <h1>Withdraw</h1>
        <h1>Account b/c</h1>
        <h1>Transaction HIstory</h1>
      </div>
      <div className="flex px-4 space-x-4">
        <h1 className="font-sans font-semibold text-sm pt-1 text-black">User</h1>
        <img
          className="w-8 h-8 border border-black rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
          alt=""
        />
        {/* <div className='w-8 h-8'><FaUserCircle /></div> */}
      </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col sm:hidden ">
        <hr className='mt-2' />
        <div className='flex justify-between items-center w-full text-xl font-bold space-x-3  p-1 cursor-pointer'>
        <h1 className='px-4 pt-1 w-14 h-6 hover:bg-slate-400 rounded-sm'>{<MdHome />}</h1>
        <h1 className='px-4 pt-1 w-14 h-6 hover:bg-slate-400 rounded-sm'><PiHandDeposit /></h1>
        <h1 className='px-4 pt-1 w-14 h-6 hover:bg-slate-400 rounded-sm'><PiHandWithdraw /></h1>
        <h1 className='px-4 pt-1 w-14 h-6 hover:bg-slate-400 rounded-sm'><MdAccountBalanceWallet /></h1>
        <h1 className='px-4 pt-1 w-14 h-6 hover:bg-slate-400 rounded-sm'><GrTransaction /></h1>
        </div>
      </div>
    </div>
  );
}
