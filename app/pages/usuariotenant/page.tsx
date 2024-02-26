'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { HttpError } from "@/app/http";
import Contents from "@/app/components/Contents/Contents";
import { Input, InputType } from "@/app/components/Input";
import { Button } from "@/app/components/Button";
import Link from "next/link";
import { Nav } from "@/app/components/Nav";
import { usuarioLogado } from "@/app/pages/UsuarioLogado";
import { postUsuarioTenant } from "@/app/api/postUsuarioTenant";
//validando campos
const UsuarioSchema=z.object({
    nome:z.string().min(3,'Informe o nome'),
    email:z.string().min(6,'Hrxadecimal precisa de no minímo 6 caracteres'),
    senhaHas:z.string().min(3,'Informe o nome'),
    confirmsenhaHas:z.string().min(3,'Informe o nome'),
    tenant:z.string()

     })
     //tipando o objeto de validação
type UsuarioFormData=z.infer<typeof UsuarioSchema>

export default function UsuarioTenant(){
  const obj=usuarioLogado();
//criando constantes de validação

const colorUpForm = useForm<UsuarioFormData>({
    resolver: zodResolver(UsuarioSchema),
  })

const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = colorUpForm

async function CadastrarUsuario(data:UsuarioFormData )
{   debugger;
  

  try {
    console.log(data)
    await postUsuarioTenant({
    
        nome:data.nome,
        email:data.email,
        senhaHas:data.senhaHas,
        confirmsenhaHas:data.confirmsenhaHas,
        tenant:data.tenant
                      
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
     <Nav usuarioLogado={obj.nome} />
<div className='flex items-center justify-center p-4 sm:ml-6 w-screen h-screen opacity-70'>
    
    
<div className='shadow shadow-blue-700 flex items-center justify-center  mb-4 rounded bg-blue-50 dark:bg-gray-800'>

    
         
<form onSubmit={handleSubmit(CadastrarUsuario)}  className="w-full max-w-lg p-5">

<div className='flex items-center justify-center w-full rounded-lg bg-blue-700 text-white  font-bold py-2'>Cadastrar Usuário</div>
        <div className="flex flex-wrap -mx-3 mb-6 py-4">
            <div className="w-full px-3">
            <label>Nome</label>
                <Input.Field
                id="nome"
                type={InputType.text}
                placeholder=""
                {...register('nome')}
                />
                   {errors.nome && <span>{errors.nome.message}</span>}

            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label>Email</label>
                <Input.Field
                id="email"
                type={InputType.text}
                placeholder=""
                {...register('email')}
                />
                 {errors.email && <span>{errors.email.message}</span>}
            
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label>Senha</label>
                <Input.Field
                id="senhaHas"
                type={InputType.password}
                placeholder=""
                {...register('senhaHas')}
                />
                 {errors.senhaHas && <span>{errors.senhaHas.message}</span>}
            
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label>Confirmar Senha</label>
                <Input.Field
                id="confirmsenhaHas"
                type={InputType.password}
                placeholder=""
                {...register('confirmsenhaHas')}
                />
                 {errors.confirmsenhaHas && <span>{errors.confirmsenhaHas.message}</span>}
            
            </div>
        </div>
        <div className='flex-wrap -mx-3 hidden'>
                  <div className='w-full'>              
                      <h3>Tenant</h3>
                      <Input.Field                    
                      id='tenant'
                      value={obj.tenant}
                      type={InputType.number}                     
                      />
                  
                  </div>
              </div>     
        <div className="flex items-center justify-start">         
            <Button>Enviar</Button>        
        </div>      
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 py-4">
                                    Deseja Fazer Login?
                 <Link className="text-blue-700 hover:underline dark:text-blue-500" 
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