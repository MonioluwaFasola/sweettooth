import React from 'react'
import flyingdonut from '../assets/img/flyingdonut.jpg'
import plaindonut from '../assets/img/plaindonut.jpg.jpg'
// import { Button } from 'react-scroll'
import Button from '../layouts/Button'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-40 px-5'>
       <img className='rounded-xl' src ={flyingdonut} alt='img' />
       <div className='space-y-4 lg:pt-14'>
        <h1 className='font-semibold text-4xl text-center md:text-start'>The Sweet Tooth Club</h1>
        <p>
        lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
        </p>
        <p>
        lorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
        </p>
        
        <div className='flex justify-center lg:justify-start'>
          <Button title='Learn more'/>
        </div>
       </div>
    </div>
  )
}

export default About
