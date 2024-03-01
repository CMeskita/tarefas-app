'use client'
import { getTarefas } from "@/app/api/getTarefas";
import FormAside from "@/app/components/Contents/FormAside";
import { FormaRedonda } from "@/app/components/FormaRedonda";
import { Nav } from "@/app/components/Nav";
import { usuarioLogado } from "@/app/pages/UsuarioLogado";
import { useEffect, useState } from "react";
import {

  PencilIcon 
  
} from '@heroicons/react/24/outline'
import Tarefa from "@/app/components/tarefa/Tarefa";

interface Itarefas{
  id: string
  descricao :string
  seg :boolean
  ter :boolean
  qua :boolean
  qui :boolean
  sex :boolean
  sab :boolean
  dom :boolean

}[]

export default function  HomePage()  {
  const data=new Date()
  const dataatual=data.toLocaleDateString('pt-br', {day:"numeric", weekday:"long", year:"numeric", month:"short"});
  const days = ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const semana = days[data.getDay()];

  
const obj=usuarioLogado();
const gettarefas = getTarefas(obj.tenant)
const [tarefas, setTarefas] = useState<Itarefas[]>([]) 


useEffect(() => {
  gettarefas.then(resposta=>setTarefas(resposta.data)).catch(error=>console.log(error)).finally(()=>{})
}, [gettarefas])


    return (
 
    <>
     
    <div className="p-4 sm:ml-64">
    <Nav usuarioLogado={obj.nome} />

        {tarefas.map(tarefas=>(<div className="pedido py-4" key={tarefas.id}>
    
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              
              <div className="grid grid-cols-1 gap-4 mb-4">
             
                   <div className="flex items-center justify-between h-24 rounded bg-gray-50 dark:bg-gray-800">
                   <label className="text-2xl text-gray-400 dark:text-gray-500">
                      {tarefas.descricao}

                      </label>
                      <PencilIcon className="w-5 h-5 justify-end text-blue-900" type="button" id={tarefas.id} onClick={()=>{alert('foi')}}/>
          
          
                   </div>
                 
                
                </div>

             <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center">
             {
                days.map((day) => {
                switch (day!=null) {
                  case day.valueOf()==='Seg':{
                    return (
                  
                      <div key={''} className="font-semibold">
                            {day}
                          <FormaRedonda className={tarefas.seg===true?'bg-[#19155c]':'bg-[#807e7c]'} ></FormaRedonda>
                           
                      </div>
                      );
                  }
                  case day.valueOf()==='Ter':{
                    return (
                  
                      <div key={''} className="font-semibold">
                            {day}
                          <FormaRedonda className={tarefas.ter===true?'bg-[#19155c]':'bg-[#807e7c]'} ></FormaRedonda>
                           
                      </div>
                      );
                  }
                  case day.valueOf()==='Qua':{
                    return (
                  
                      <div key={''} className="font-semibold">
                            {day}
                          <FormaRedonda className={tarefas.qua===true?'bg-[#19155c]':'bg-[#807e7c]'} ></FormaRedonda>
                           
                      </div>
                      );
                  }
                  case day.valueOf()==='Qui':{
                    return (
                  
                      <div key={''} className="font-semibold">
                            {day}
                          <FormaRedonda className={tarefas.qui===true?'bg-[#19155c]':'bg-[#807e7c]'} ></FormaRedonda>
                           
                      </div>
                      );
                  }
                  case day.valueOf()==='Sex':{
                    return (
                  
                      <div key={''} className="font-semibold">
                            {day}
                          <FormaRedonda className={tarefas.sex===true?'bg-[#19155c]':'bg-[#807e7c]'} ></FormaRedonda>
                           
                      </div>
                      );
                  }
                  case day.valueOf()==='Sab':{
                    return (
                  
                      <div key={''} className="font-semibold">
                            {day}
                          <FormaRedonda className={tarefas.sab===true?'bg-[#19155c]':'bg-[#807e7c]'} ></FormaRedonda>
                           
                      </div>
                      );
                  }
                  case day.valueOf()==='Dom':{
                    return (
                  
                      <div key={''} className="font-semibold">
                            {day}
                          <FormaRedonda className={tarefas.dom===true?'bg-[#19155c]':'bg-[#807e7c]'} ></FormaRedonda>
                           
                      </div>
                      );
                  }
                  default:
                    break;
                }
               
             })}
    </div>
 </div>

    </div>))}
  
       </div>    
   </>
    )
}