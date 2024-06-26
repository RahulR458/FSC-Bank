import React from 'react'

const Landingpage = () => {
  return (
    <div className="max-w-[1640px] h-screen mx-auto flex flex-col justify-between items-center bg-custom-gray">
  {/* Navbar */}
  <div className="w-full h-[50px] bg-black flex justify-between items-center rounded-sm">
    <h1 className="text-yellow-300 px-6 font-serif font-bold text-xl bg-black">
      FSC
    </h1>
    <div className="flex py-1">
      <h1 className="px-4 py-2 bg-yellow-300 cursor-pointer font-sans text-lg font-bold">
        Login
      </h1>
      <h1 className="px-4 py-2 bg-orange-400 cursor-pointer font-sans text-lg font-bold">
        Signup
      </h1>
    </div>
  </div>

  {/* Body */}
  <div className="w-full h-full flex justify-between">
    <div className="w-full sm:w-[700px] flex flex-col justify-center items-baseline  sm:p-28 p-10">
      <h3 className="p-1 bg-gray-800 text-white">Hello</h3>
      <h1 className="text-5xl font-sans text-yellow-300">
        Welcome to
        <br />
        FSC
      </h1>
      <p className="text-white p-1">Get started with our guides.</p>
    </div>
    <div className="hidden sm:block w-[1400px] bg-slate-100">
      <img
        className="w-full h-full object-cover"
        src="https://static.vecteezy.com/system/resources/previews/031/723/973/non_2x/indian-diwali-celebrating-with-diya-lighting-family-girls-kids-all-happy-moments-ai-generative-free-photo.jpg"
        alt="Kids in nature"
      />
    </div>
  </div>
</div>

  );
}

export default Landingpage