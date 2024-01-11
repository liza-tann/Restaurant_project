import React from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';
import { useState } from 'react';

const Sidebarsmall = () => {
  const [toggle, setToggle] = useState(false);

    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }
  return (
    <>
      <div className="flex bg-lightorange items-center justify-center p-3 lg:flex-row">
          <div className="space-x-4">
            <div className='ssm:hidden lg:block space-x-2'>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">Breakfast</a>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">Lunch</a>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">Dinner</a>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">Dessert</a>
              <a href="#" className="text-white hover:bg-orange rounded-full px-5 py-2 text-xl">Beverage</a>
            </div>

            <div className='ssm:block lg:hidden'>
              {toggle ?(
                <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer ' />
                ):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white' />)}
            </div>
          </div>     
        </div>

        <div className='ssm:block lg:hidden'>
            {toggle ? (
                <div className='flex bg-lightorange justify-center'>
                  <ul>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Breakfast</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Lunch</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Dinner</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Dessert</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Beverage</li>
                  </ul>
            </div>
            ):(
                <div></div>
            )}
      </div>
    </>
  )
}

export default Sidebarsmall
