
import React, { ButtonHTMLAttributes } from 'react'


export interface IButtonProps  {
  children:any
  onClick?: () => void
}
  
export function Button ({children,onClick}:IButtonProps) {

  return (
//<input className="shadow appearance-none block w-full text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
    <button className='shadow appearance-none block w-full border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none bg-blue-700 hover:[bg-blue-700] text-white font-bold  focus:border-gray-200'///'bg-blue-500 hover:[bg-blue-700] text-white font-bold py-1 px-4 rounded'
    onClick={onClick}
    >
    {children}
   
  
    </button>

  )
}