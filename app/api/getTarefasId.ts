
import {
    
  InternalServerError,
  NotFoundError,
  TooManyRequestsError,
  } from '../http'

  
  interface ItarefasProps{
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
 
  
   export async function getTarefasId(id: string) {
    debugger;
    
      const url = `${process.env.NEXT_PUBLIC_API_KEY}/tarefas/${id}`;
      debugger;
      console.log(url)
    
      const response = await fetch(url)
debugger;
      if (response===null) {
       
          throw new NotFoundError('Tarefa não encontrado.')
      
      }
      const data = await response.json() //as ItarefasProps

      const tarefas = {
        id: data.id,
        descricao: data.descricao,
        seg: data.seg,
        ter: data.ter,
        qua: data.qua,
        qui: data.qui,
        sex: data.sex,
        sab: data.sab,
        dom: data.dom,
        tenant:data.tenant
      }
   
      return tarefas
  
   
   
   }