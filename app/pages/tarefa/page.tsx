'use client'
import { getTarefas } from "@/app/api/getTarefas";
import Card from "@/app/components/Card";
import Contents from "@/app/components/Contents/Contents";
import { Input, InputType } from "@/app/components/Input";
import { Nav } from "@/app/components/Nav";
import { usuarioLogado } from "@/app/pages/UsuarioLogado";
import { useEffect, useState } from "react";

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

export default function  Tarefa()  {
 
  
const obj=usuarioLogado();   
  const gettarefas=  getTarefas(obj.tenant)
const [tarefas, setTarefas] = useState<Itarefas[]>([]) 
//const [tarefasFeitas, setTarefasFeitas] = useState(true) 



useEffect(() => {
  gettarefas.then(resposta=>setTarefas(resposta.data)).catch(error=>console.log(error)).finally(()=>{})
}, [gettarefas])


    return (
 
    <>
       <Nav usuarioLogado={obj.nome} />
     
       <div className='flex items-center justify-between py-4 m-5'>
      
       <Contents>
       {tarefas.map(tarefas=>(<div className="pedido py-4" key={tarefas.id}>
      
       <Card>
      
<h3 className="mb-4 font-semibold text-gray-900 dark:text-white">{tarefas.descricao}</h3>
<ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
        <Input.Field
                        id="seg"
                        type={InputType.checkbox}
                        placeholder=""
                        
                        />
            <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{tarefas.seg}</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
        <Input.Field
                        id="seg"
                        type={InputType.checkbox}
                        placeholder=""
                        
                        />
            <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
        <Input.Field
                        id="seg"
                        type={InputType.checkbox}
                        placeholder=""
                        
                        />
            <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
        </div>
    </li>
    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div className="flex items-center ps-3">
        <Input.Field
                        id="seg"
                        type={InputType.checkbox}
                        placeholder=""
                        
                        />
            <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
        </div>
    </li>
</ul>

      </Card>
      

        </div>))}
        
       </Contents>
       </div>
       
   </>
    
    )
}