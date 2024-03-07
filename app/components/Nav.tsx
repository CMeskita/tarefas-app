import Link from "next/link";
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import {
    XMarkIcon,
    UserCircleIcon,
    BookOpenIcon
    
  } from '@heroicons/react/24/outline'

interface INavProps {
   
    usuarioLogado:string
   
  }
  function handleClick() {
     
      // Destroy
  destroyCookie(null, 'token')
  }
    //<div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
export function Nav({usuarioLogado}:INavProps){
     return(
        
        <div className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 opacity-100'> 
        
        <ul className='flex flex-wrap text-sm font-medium text-center text-gray-200 border-b border-gray-200 rounded-t-lg bg-gradient-to-r from-cyan-500 to-indigo-500 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-200 justify-end'>
        <li className=" flex flex-1 mr-2 ">
        
            <Link  
            type="button" 
            className="inline-block p-4 hover:text-blue-900 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 " 
            href={'/pages/homepage'}>
            Logo<span className="italic">MSK</span> </Link>
        </li>
        
        <li className=" mr-2">       
            <Link 
            type="button" 
            className="inline-block p-4  hover:text-blue-900 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  dark:hover:text-gray-300" 
            href={'/pages/usuariotenant'} >
            <div  className="h-5 w-5"><UserCircleIcon /></div>{usuarioLogado}</Link>
        </li>
        <li className="mr-2">
            <Link  
            type="button" 
            className="inline-block p-4  hover:text-blue-900 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  dark:hover:text-gray-300"           
            href={'/pages/tarefa'}            
            >
            <div  className="h-5 w-5"><BookOpenIcon />
            </div>Tarefa
            </Link>
        </li>
        <li className="mr-2">
            <Link  
            type="button" 
            className="inline-block p-4  hover:text-blue-900 rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  dark:hover:text-gray-300" 
            onClick={handleClick}
            href={'/'}
            >
            <div  className="h-5 w-5"><XMarkIcon /></div>Sair</Link>
        </li>

        </ul>
        </div>
    )
}