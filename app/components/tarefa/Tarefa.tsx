'use client'

import { postTarefa } from "@/app/api/postTarefa";
import { Button } from "@/app/components/Button";
import { Input, InputType } from "@/app/components/Input";
import { HttpError } from "@/app/http";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
   tenant:z.number()
   
    })
    type TarefaFormData=z.infer<typeof tarefaSchema>


export default function  Tarefa({tenant}:Itenant)  {
 

 
const tarefaUpForm = useForm<TarefaFormData>({
   resolver: zodResolver(tarefaSchema),
 })
const {
   handleSubmit,
   formState: { errors },
   reset,
   register,
 } = tarefaUpForm

 const diasSemanas = ["Domingo","Segunda - Feira", "Terça - Feira", "Quarta - Feira", "Quinta - Feira", "Sexta - Feira", "Sábado"];


 const [isChecked, setIsChecked] = useState(false);

const handleOnChange = () => {
 setIsChecked(!isChecked);
};
async function enviarTarefas(data:TarefaFormData )
{   
try {
 debugger;
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
return(<>
    
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    <div className='shadow shadow-blue-700 flex items-center justify-center  mb-4 rounded  dark:bg-gray-800'>

         <form onSubmit={handleSubmit(enviarTarefas)} className="w-full max-w-lg p-5">

            <div className="flex flex-wrap -mx-3 mb-6 py-4">
               <div className="w-full px-3">
                  <h3 className="mb-4 font-semibold text-black dark:text-white">Tarefa</h3>
                     <Input.Field
                     id="descricao"
                     type={InputType.text}
                     placeholder=""  
                     checked={isChecked}
                      
                     {...register('descricao')}
                     onChange={handleOnChange}
                     />
                        
                 {errors.descricao && <span>{errors.descricao.message}</span>}
               </div>
            </div>

      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Dias da Semana</h3>
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
      {
             diasSemanas.map((semana) => {
             return (
           <>
           
            <div className="flex items-center ps-3">

                  <Input.Field
                  className="w-4 h-4 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-offset-blue-700 focus:ring-2 "
                     id="seg"
                     type={InputType.checkbox}
                     placeholder=""  
                                                           
                     />
                  <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{semana}</label>
            </div>
         
           </>
             );
          })}
          </li>

      </ul>

         <div hidden>
         <Input.Field
         className="visibility: hidden;"
         id="nome"
         type={InputType.text}
                     placeholder= "" 
                     value= {`${tenant}`}
        
                     />
         </div>
            
         <div className='flex items-center justify-center py-4'>
            
            <Button>Acessar</Button>
        
        </div>  
             
      </form>
   </div>
</div>

    </>)
}