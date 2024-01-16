// import React, { useState } from 'react';
// import Logo from "../assets/logo.png";
// import UserProfile from './userProfile'; // Import your UserProfile component

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="flex flex-col lg:flex-row items-start justify-between">
//       <div className="flex items-center space-x-2">
//         <img src={Logo} alt="Restaurant Logo" className="w-10 h-10 p-1" />
//         <h1 className="font-semibold text-white">malevolent-kitchen</h1>
//       </div>
//       <div className="lg:hidden cursor-pointer ml-auto" onClick={toggleMenu}>
//         <svg
//           className="w-10 h-10 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           ></path>
//         </svg>
//       </div>
      
//       <div className={`lg:flex lg:flex-col lg:items-end space-x-4 text-white lg:pr-auto mt-4 lg:mt-0 ${menuOpen ? 'flex' : 'hidden'}`}>
//         <ul className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} items-center justify-center space-x-4 lg:space-x-10 rounded-lg p-1`}>
//           <li><a href="#" className='hover:bg-lightorange rounded-full px-1 py-1 text-sm flex items-center' >Home</a></li>
//           <li><a href="#" className='hover:bg-lightorange rounded-full px-1 py-1 text-sm flex items-center' >About</a></li>
//           <li><a href="#" className='hover:bg-lightorange rounded-full px-1 py-1 text-sm flex items-center' >Contact us</a></li>
//           <li><a href="#" className='hover:bg-lightorange rounded-full px-1 py-1 text-sm flex items-center' >Announcement</a></li>
//           <li><a href="#"><UserProfile /></a></li>
//         </ul>
//       </div>
      
//     </nav>
//   );
// };

// export default Nav;

import React, { useState, useEffect } from 'react';
import Logo from "../assets/logo02.png";
import UserProfile from './userProfile'; // Import your UserProfile component
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-main flex flex-row lg:flex-row items-center justify-between px-1">
      <NavLink to='/'>
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Restaurant Logo" className="w-10 h-10 p-1" />
          <h1 className="font-semibold text-white">malevolent-kitchen</h1>
        </div>
      </NavLink>

      <div className="lg:hidden cursor-pointer ml-auto" onClick={toggleMenu}>
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
        <List>
          <ListItem button>
            <ListItemText primary={<NavLink to="/Home">Home</NavLink>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<NavLink to="/About">About</NavLink>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<NavLink to="/Contact">Contact us</NavLink>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<NavLink to="/Announcement">Announcement</NavLink>} />
          </ListItem>
          <ListItem>
            <UserProfile />
          </ListItem>
        </List>
      </Drawer>

      {(windowWidth >= 1024) && (
        <div className={`lg:flex lg:flex-col lg:items-end space-x-4 text-white lg:pr-auto mt-4 lg:mt-0 ${menuOpen ? 'flex' : 'hidden'}`}>
        <ul className={`lg:flex ${menuOpen ? 'flex' : 'hidden'} justify-end space-x-4 lg:flex-row lg:space-x-10 rounded-lg p-1`}>
          <li><NavLink to="/Home" className='hover:bg-light rounded-full px-1 py-1 text-sm' >Home</NavLink></li>
          <li><NavLink to="/About" className='hover:bg-light rounded-full px-1 py-1 text-sm' >About</NavLink></li>
          <li><NavLink to="/Contact" className='hover:bg-light rounded-full px-1 py-1 text-sm' >Contact us</NavLink></li>
          <li><NavLink to="/Announcement" className='hover:bg-light rounded-full px-1 py-1 text-sm' >Announcement</NavLink></li>
          {(windowWidth > 768 || menuOpen) && ( // Render UserProfile when the window width is greater than 768 pixels or menu is open
            <li><a href=""><UserProfile /></a></li>
          )}
        </ul>
        </div>
      )}

       
    </nav>
  );
};

export default Nav;