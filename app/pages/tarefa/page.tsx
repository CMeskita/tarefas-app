'use client'

import { postTarefa } from "@/app/api/postTarefa";
import { Button } from "@/app/components/Button";
import { Input, InputType } from "@/app/components/Input";
import { Nav } from "@/app/components/Nav";
import { HttpError } from "@/app/http";
import { usuarioLogado } from "@/app/pages/UsuarioLogado";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import mypassword from "../../../public/notebookblue.svg"
import Image from 'next/image'

 const tarefaSchema=z.object({
   
   descricao:z.string().min(3,'descrição precisa de no minímo 3 caracteres').toUpperCase(),
   seg:z.boolean(),
   ter:z.boolean(),
   qua:z.boolean(),
   qui:z.boolean(),
   sex:z.boolean(),
   sab:z.boolean(),
   dom:z.boolean(),
   tenant:z.string()
   
    })
type TarefaFormData=z.infer<typeof tarefaSchema>


export default function Tarefa()  {
const obj=usuarioLogado();
const tarefaUpForm = useForm<TarefaFormData>({
   resolver: zodResolver(tarefaSchema),
 })
const {
   handleSubmit,
   formState: { errors },
   reset,
   register,
   
 } = tarefaUpForm
 const [isChecked, setIsChecked] = useState(new Array(postTarefa.length).fill(false,1,7));

   const handleOnChange = (position:number) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);
  }
async function enviarTarefas(data:TarefaFormData )
{   
try {
 debugger;
 console.log(data)
 await postTarefa({
 
     descricao:data.descricao,
     seg:data.seg, 
     ter:data.ter, 
     qua:data.qua, 
     qui:data.qui, 
     sex:data.sex, 
     sab:data.sab, 
     dom:data.dom, 
     tenant:obj.tenant,
  

 })
console.log(data)
   reset()
  alert('Cadastrado com sucesso')

}
catch (err) {
   if (err instanceof HttpError) {
      alert({ message: err.message, type: 'error' })
   } else {
      alert({
      message: 'Não foi possível realizar o cadastro.',
      type: 'error',
      })  
   }
   }

}
   return (
   <>
   <Nav usuarioLogado={obj.nome} />
 
   <div className='flex items-center justify-center p-4 sm:ml-0 w-screen h-screen'>
  
      <div className="grid sm:grid-cols-2 xs:grid-cols-1">
         <span>
         <Image src={mypassword} alt={""} width={200} height={100}></Image>
         <p className="text-2xl text-blue-900  font-bold ">Defina suas Tarefas!!</p>
         </span>
 
         <form onSubmit={handleSubmit(enviarTarefas)} className='w-full max-w-lg p-5'>

            <div className='flex flex-wrap -mx-3 mb-6 py-2 justify-center border-b-4 border-blue-900 '>
         
                  <span className="text-center text-blue-900 text-2xl font-bold ">
                     Tarefas
                  </span>
            </div>
               <div className='flex flex-wrap -mx-3 mb-2 py-1 justify-center'>
                     <div className='w-full px-3'>
                        <Input.Field
                        id="descricao"
                        type={InputType.text}
                        placeholder=""
                        {...register('descricao')}
                        />
                        {errors.descricao && <span>{errors.descricao.message}</span>}
                        <p className="text-gray-600 text-xs italic">Exemplo: Caminhadas</p>
                     </div>
               </div>      
               <div className="grid grid-cols-2 gap-2 mb-2">           
               <div className="flex items-center ps-2">
                  <Input.Field
                  key={1}
                  className="w-4 h-4"
                     id="seg"
                     type={InputType.checkbox}                     
                     {...register('seg')}
                     checked={isChecked[1]}
                     onChange={() => handleOnChange(1)}
                     />
                     {errors.seg && <span>{errors.seg.message}</span>}                                 
                     
                  <label htmlFor="vue-checkbox" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">segunda</label>
               </div>
               <div className="flex items-center ps-3">
                  <Input.Field
                     key={2}
                     className="w-4 h-4 "
                     id="ter"
                     type={InputType.checkbox}
                     {...register('ter')}
                     checked={isChecked[2]}
                     onChange={() => handleOnChange(2)}
                     />
                     {errors.ter && <span>{errors.ter.message}</span>}                                 
                     
                  <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">terça</label>
               </div>
               <div className="flex items-center ps-2">
                  <Input.Field
                  key={3}
                  className="w-4 h-4"
                     id="qua"
                     type={InputType.checkbox}
                     {...register('qua')}
                     checked={isChecked[3]}
                     onChange={() => handleOnChange(3)}
                     />
                     {errors.qua && <span>{errors.qua.message}</span>}                                 
                     
                  <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">quarta</label>
               </div>
               <div className="flex items-center ps-3">
                  <Input.Field
                  key={4}
                  className="w-4 h-4"
                     id="qui"
                     type={InputType.checkbox}   
                     {...register('qui')}
                     checked={isChecked[4]}
                     onChange={() => handleOnChange(4)}
                     />
                     {errors.qua && <span>{errors.qua.message}</span>}                                 
                     
                  <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">quinta</label>
               </div>
               <div className="flex items-center ps-2">
                  <Input.Field
                  key={5}
                  className="w-4 h-4"
                     id="sex"
                     type={InputType.checkbox}
                     {...register('sex')}
                     checked={isChecked[5]}
                     onChange={() => handleOnChange(5)}
                     />
                     {errors.sex && <span>{errors.sex.message}</span>}                                 
                     
                  <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">sexta</label>
               </div>
               <div className="flex items-center ps-3">
                  <Input.Field
                  key={6}
                  className="w-4 h-4"
                     id="sab"
                     type={InputType.checkbox}
                     {...register('sab')}
                     checked={isChecked[6]}
                     onChange={() => handleOnChange(6)}
                     />
                     {errors.sab && <span>{errors.sab.message}</span>}                                 
                     
                  <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">sábado</label>
               </div>
               <div className="flex items-center ps-2">
                  <Input.Field
                  key={0}
                  className="w-4 h-4"
                     id="dom"
                     type={InputType.checkbox}
                     {...register('dom')}               
                     checked={isChecked[0]}
                     onChange={() => handleOnChange(0)}
                     />
                     {errors.dom && <span>{errors.dom.message}</span>}                                 
                     
                  <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">domingo</label>
               </div>

               </div>                       
               <div className='flex items-center justify-center py-4'>
                     <Button>Cadastrar</Button>              
               </div>        
            
         </form>
    </div>
    </div>     
 
    </>
 
  )
}