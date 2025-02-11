
import {
    HttpError,
    InternalServerError,
    TooManyRequestsError,
    UnauthorizedError,
  } from '../http'
  
  interface IinserTarefasProps{
      id:string
      descricao:String
      seg:Boolean
      ter:Boolean
      qua:Boolean
      qui:Boolean
      sex:Boolean
      sab:Boolean
      dom:Boolean
      active:Boolean
      shared:Boolean
    
  
   }
   interface SessionResponse{
       statusCode: number
       message: string
   }
  
export async function putTarefa(data: IinserTarefasProps) {

      const url = `${process.env.NEXT_PUBLIC_API_KEY}/tarefas/${data.id}`;
  
      const headers = new Headers({
        'Content-type': 'application/json',
      })
    
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers,
      })
      const { message } = (await response.json()) as SessionResponse
    try {
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new UnauthorizedError(
            'Não foi possível realizar o login. CPF/CNPJ ou senha incorretos.',
          )
        }
  
        if (response.status === 429) {
          throw new TooManyRequestsError(
            'No momento não foi possível realizar o login. Aguarde um pouco e tente novamente.',
          )
        }
    
        throw new InternalServerError(
          'Não foi possível realizar o login. ' + (message || 'vamos ver'),
        )
      }
    } catch (err) {
      if (err instanceof HttpError) {
        alert({ message: err.message, type: 'error' })
     
      } else {
        alert({
          message: 'Não foi possível realizar o login.',
          type: 'error',
        })
        
      }
    }
   }
