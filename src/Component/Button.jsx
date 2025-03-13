

import React from 'react'

const Button = (props) => {
  return (
    <div>
      <div className={` border-2 rounded-xl ${props.active? "text-white bg-[#1554a5]":"text-[#1554a5] bg-white border-[#1554a5]"}  `}>
       <p className="text-2xl py-1 mx-5 my-2 text-left flex justify-content ">{props.text}</p>
      </div>
    </div>
  )
}

export default Button