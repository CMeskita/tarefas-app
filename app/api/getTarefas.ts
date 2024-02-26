import {
    
  InternalServerError,
  NotFoundError,
  TooManyRequestsError,
  } from '../http'
  
  interface ItarefasProps{
    
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
   export async function getTarefas(tenant: string) {

     // const url = new URL(`http://localhost:3000/tarefas/tenant?tenant=${tenant}`)
      const url = `${process.env.NEXT_PUBLIC_API_KEY}/tarefas/tenant?tenant=${tenant}`;
     
console.log(url)
    
      const response = await fetch(url)

      if (!response.ok) {
        if (response.status === 404) {
          throw new NotFoundError('Tarefa não encontrado.')
        }
    
        if (response.status === 429) {
          throw new TooManyRequestsError(
            'No momento não foi possível carregar o catálogo. Aguarde um pouco e tente novamente.',
          )
        }
    
        throw new InternalServerError('Não foi possível listar as tarefas.')
      }
      const data = (await response.json()) as ItarefasProps[]

      const tarefas = data.map((tarefa) => ({
        id: tarefa.id,
        descricao: tarefa.descricao,
        seg: tarefa.seg,
        ter: tarefa.ter,
        qua: tarefa.qua,
        qui: tarefa.qui,
        sex: tarefa.sex,
        sab: tarefa.sab,
        dom: tarefa.dom,
      }))
   
      return {
      
        data: tarefas,
      }
   
   }