import Link from "next/link";

import {
    XMarkIcon,
    UserCircleIcon,
    BookOpenIcon
    
  } from '@heroicons/react/24/outline'
import {MdDashboard,MdHome,MdSupervisorAccount,MdExitToApp} from 'react-icons/md'
import { setCookie } from "nookies";
interface INavProps {
   
    usuarioLogado:string
   
  }
  function handleClick() {
     
      // Destroy
      setCookie(null,'token','')
      setCookie(null,'_id','')
  }
  function handleClickId() {
     
    // Destroy
    setCookie(null,'_id','')
}
    //<div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
export function Nav({usuarioLogado}:INavProps){
     return(
        
        <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-100'> 
        
        <ul className='flex flex-wrap text-sm font-medium text-center text-gray-200 border-b border-gray-200 rounded-t-lg bg-gradient-to-r from-cyan-500 to-indigo-500 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-200 justify-end'>
        <li className=" flex flex-1 mr-2 ">
        
            <Link  
            type="button" 
            className="inline-block p-4  hover:text-blue-900 rounded-lg  hover:translate-x-1 dark:bg-gray-200 dark:hover:bg-gray-200  dark:hover:text-gray-200"    
            onClick={handleClickId}
            href={'/pages/homepage'}>
            <div  className="h-5 w-5">
                <MdHome />
            Logo<span className="italic">MSK</span></div> </Link>
        </li>
        
        <li className=" mr-2">       
            <Link 
            type="button" 
            className="inline-block p-4  hover:text-blue-900 rounded-lg  hover:translate-x-1 dark:bg-gray-200 dark:hover:bg-gray-200  dark:hover:text-gray-200"    
            href={'/pages/usuariotenant'} >
            <div  className="h-5 w-5"><MdSupervisorAccount /></div>{usuarioLogado}</Link>
        </li>
        <li className="mr-2">
            <Link  
            type="button" 
            className="inline-block p-4  hover:text-blue-900 rounded-lg  hover:translate-x-1 dark:bg-gray-200 dark:hover:bg-gray-200  dark:hover:text-gray-200"           
            href={'/pages/tarefa'}            
            >
            <div  className="h-5 w-5"><MdDashboard />
            </div>Tarefa
            </Link>
        </li>
        <li className="mr-2">
            <Link  
            type="button" 
            className="inline-block p-4  hover:text-blue-900 rounded-lg  hover:translate-x-1 dark:bg-gray-200 dark:hover:bg-gray-200  dark:hover:text-gray-200"    
            onClick={handleClick}
            href={'/'}
            >
            <div  className="h-5 w-5"><MdExitToApp /></div>Sair</Link>
        </li>

        </ul>
        </div>
    )
}