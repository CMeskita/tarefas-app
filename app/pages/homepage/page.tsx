'use client'
import { getTarefas } from "@/app/api/getTarefas";
import { FormaRedonda } from "@/app/components/FormaRedonda";
import { Nav } from "@/app/components/Nav";
import { usuarioLogado } from "@/app/pages/UsuarioLogado";
import { useEffect, useState } from "react";
import {PencilIcon} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { setCookie } from "nookies";
import Link from "next/link";
import { Tag } from "@/app/components/Tag";
import mypassword from "../../../public/notebookblue.svg"
import Image from 'next/image'
import { getUsuarioEmail} from "@/app/api/getUsuarioEmail";
import { getTarefasShared } from "@/app/api/getTarefasShared";
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
interface IUsuarios
{
  id:string
  email :string
  nome :string
  admin :boolean
  registro :string
  senhaHas :string
  tenant :string
}[]

export default function  


HomePage(){
  const data=new Date()
  const dataatual=data.toLocaleDateString('pt-br', {day:"numeric", weekday:"long", year:"numeric", month:"short"});
  const days = ["Dom","Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  //const semana = days[data.getDay()];  
  const obj=usuarioLogado();

 const [usuarios, setUsuario] = useState<IUsuarios[]>([]) 
 const getusuaraios = getUsuarioEmail(obj.email)
 
 getusuaraios.then(resposta=>setUsuario(resposta.data)).catch(error=>console.log(error)).finally(()=>{})

 const gettarefas = getTarefas(obj.tenant)  
 const gettarefasShared = getTarefasShared(obj.tenant)
 const [tarefas, setTarefas] = useState<Itarefas[]>([]) 
 const [tarefasshared, setTarefasshared] = useState<Itarefas[]>([]) 

  const color='#05235a';
  async function handlerEditarTarefa(id:string)
  {
    setCookie(undefined, '_id', id, {
      maxAge: 50*1000,
      path: '/',
    })
   // router.push('/pages/editartarefa')
  }
debugger;
getusuaraios.then(usuario=>usuario.data.map(user=> {if(user.admin===true){
}})


)
    useEffect(() => {   
    gettarefas.then(resposta=>setTarefas(resposta.data)).catch(error=>console.log(error)).finally(()=>{}) 
    gettarefasShared.then(resposta=>setTarefasshared(resposta.data)).catch(error=>console.log(error)).finally(()=>{})    
    },[gettarefas, gettarefasShared])


  return (
         
    <div className="p-4 sm:ml">    
              <Nav usuarioLogado={obj.nome} />   
              <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                  <Image src={mypassword} alt={""} width={100}></Image>
                  <label className="text-2xl text-gray-400 dark:text-gray-500">
                  <label>{dataatual}</label>
                  
                  </label>
              </div> 
      <div className="grid sm:grid-cols-2 xs:grid-cols-1 gap-2">
          {usuarios.map((usuarios) =>
          {
            if(usuarios.admin===true){
              return(<>
              {tarefas.map(tarefas=>(           
                                        
                                        <div className="pedido py-4" key={tarefas.id}>           
                                            <div className="border-2 border-gray-200  rounded-lg hover:translate-x-2 ">
                                                <Tag className={"bg-gradient-to-r from-cyan-500 to-indigo-500 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-200"}  /> 
                                                  
                                                
                                                      <div className="flex  justify-center h-15 rounded dark:bg-gray-800 gap-4 border-2">
                                                            <span className="text-center text-blue-900 font-semibold">
                                                            {tarefas.descricao} 
                                                            </span>
                
                                                            <Link href={"/pages/editartarefa"}>
                                                            <PencilIcon className="w-5 h-5 justify-end text-blue-900 " 
                                                            type="button" 
                                                            id={tarefas.id}                  
                                                            onClick={()=>{handlerEditarTarefa(tarefas.id)}}/>                          
                                                            </Link>
                
                                                      </div>
                
                                                <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center p-4">
                                                {
                                                    days.map((day) => {
                                                    switch (day!=null) {
                                                      case day.valueOf()==='Seg':{
                                                        return (
                                                      
                                                          <div key={'seg'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.seg===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Ter':{
                                                        return (
                                                      
                                                          <div key={'ter'} className="font-semibold ">
                                                                {day}
                                                              <FormaRedonda className={tarefas.ter===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Qua':{
                                                        return (
                                                      
                                                          <div key={'qua'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.qua===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Qui':{
                                                        return (
                                                      
                                                          <div key={'qui'}  className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.qui===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Sex':{
                                                        return (
                                                      
                                                          <div key={'sex'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.sex===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Sab':{
                                                        return (
                                                      
                                                          <div key={'sab'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.sab===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Dom':{
                                                        return (
                                                      
                                                          <div key={'dom'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.dom===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      default:
                                                        break;
                                                    }
                                                  
                                                })}
                                                </div>
                                            </div>
                                        
                                        </div>
                            ))}
              
              </>)
            }
              return(<>
              {tarefasshared.map(tarefas=>(           
                                        
                                        <div className="pedido py-4" key={tarefas.id}>           
                                            <div className="border-2 border-gray-200  rounded-lg hover:translate-x-2 ">
                                                <Tag className={"bg-gradient-to-r from-cyan-500 to-indigo-500 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-200"}  /> 
                                                  
                                                
                                                      <div className="flex  justify-center h-15 rounded dark:bg-gray-800 gap-4 border-2">
                                                            <span className="text-center text-blue-900 font-semibold">
                                                            {tarefas.descricao} 
                                                            </span>
                
                                                            <Link href={"/pages/editartarefa"}>
                                                            <PencilIcon className="w-5 h-5 justify-end text-blue-900 " 
                                                            type="button" 
                                                            id={tarefas.id}                  
                                                            onClick={()=>{handlerEditarTarefa(tarefas.id)}}/>                          
                                                            </Link>
                
                                                      </div>
                
                                                <div className="grid grid-cols-7 gap-6 sm:gap-12 place-items-center p-4">
                                                {
                                                    days.map((day) => {
                                                    switch (day!=null) {
                                                      case day.valueOf()==='Seg':{
                                                        return (
                                                      
                                                          <div key={'seg'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.seg===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Ter':{
                                                        return (
                                                      
                                                          <div key={'ter'} className="font-semibold ">
                                                                {day}
                                                              <FormaRedonda className={tarefas.ter===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Qua':{
                                                        return (
                                                      
                                                          <div key={'qua'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.qua===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Qui':{
                                                        return (
                                                      
                                                          <div key={'qui'}  className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.qui===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Sex':{
                                                        return (
                                                      
                                                          <div key={'sex'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.sex===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Sab':{
                                                        return (
                                                      
                                                          <div key={'sab'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.sab===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      case day.valueOf()==='Dom':{
                                                        return (
                                                      
                                                          <div key={'dom'} className="font-semibold">
                                                                {day}
                                                              <FormaRedonda className={tarefas.dom===true?`bg-[#05235a]`:'bg-[#807e7c]'} ></FormaRedonda>
                                                              
                                                          </div>
                                                          );
                                                      }
                                                      default:
                                                        break;
                                                    }
                                                  
                                                })}
                                                </div>
                                            </div>
                                        
                                        </div>
                            ))}
              </>)
            
          })}
            
       </div> 
    </div>   
  )
}
