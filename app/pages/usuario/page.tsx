'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { postUsuario } from "@/app/api/postUsuario";
import { HttpError } from "@/app/http";
import Contents from "@/app/components/Contents/Contents";
import { Input, InputType } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import Link from "next/link";
//validando campos
const UsuarioSchema=z.object({
    nome:z.string().min(3,'Informe o nome'),
    email:z.string().min(6,'Hrxadecimal precisa de no minímo 6 caracteres'),
    senhaHas:z.string().min(3,'Informe o nome'),
    confirmsenhaHas:z.string().min(3,'Informe o nome'),
    

     })
     //tipando o objeto de validação
type UsuarioFormData=z.infer<typeof UsuarioSchema>

export default function Usuario(){

//criando constantes de validação

const usuarioUpForm = useForm<UsuarioFormData>({
    resolver: zodResolver(UsuarioSchema),
  })

const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = usuarioUpForm

async function CadastrarUsuario(data:UsuarioFormData )
{   debugger;
  

  try {
    console.log(data)
    await postUsuario({
    
        nome:data.nome,
        email:data.email,
        senhaHas:data.senhaHas,
        confirmsenhaHas:data.confirmsenhaHas,
        admin:true
                      
    })
    reset()
    alert("Cadastrado com sucesso!!")
  } 
  catch (error) {
    if (error instanceof HttpError) {
    alert(error.message)
    } else {
      alert({
        message:
          'Não foi possível realizar o seu cadastro. Aguarde um pouco e tente novamente.',
        type: 'error',
      })
    }
  }
}

    return (
    <>
    
     <Contents>

<div className='flex items-center justify-center p-2 sm:ml-6 w-screen h-screen opacity-70'>
    
    
<div className='shadow shadow-blue-900 flex items-center justify-center  mb-2 rounded bg-blue-50 dark:bg-gray-800'>

    
         
<form onSubmit={handleSubmit(CadastrarUsuario)}  className="w-full max-w-lg p-5">

<div className='flex flex-wrap -mx-3 mb-6 py-2 justify-center border-b-4 border-blue-900 '>
       
       <span className="text-center text-blue-900 text-2xl ">
                       Cadastrar Usuário 
                       </span>
     </div>
        <div className="flex flex-wrap -mx-3 mb-6 py-2">
            <div className="w-full px-3">
         
                <Input.Field
                id="nome"
                type={InputType.text}
                placeholder="Nome"
                {...register('nome')}
                />
                   {errors.nome && <span>{errors.nome.message}</span>}

            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
             
                <Input.Field
                id="email"
                type={InputType.text}
                placeholder="Email"
                {...register('email')}
                />
                 {errors.email && <span>{errors.email.message}</span>}
            
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
             
                <Input.Field
                id="senhaHas"
                type={InputType.password}
                placeholder="Senha"
                {...register('senhaHas')}
                />
                 {errors.senhaHas && <span>{errors.senhaHas.message}</span>}
            
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
               
                <Input.Field
                id="confirmsenhaHas"
                type={InputType.password}
                placeholder="Confirmar Senha"
                {...register('confirmsenhaHas')}
                />
                 {errors.confirmsenhaHas && <span>{errors.confirmsenhaHas.message}</span>}
            
            </div>
        </div>
        <div className="flex items-center justify-start">         
            <Button>Enviar</Button>        
        </div>      
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 py-4">
                                    Deseja Fazer Login?
                 <Link className="text-blue-900 hover:underline dark:text-blue-900" 
                  href={'/pages/login'}
                 >
                Logar</Link>
                        </div>
</form>
    </div>
    </div> 
    </Contents>
    </>
    )
}