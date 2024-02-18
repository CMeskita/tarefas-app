import { Button } from "@/app/components/Button";
import { Input, InputType } from "@/app/components/Input";
import { NavDefault } from "@/app/components/NavDefault";

export default function FromTarefa(){
    const diasSemanas = ["Domingo","Segunda - Feira", "Terça - Feira", "Quarta - Feira", "Quinta - Feira", "Sexta - Feira", "Sábado"];
    return(<>
        
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div className='shadow shadow-blue-700 flex items-center justify-center  mb-4 rounded  dark:bg-gray-800'>
   
             <form  className="w-full max-w-lg p-5">
 
 
                <div className="flex flex-wrap -mx-3 mb-6 py-4">
                   <div className="w-full px-3">
                      <h3 className="mb-4 font-semibold text-black dark:text-white">Tarefa</h3>
                         <Input.Field
                         id="nome"
                         type={InputType.text}
                         placeholder=""   
            
                         />
                            
 
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
 
             
                
          <Button>Enviar</Button>  
                 
          </form>
       </div>
    </div>

        </>)
}