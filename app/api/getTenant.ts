import {
    
  InternalServerError,
  NotFoundError,
  TooManyRequestsError,
  } from '../http'
  
  interface ItenantProps{
    
      id: string
      descricao :string
      tenant :Number
  }
  interface SessionResponse{
    data: ItenantProps
       statusCode: number
       message: string
   }
   export async function getTenant(descricao:string) {

     // const url = new URL(`http://localhost:3000/tenants/tenant?descricao=${descricao}`)
      const url = `${process.env.NEXT_PUBLIC_API_KEY}/tenants/tenant?descricao=${descricao}`;
     
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
      //debugger
      //const data = (await response.json()) as ItenantProps
      const dados = (await response.json()) as SessionResponse


console.log(dados)

      
//debugger
     /*/ const tenantCompleto = {
        id: data.id,
        descricao: data.descricao,
        tenant: data.tenant,
       
      }/*/
   
      return {
        data:dados
      }
      
   
   }