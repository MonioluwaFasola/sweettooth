import React from 'react';
import {Link} from 'react-scroll';
import {BiCake, BiDish} from 'react-icons/bi';
import Button from '../layouts/Button';

const Navbar = () => {
  return (
    <div className='fixed w-full'>
        <div>
            <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                <div className='flex flex-row items-center cursor-pointer'>
                    <span>
                        <BiCake size = {32}/>
                    </span>
                    <h1 className='text-xl font-semibold'>SWEET TOOTH</h1>
                </div>
                <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                    <Link 
                     to= "home" 
                     spy={true} 
                     smooth={true} 
                     duration={500} 
                     className= " hover:text-[#db2777] transition-all cursor-pointer "
                     >
                        HOME
                    </Link>
                    {/* <Link
                     to= "items" 
                     spy={true}  
                     smooth={true} 
                     duration={500} 
                     className='hover:text-[#db2777] transition-all cursor-pointer'
                     >
                        ITEMS
                    </Link> */}
                    <Link 
                    to= "about" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className='hover:text-[#db2777] transition-all cursor-pointer'
                    >
                      ABOUT
                    </Link>
                    <Link 
                    to= "menu" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className='hover:text-[#db2777] transition-all cursor-pointer'
                    >
                       MENU
                    </Link>
                    <Link 
                    to= "reviews" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                     className='hover:text-[#db2777] transition-all cursor-pointer'
                     >
                       REVIEWS
                    </Link>
                    <Button title = "LOGIN"/> 
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar
