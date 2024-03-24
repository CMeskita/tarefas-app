import Link from 'next/link'
import React, { ButtonHTMLAttributes, InputHTMLAttributes, forwardRef } from 'react'


export interface InputFieldProps extends InputHTMLAttributes<HTMLDivElement> {
  type:string 
}
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  
function Input ({type, ...props}:InputFieldProps,ref) {

  return (
  
    <input className="shadow appearance-none block w-full text-blue-700 border border-blue-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
    type={type}
    ref={ref}
    {...props}
    />
  )
}
)
InputField.displayName = 'Input.Field'
export const Input = {
	Field: InputField,

}

export enum InputType {
  button = "button",
  checkbox = "checkbox",
  color = "color",
  date = "date",
  datetimelocal = "datetime-local",
  email = "email",
  file = "file",
  hidden = "hidden",
  image = "image",
  month = "month",
  number = "number",
  numeric = "numeric",
  password = "password",
  radio = "radio",
  range = "range",
 reset = "reset",
  search = "search",
  submit = "submit",
  tel = "tel",
  text = "text",
  time = "time",
  url = "url",
  week = "week"}