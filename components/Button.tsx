'use client'

import React from 'react'

interface IProps {
    text: string,
    
}

const Button = ({text}: IProps) => {
  return (
    <button onClick={() =>console.log("clicked")} className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition">
       {text} 
    </button>
  )
}

export default Button