import FromTarefa from "@/app/components/Contents/FormTarefa";
import { NavDefault } from "@/app/components/NavDefault";

export default function Tare()  {
 return(
 <>
 <NavDefault/>
 <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
 
 <FromTarefa />
 </div>
 </>)
}