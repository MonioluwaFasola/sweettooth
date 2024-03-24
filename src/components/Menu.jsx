import React from 'react'
import MenuCard from '../layouts/MenuCard'
import blueberrymilkshake from '../assets/img/blueberrymilkshake.jpg'
import strawberrymilkshake from '../assets/img/strawberrymilkshake.jpg'
import milkshakecake from '../assets/img/milkshakecake.jpg'
import banannaicecream from '../assets/img/bananna.jpg'
import vanillaicecream from '../assets/img/vanilla.jpg'
import strawberryicecream from '../assets/img/strawberry.jpg'

const cards=[
  {
    id:1,
    image:blueberrymilkshake,
    title:'Blueberry Milkshake',
    price:'#8000'
  },
  {
    id:1,
    image:blueberrymilkshake,
    title:'Blueberry Milkshake',
    price:'#8000'
  },
  {
    id:1,
    image:blueberrymilkshake,
    title:'Blueberry Milkshake',
    price:'#8000'
  }
]

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center pt-24 pb-10' >Our Menu</h1>
      <div className='flex flex-wrap gap-7 justify-center'>
        {
          cards?.map((card, index)=>(
            <MenuCard index={index} img = {card?.image} title ={card?.title} price={card?.price}/>
          ))
        }
        {/* <MenuCard img = {blueberrymilkshake} title ='Blueberry Milkshake' price='#8000'/>
        <MenuCard img = {strawberrymilkshake} title ='Strawberry Milkshake' price='#8000'/>
        <MenuCard img = {milkshakecake} title ='Milkshake Cake' price='#5000'/>
        <MenuCard img = {banannaicecream} title ='Bananna Icecream' price='#4000'/>
        <MenuCard img = {vanillaicecream} title ='Vanilla Icecream' price='#4000'/>
        <MenuCard img = {strawberryicecream} title ='Strawberry Icecream' price='#4000'/> */}
      </div>
    </div>
  )
}

export default Menu
