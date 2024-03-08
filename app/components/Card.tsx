import {    
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
interface ICardProps{
    children:any
}
export default function Card({children}:ICardProps){
    return(
<div className="p-4 border-2 border-blue-500  rounded-lg dark:border-gray-700 m-2">
    <div className="flex items-center justify-center h-24 rounded bg-gray-500 dark:bg-gray-800">
    </div>
       <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
       </div>

</div>
    )
 
}