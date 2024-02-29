import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = ({count}) => {

    const [sideNav, setSideNav] = useState(false);

   

  return (
    <div className='fixed z-50 top-0 left-0 w-full bg-white'>

    <div className='flex justify-between py-[20px] px-[25px] text-[18px] font-semibold drop-shadow-sm border-b relative'>
      
      <div className='cursor-pointer'>
        <Link to="/">
        <p>Yummi<span className='text-[#fbc531]'>Food</span></p>
        </Link>
      </div>

      <div>
        <ul className='sm:flex gap-4 hidden cursor-pointer'>
          <Link to="/">
          <li className=' hover:text-[#fbc531]'>Home</li>
          </Link>
          <Link to="/aboutus">
          <li className=' hover:text-[#fbc531]'>About Us</li>
          </Link>
          <Link to="/ourfood">
          <li className=' hover:text-[#fbc531]'>Our Food</li>
          </Link>
          <Link to="/signin">
          <li className=' hover:text-[#fbc531]'>Sign In</li>
          </Link>
        </ul>
      </div>
            {/* Using Turnury Operator for click on close menu bar */}
      {
        sideNav?( 
        <div className='bg-[black] text-[#777] w-[200px] absolute top-0 right-0 text-center h-[60vh] flex items-center justify-center z-40 rounded'>
        <RxCross2 className='absolute top-3 right-3 cursor-pointer' size={30} onClick={()=>setSideNav(!sideNav)}/>
        <ul className='flex gap-12  cursor-pointer flex-col '>
          <Link to="/">
          <li className=' hover:text-[#fbc531]' onClick={()=>setSideNav(!sideNav)}>Home</li>
          </Link>
          <Link to="/aboutus">
          <li className=' hover:text-[#fbc531]' onClick={()=>setSideNav(!sideNav)}>About Us</li>
          </Link>
          <Link to="/ourfood">
          <li className=' hover:text-[#fbc531]' onClick={()=>setSideNav(!sideNav)}>Our Food</li>
          </Link>
          <Link to="/signin">
          <li className=' hover:text-[#fbc531]' onClick={()=>setSideNav(!sideNav)}>Sign In</li>
          </Link>
        </ul>
      </div> ):('')
      }

      <div className='flex gap-4 cursor-pointer'>
        <div><GiHamburgerMenu size={30} className='block sm:hidden' onClick={()=>setSideNav(!sideNav)}/></div>
        <div className="flex items-center relative">
          <FaCartPlus size={30} />
          {count > 0 && (
            <div className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {count}
            </div>
          )}
        </div>

      </div>
      
    </div>

    </div>
  );
};

export default Header;



