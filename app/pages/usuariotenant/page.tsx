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
import mypassword from "../../../public/notebookblue.svg"
import Image, { StaticImageData } from 'next/image'
import { destroyCookie, setCookie } from "nookies";
import { useState } from "react";

//validando campos
const UsuarioSchema=z.object({
    nome:z.string().min(3,'Informe o nome'),
    email:z.string().email(),
    senhaHas:z.string().min(6,'precisa de no minímo 6 caracteres'),
    confirmsenhaHas:z.string().min(6,'Confirme Senha'),
    admin:z.boolean()

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
  const [check, setCheck] = useState(false);
  const handleChecked = () => {
    setCheck(!check);
  }
  
async function CadastrarUsuario(data:UsuarioFormData )
{   debugger;
  

  try {
    //console.log(data)
    if (data.senhaHas===data.confirmsenhaHas) {
    await postUsuarioTenant({
    
        nome:data.nome,
        email:data.email,
        senhaHas:data.senhaHas,
        tenant:obj.tenant,
        admin:data.admin
                      
    })
    reset()
    alert("Cadastrado com sucesso!!")
  }else{
    alert("Senhas não Conferem!!")
  }
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
function handleClick() {     
  // Destroy
  setCookie(null, 'token','')
  setCookie(null, '_id','')
}

    return (
    <>
    
  
<Nav usuarioLogado={obj.nome} />
<div className='flex items-center justify-center p-4 sm:ml-6 w-screen h-screen'>
<div className="grid sm:grid-cols-2 xs:grid-cols-1">
         <span>
   <Image src={mypassword} alt={""} width={200} height={100} className="hover:-translate-x-1"></Image>
   <p className="text-2xl text-blue-900  font-bold ">Compatilhe as Tarefas!!</p>
   </span>
         
      <form onSubmit={handleSubmit(CadastrarUsuario)}  className="w-full max-w-lg p-5">

        <div className='flex flex-wrap -mx-3 mb-6 py-2 justify-center border-b-4 border-blue-900 '>       
          <span className="text-center text-blue-900 text-2xl font-bold ">
            Cadastro Usuário
          </span>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
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
                placeholder="Confirma Senha"
                {...register('confirmsenhaHas')}
                />
                {errors.confirmsenhaHas && <span>{errors.confirmsenhaHas.message}</span>}            
            </div>
        </div>    
        <div className="flex items-center justify-start">         
            <Button>Enviar</Button>        
          <div className="flex items-center ps-3">
                      <Input.Field
                          key={'admin'}
                          className="w-4 h-4 "
                          id="ter"
                          type={InputType.checkbox}
                          {...register('admin')}
                          onChange={handleChecked}
                          checked={check}                       
                          />
                          {errors.admin && <span>{errors.admin.message}</span>}   
                                                                            
                      <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administrador</label>
          </div>   
        </div>      
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 py-4">
                  Cadastro compartilhado !
            <Link className="text-blue-900 hover:underline dark:text-blue-500" 
                  onClick={handleClick}
                  href={'/pages/login'}
                  >Logar?
            </Link>
        </div>
  </form>
    </div>
    </div> 
  
    </>
    )
}