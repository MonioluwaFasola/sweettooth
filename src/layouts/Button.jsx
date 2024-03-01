import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className = 'px-5 py-0.5 border-2 border-[#db2777] text-[#db2777] hover:bg-[#831843] hover:text-white transition-all rounded-full '>
        {props.title}
      </button>
    </div>
  )
}

export default Button
