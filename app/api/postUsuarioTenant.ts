import {
    BadRequestError,
    HttpError,
    InternalServerError,
    TooManyRequestsError,
    UnauthorizedError,
  } from '../http'
  
  interface IinsertUsuarioProps{
      nome:string
      email :string
      senhaHas :string
      confirmsenhaHas:string
      tenant:string
  
   }
   interface SessionResponse{
       statusCode: number
       message: string
   }
  
   export async function postUsuarioTenant(data: IinsertUsuarioProps) {
  try {
    
  } catch (error) {
    
  }
      debugger;
     // const url = new URL(`http://localhost:3000/usuarios`)
      const url = `${process.env.NEXT_PUBLIC_API_KEY}/usuarios`;
      const headers = new Headers({
        'Content-type': 'application/json',
      })
    
      const response = await fetch(url, {
        method: 'POST',
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
      
    
      return message
   }