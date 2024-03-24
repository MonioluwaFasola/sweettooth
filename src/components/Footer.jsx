import React from 'react'
import { BiCake } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className= 'bg-[#831843] text-white rounded-3xl mt-8 md:mt-0 flex flex col md:flex row justify-between p-8 md:px-32 px-5'>
      
        <div className='w-full md:w-1/4'>
            <h1 className='text-xl font-semibold pb-4'>SWEET TOOTH</h1>
            <p >Satisfy Every Craving</p>
        </div>
        <div>
            <h1  className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
            <nav className='flex flex-col md:flex row gap-2'>
                <a className = 'hover:text-[#db2777]' href = "/">Home</a>
                <a className = 'hover:text-[#db2777] transition-all cursor-pointer' href = "/">Menu</a>
                <a className = 'hover:text-[#db2777] transition-all cursor-pointer' href = "/">About</a>
                <a className = 'hover:text-[#db2777] transition-all cursor-pointer' href = "/">Reviews</a>
            </nav>
        </div>
        <div>
        <h1  className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact us</h1>
        <p>sweettooth333@yahoo.com</p>  
        <a className = 'hover:text-[#db2777]' href = "/">Social Media Link</a>
       
        </div>
        <p>Developed by Fash. All rights reserved</p>
       </div>
       
  )
}

export default Footer
