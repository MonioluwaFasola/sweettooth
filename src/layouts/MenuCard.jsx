import React from 'react'
import {BsStarFill} from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import Button from './Button'

const MenuCard = ({
  img, title, price
}) => {
  return (
    // <div className='w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
     <div className="w-full lg:w-1/4 p-5 rounded-lg"> 
        <img className='rounded-xl' src = {img} alt = "img" />
        <div className='space-y-4'>
          <h3 className='font-semibold text-center text-xl pt-6'>{title}</h3>
          <div className='flex flex-row justify-center'>
            <BsStarFill className='text-[#831843]'/>
            <BsStarFill className='text-[#831843]'/>
            <BsStarFill className='text-[#831843]'/>
            <BsStarFill className='text-[#831843]'/>
            <BsStarHalf className='text-[#831843]'/>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <h3 className='font-semibold text-lg p-2'>{price}</h3>
            <Button title = "Buy"/>
          </div>
        </div>
    </div>
  )
}

export default MenuCard
