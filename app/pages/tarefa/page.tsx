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
import { number, z } from "zod";

interface Itenant{
   id: string,
   descricao: string,
   tenant: Number,
}

 const tarefaSchema=z.object({
   
   descricao:z.string().min(3,'descrição precisa de no minímo 3 caracteres'),
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
 const [isChecked, setIsChecked] = useState(false);

   function handleOnChange() {
      setIsChecked(!isChecked);
      return isChecked
   }
async function enviarTarefas(data:TarefaFormData )
{   
try {
 debugger;
 console.log(data)
 await postTarefa({
 
     descricao:data.descricao,
     seg:data.seg, 
     ter:data.seg, 
     qua:data.seg, 
     qui:data.seg, 
     sex:data.seg, 
     sab:data.seg, 
     dom:data.seg, 
     tenant:data.tenant       
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
 
   <div className='flex items-center justify-center p-4 sm:ml-6 w-screen h-screen opacity-70'>
  
  
    <div className='shadow shadow-blue-700 flex items-center justify-center max-w-96  mb-4 rounded bg-blue-50 dark:bg-gray-800'>
     
     
    
      <form onSubmit={handleSubmit(enviarTarefas)} className='w-full max-w-lg p-5'>
      
              <div className='flex flex-wrap -mx-3 mb-6 py-2'>
                  <div className='w-full px-3'>
                 
                      <h3>Tarefa</h3>
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
              <div className="grid grid-cols-2 gap-4 mb-4">           
              <div className="flex items-center ps-3">
               <Input.Field
               className="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 "
                  id="seg"
                  type={InputType.checkbox}                     
                  {...register('seg')}
                  onChange={handleOnChange}
                  checked={isChecked}
                  />
                  {errors.seg && <span>{errors.seg.message}</span>}                                 
                  
               <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">segunda</label>
               </div>

               <div className="flex items-center ps-3">
               <Input.Field
               className="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 "
                  id="ter"
                  type={InputType.checkbox}
                  {...register('ter')}
                  onChange={handleOnChange}
                  checked={isChecked}
                  />
                  {errors.ter && <span>{errors.ter.message}</span>}                                 
                  
               <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">terça</label>
               </div>

               <div className="flex items-center ps-3">
               <Input.Field
               className="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 "
                  id="qua"
                  type={InputType.checkbox}
                  {...register('qua')}
                  onChange={handleOnChange}
                  checked={isChecked}
                  />
                  {errors.qua && <span>{errors.qua.message}</span>}                                 
                  
               <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">quarta</label>
               </div>

               <div className="flex items-center ps-3">
               <Input.Field
               className="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 "
                  id="qui"
                  type={InputType.checkbox}   
                  {...register('qui')}
                  onChange={handleOnChange}
                  checked={isChecked}
                  />
                  {errors.qua && <span>{errors.qua.message}</span>}                                 
                  
               <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">quinta</label>
               </div>

               <div className="flex items-center ps-3">
               <Input.Field
               className="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 "
                  id="sex"
                  type={InputType.checkbox}
                  {...register('sex')}
                  onChange={handleOnChange}
                  checked={isChecked}
                  />
                  {errors.sex && <span>{errors.sex.message}</span>}                                 
                  
               <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">sexta</label>
               </div>
               <div className="flex items-center ps-3">
               <Input.Field
               className="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 "
                  id="sab"
                  type={InputType.checkbox}
                  {...register('sab')}
                  onChange={handleOnChange}
                  checked={isChecked}
                  />
                  {errors.sab && <span>{errors.sab.message}</span>}                                 
                  
               <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">sabado</label>
               </div>

               <div className="flex items-center ps-3">
               <Input.Field
               className="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 "
                  id="dom"
                  type={InputType.checkbox}
                  {...register('dom')}               
                  onChange={handleOnChange}
                  checked={isChecked}
                  />
                  {errors.dom && <span>{errors.dom.message}</span>}                                 
                  
               <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">domingo</label>
               </div>
      
               
               </div>  
               <div className='flex-wrap -mx-3 hidden'>
                  <div className='w-full'>
                 
                      <h3>Tenant</h3>
                      <Input.Field                    
                      id='tenant'
                      value={obj.tenant}
                      type={InputType.number}                     
                      {...register('tenant')}
                      />
                      {errors.tenant && <span>{errors.tenant.message}</span>}
                  
                  
                  </div>
              </div>      
              <div className='flex items-center justify-center py-4'>
                  <Button>Acessar</Button>              
              </div>        
            
      </form>
    
   
    </div>
    </div>     
 
    </>
 
  )
}