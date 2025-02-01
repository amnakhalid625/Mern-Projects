import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import Moral from './Moral';


const Navbar = () => {
    const[isModalOpen,setIsModalOpen]=useState(false)
  return (
    <div className="w-full min-h-screen bg-[#eff1f5] flex flex-col items-center p-4">
    {/* Header Section */}
    <div className="w-full max-w-5xl md:h-24 mx-auto mt-10 rounded-xl bg-gradient-to-r from-green-500 to-purple-500 shadow-lg flex flex-col md:flex-row justify-between items-center px-6 py-4 text-white">
      <h1 className="font-black text-xl md:text-3xl">Manage Employees</h1>
      <button onClick={()=>setIsModalOpen(true)}
      className="bg-white text-green-600 hover:bg-green-500 hover:text-white transition-all px-5 py-2 rounded-lg flex items-center gap-2 font-bold shadow-md">
        <FaPlusCircle size={22} />
        Add New Employee
      </button>
    </div>

    {/* Employee Table Header */}
    <div className="w-full max-w-5xl bg-white mt-8 p-5 rounded-lg shadow-lg grid grid-cols-5 text-center font-semibold text-gray-700 border-b border-gray-300">
      <p>Name</p>
      <p>Father</p>
      <p>Email</p>
      <p>Phone</p>
      <p>Actions</p>
    </div>

    {/* Employee List Placeholder */}
    <div className="w-full max-w-5xl bg-white p-5 rounded-lg shadow-lg flex justify-center items-center text-gray-500 mt-4">
      No Employees Added Yet
    </div>
  </div>
  )
}

export default Navbar