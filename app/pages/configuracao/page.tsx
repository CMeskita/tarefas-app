'use client'
import Card from "@/app/components/Card";
import FormAside from "@/app/components/Contents/FormAside";
import { FormaRedonda } from "@/app/components/FormaRedonda";
import { Nav } from "@/app/components/Nav";
import {PencilIcon} from '@heroicons/react/24/outline'
import { Tag } from "@/app/components/Tag";
import Link from "next/link";


interface IConfiguracaoProps {
    children:any
   
  }

export default function Configuracao({children, ...props}:IConfiguracaoProps){
const data=new Date()
const dataatual=data.toLocaleDateString('pt-br', {day:"numeric", weekday:"long", year:"numeric", month:"short"});
const days = ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const semana = days[data.getDay()];
const tarefas = ["Tarefa 01", "Tarefa 02", "Tarefa 03"];


    return (
       <>



<div className="p-4 sm:ml">

     <Nav usuarioLogado={"user"}/>
   
     <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
            <label className="text-2xl text-gray-400 dark:text-gray-500">
            <label>{dataatual}</label>
            
            </label>
         </div>
         {tarefas.map((tarefa)=>{
                  return(
                     <>
                     
    <div className="border-2 border-gary-200 hover:translate-x-2 rounded-lg dark:border-gray-700 m-2">
    <Tag className={"bg-gradient-to-r from-cyan-500 to-indigo-500 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-200"}  /> 
              <div className="grid grid-cols-1 gap-4 mb-4">
             
                   <div className="flex items-center justify-center h-10 rounded ">
                   <span className="grid *cols-2 text-2xl text-gray-400 justify-between">
                      {tarefa}
                      
                    </span>
                   </div>

          
                </div>

             <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center p-4">
             
             {
               
                days.map((day) => {
                return (
                <div key={''} className="font-semibold">
                  
                      {day}
                      <FormaRedonda variant="bg-[#807e7c]" className={""}/>
                </div>
                );
             })}
    </div>
 </div>
 </>
  )
 })}
    
</div>
<div className='flex items-center justify-center p-4 sm:ml-6 w-screen h-screen opacity-70'>

<Tag className={"bg-[#85470a]"}  /> 

</div>
</>
    
 )
    
}