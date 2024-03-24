import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import shot1 from '../assets/img/shot 1.jpg'
import shot3 from '../assets/img/shot 3.jpg'

const Reviews = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
      <h1 className='text-4xl font-semibold text-center lg:pt-16 pb-10'>Customer's Lens</h1>
      <div className='flex flex-col md:flex-row gap-5 mt-5'>
        <ReviewCard img={shot1} title='Lily Armani'/>
        <ReviewCard img={shot3} title='Lexus susan'/>
        <ReviewCard img={shot1} title='Lily Armani'/>
      </div>
    </div>
  )
}

export default Reviews
