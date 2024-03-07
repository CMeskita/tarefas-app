'use client'
import FormAside from "@/app/components/Contents/FormAside";
import { FormaRedonda } from "@/app/components/FormaRedonda";
import { NavDefault } from "@/app/components/NavDefault";


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

 <FormAside tenant={0} />

<div className="p-4 sm:ml-64">

     <NavDefault/>
   
     <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
            <label className="text-2xl text-gray-400 dark:text-gray-500">
            <label>{dataatual}</label>
            
            </label>
         </div>
         {tarefas.map((tarefa)=>{
                  return(
                     <>
                       <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              
              <div className="grid grid-cols-1 gap-4 mb-4">
             
                   <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                   <label className="text-2xl text-gray-400 dark:text-gray-500">
                      {tarefa}
                      </label>
                   </div>

          
                </div>

             <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
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
</>
    
 )
    
}