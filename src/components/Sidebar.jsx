import React from 'react';
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { LuDessert } from "react-icons/lu";
import { BiDrink } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex bg-light text-14 font-400">
      <div className="flex text-black p-3 pt-4">
        <div>
          <ul className='pt-1'>
            <li className="mb-4">
              <Link to="/Breakfast" className="hover:text-main hover:font-bold w-40 h-40 ml-12">
              <MdOutlineFreeBreakfast className='transition duration-300 ease-in-out transform hover:text-main hover:scale-110 text-black opacity-70 w-8 h-8 mx-4'  />
                Breakfast
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/lunch" className="hover:text-main hover:font-bold w-40 h-40 ml-12">
                <MdOutlineLunchDining className='hover:text-main transition duration-300 ease-in-out transform hover:text-main hover:scale-110 text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-3'>lunch</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/Dinner" className="hover:text-main hover:font-bold w-40 h-40 ml-12">
                <MdOutlineDinnerDining className='hover:text-main transition duration-300 ease-in-out transform hover:text-main hover:scale-110 text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-3'>Dinner</p>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/Dessert" className="hover:text-main hover:font-bold w-40 h-40 ml-12">
                <LuDessert className='hover:text-main transition duration-300 ease-in-out transform hover:text-main hover:scale-110 text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-2'>Dessert</p>
              </Link>
            </li>
            
            <li className="mb-4">
              <Link to="/Beverages" className="hover:text-main hover:font-bold w-40 h-40 ml-12">
                <BiDrink className='hover:text-main transition duration-300 ease-in-out transform hover:text-main hover:scale-110 text-black opacity-70 w-8 h-8 mx-4'  />
                Beverages
              </Link>
            </li>

            <li className="mb-4">
              <Link to="/" className="hover:text-main hover:font-bold w-40 h-40 ml-12">
                <BiFoodMenu className='hover:text-main transition duration-300 ease-in-out transform hover:text-main hover:scale-110 text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-1'>All Menu</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
