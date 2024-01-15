import React from 'react';
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { BiDrink } from "react-icons/bi";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex bg-orange opacity-70">
      <div className="flex text-white p-3">
        <div>
          <ul className='pt-10'>
            <li className="mb-4">
              <NavLink to="/Breakfast" className="hover:text w-40 h-40 ml-12">
              <MdOutlineFreeBreakfast className='text-black opacity-70 w-8 h-8 mx-4'  />
                Breakfast
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/lunch" className="hover:text w-40 h-40 ml-12">
                <MdOutlineLunchDining className='text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-3'>lunch</p>
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/Dinner" className="hover:text w-40 h-40 ml-12">
                <MdOutlineDinnerDining className='text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-3'>Dinner</p>
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/Dessert" className="hover:text w-40 h-40 ml-12">
                <LuDessert className='text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-2'>Dessert</p>
              </NavLink>
            </li>
            <li className="mb-4">
              <NavLink to="/Beverages" className="hover:text w-40 h-40 ml-12">
                <BiDrink className='text-black opacity-70 w-8 h-8 mx-4'  />
                Beverages
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;