import Label from "@/app/components/Label"
import { InputHTMLAttributes, forwardRef } from "react"

export interface InputFieldProps extends InputHTMLAttributes<HTMLDivElement> {
    type:string 
  }
  const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
function InputNew({type, ...props}:InputFieldProps,ref){
    return(
        
    <div className="w-72">
  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      type={type}
      ref={ref}
      {...props}
      />
          <Label>Email</Label>
  </div>
</div>
        
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