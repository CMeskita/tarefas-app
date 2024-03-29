"use client"
import { getTarefasId } from "@/app/api/getTarefasId";
import { Button } from "@/app/components/Button";
import { Input, InputType } from "@/app/components/Input";
import { Nav } from "@/app/components/Nav";
import { detalhesTarefa } from "@/app/pages/detalhesTarefa";
import { setCookie } from "nookies";
import { SetStateAction, useEffect, useState } from "react";
import mypassword from "../../../public/notebookblue.svg"
import Image from 'next/image'
import { postTarefa } from "@/app/api/postTarefa";

interface ITarefas {
      id:string
      descricao :string
      seg :boolean
      ter :boolean
      qua :boolean
      qui :boolean
      sex :boolean
      sab :boolean
      dom :boolean
      tenant:string
}
function handleClick() {
     
  // Destroy
  setCookie(null, '_id','')
}
 
export default function EditarTarefa() {
 
    const [tarefas, setTarefas] = useState<ITarefas>() 
    const id=detalhesTarefa()
    debugger;
    const gettarefas = getTarefasId(id)

    gettarefas.then(function(resposta) {return resposta})
    .then(resposta=>setTarefas(resposta))

    const [isChecked, setIsChecked] = useState(new Array(postTarefa.length).fill(false,1,7));

    const handleOnChange = (position:number) => {
     const updatedCheckedState = isChecked.map((item, index) =>
       index === position ? !item : item
     );
     setIsChecked(updatedCheckedState);
   }
    
    return (
      <>
      <Nav usuarioLogado={'nome'} />
       
      <div className='flex items-center justify-center p-4 sm:ml-0 w-screen h-screen'>                
         <div className="grid sm:grid-cols-2 xs:grid-cols-1">
            <span>
            <Image src={mypassword} alt={""} width={200} height={100}></Image>
            <p className="text-2xl text-blue-900  font-bold ">Melhore suas Tarefas!!</p>
            </span>
            <form className='w-full max-w-lg p-4'>
                  <div className='flex flex-wrap -mx-3 mb-6 py-2 justify-center border-b-4 border-blue-900 '>
                     <span className="text-center text-blue-900 text-2xl font-bold  ">
                        Alterar Tarefa!
                     </span>
                  </div>
                  
                  <div className='flex flex-wrap justify-center '>
                     <span className="text-center text-gray-700">
                        {`${tarefas?.descricao}`}
                     </span>
                  </div>

                  <div className='flex flex-wrap -mx-3 mb-4 py-2'>
                     <div className='w-full px-3'>
                        <Input.Field
                         id="descricao"
                         type={InputType.text}
                         placeholder="" 
                         value={`${tarefas?.descricao}`}                    
                         />
                         <p className="text-gray-600 text-xs italic">Exemplo: Caminhadas</p>
                     </div>
                  </div>      
                    
                  <div className="grid grid-cols-2 gap-4 mb-4"> 
                    <div className="flex items-center ps-3">
                     <Input.Field
                        key={1}
                        className="w-4 h-4"
                        id="seg"
                        type={InputType.checkbox}
                        checked={isChecked[1]}
                        onChange={() => handleOnChange(1)}
                        
                        />
                                                                           
                     <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Segunda</label>
                    </div>                             
                    <div className="flex items-center ps-3">
                     <Input.Field
                        key={2}
                        className="w-4 h-4"
                        id="ter"
                        type={InputType.checkbox}
                        checked={tarefas?.ter}
                        onChange={() => handleOnChange(1)}
                        />
                                                                           
                     <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">terça</label>
                    </div>
                    <div className="flex items-center ps-2">
                     <Input.Field
                        key={3}
                        className="w-4 h-4"
                        id="ter"
                        type={InputType.checkbox}
                        checked={tarefas?.qua}
                        />
                                                                           
                     <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quarta</label>
                    </div>
                    <div className="flex items-center ps-3">
                     <Input.Field
                        key={4}
                        className="w-4 h-4"
                        id="ter"
                        type={InputType.checkbox}
                        checked={tarefas?.qui}
                        />
                                                                           
                     <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quinta</label>
                    </div>
                    <div className="flex items-center ps-2">
                     <Input.Field
                        key={5}
                        className="w-4 h-4"
                        id="ter"
                        type={InputType.checkbox}
                        checked={tarefas?.sex}
                        />
                                                                           
                     <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">sexta</label>
                    </div>
                    <div className="flex items-center ps-3">
                     <Input.Field
                        key={6}
                        className="w-4 h-4 "
                        id="ter"
                        type={InputType.checkbox}
                        checked={tarefas?.sab}
                        />
                                                                           
                     <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">sábado</label>
                    </div>
                    <div className="flex items-center ps-2">
                     <Input.Field
                        key={0}
                        className="w-4 h-4"
                        id="ter"
                        type={InputType.checkbox}
                        checked={tarefas?.dom}
                        />
                                                                           
                     <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">domingo</label>
                    </div>
                  </div>  
                     
                  <div className='flex items-center justify-center py-4'>
                        <Button onClick={handleClick}>Atualizar</Button>   
                     <div className="flex items-center ps-3">
                     <Input.Field
                        key={''}
                        className="w-4 h-4"
                        id="active"
                        type={InputType.checkbox}
                        checked={true}
                        />
                                                                           
                     <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ativo</label>
                     </div>           
                     <div className="flex items-center ps-3">
                     <Input.Field
                        key={''}
                        className="w-4 h-4"
                        id="shared"
                        type={InputType.checkbox}
                        checked={false}
                        />
                                                                           
                     <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Compartilhada</label>
                     </div>  
                  </div>        
                  
            </form>
          
         
          </div>
          </div>     
       
          </>
       
        )
}
