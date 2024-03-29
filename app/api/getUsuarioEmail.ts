
import {
    NotFoundError,
    } from '../http'
  
    
    interface IUsuariosProps{
        id:string
        email :string
        admin :boolean
        nome :string
        registro :string
        senhaHas :string
        tenant :string
        
    }[]
       
     export async function getUsuarioEmail(imail: string) {
      debugger;
      
        const url = `${process.env.NEXT_PUBLIC_API_KEY}/usuarios/busca?email=${imail}`;
        debugger;
        console.log(url)
      
        const response = await fetch(url)
  //debugger;
        if (response===null) {
         
            throw new NotFoundError('Tarefa não encontrado.')
        
        }
        const data = await response.json() as IUsuariosProps[]

        const usuarios = data.map((usuarios) => ({
          id: usuarios.id,
          email:usuarios.email,
          nome:usuarios.nome ,  
          admin:usuarios.admin,
          registro:usuarios.registro,
          senhaHas:usuarios.senhaHas,
          tenant:usuarios.tenant  
        }))
     
        return {
        
          data: usuarios,
        }

     }