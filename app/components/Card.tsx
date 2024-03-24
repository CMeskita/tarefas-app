import {    
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
interface ICardProps{
    children:any
    className:string
}
export default function Card({children,className}:ICardProps){
    return(<>
        <div className={`shadow shadow-gray-700 flex items-center justify-center h-50 rounded  dark:bg-gray-800 ${className}  `}>
   {children}

</div>
    </>)
 
}