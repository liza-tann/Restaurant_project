import React from 'react';
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineLunchDining } from "react-icons/md";
import { MdOutlineDinnerDining } from "react-icons/md";
import { LuDessert } from "react-icons/lu";
import { BiDrink } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="flex bg-orange opacity-70">
      <div className="flex text-white p-3">
        <div>
          <ul className='pt-10'>
            <li className="mb-4">
              <a href="#" className="hover:text w-40 h-40 ml-12">
              <MdOutlineFreeBreakfast className='text-black opacity-70 w-8 h-8 mx-4'  />
                Breakfast
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text w-40 h-40 ml-12">
                <MdOutlineLunchDining className='text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-3'>lunch</p>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text w-40 h-40 ml-12">
                <MdOutlineDinnerDining className='text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-3'>Dinner</p>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text w-40 h-40 ml-12">
                <LuDessert className='text-black opacity-70 w-8 h-8 mx-4' />
                <p className='mx-2'>Dessert</p>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:text w-40 h-40 ml-12">
                <BiDrink className='text-black opacity-70 w-8 h-8 mx-4'  />
                Beverages
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;