
'use client'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/app/api/loginUser";
import { Button } from "@/app/components/Button";
import { Input, InputType } from "@/app/components/Input";
import Contents from "@/app/components/Contents/Contents";
import { useRouter } from 'next/navigation'
import { setCookie } from "nookies";
import { HttpError } from "@/app/http";
import Link from "next/link";
import mypassword from "../../../public/notebookblue.svg"
import Image, { StaticImageData } from 'next/image'

//validando campos

const LoginSchema=z.object({
    email:z.string().email('Formato do email inválido'),
    password:z.string().min(6,'Senha precisa de no minímo 6 caracteres'),
    
     })
     //tipando o objeto de validação
type LoginFormData=z.infer<typeof LoginSchema>

export default function Login(){
   //criando constantes de validação
   const signUpForm = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  })
  const router = useRouter();
const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = signUpForm


async function acessLogin(data:LoginFormData )
{   
  try {
    debugger;
    const token=await loginUser({
    
        email:data.email,
        senhaHas:data.password,        
    })
    if (token!=null) {
      setCookie(undefined, 'token', token, {
        maxAge: 50*1000,
        path: '/',
      })
     /// setUser(jdecode<UserData>(token))
      reset(),
      router.push('/pages/homepage')
    }else{
      alert('Login Invalido')
      reset()
      router.push('/')
    }
  
  }
  catch (err) {
    if (err instanceof HttpError) {
      alert({ message: err.message, type: 'error' })
      await router.push('/')
    } else {
      alert({
        message: 'Não foi possível realizar o login.',
        type: 'error',
      })
      await router.push('/')
    }
  }

}
    return (

    
   
     <div className='flex items-center justify-center p-4 sm:ml-6 w-screen h-screen '>
     
     <div className="grid sm:grid-cols-2 xs:grid-cols-1">
         <span>
   <Image src={mypassword} alt={""} width={200} height={100} className="hover:-translate-x-1"></Image>
   <p className="text-2xl text-blue-900  font-bold ">Ola!!</p>
   </span>
     
        <form onSubmit={handleSubmit(acessLogin)} className='w-full max-w-lg p-5'>
        <div className='flex flex-wrap -mx-3 mb-6 py-2 justify-center border-b-4 border-blue-900 '>
       
       <span className="text-center text-blue-900 text-2xl font-bold  ">
                       Acessar
                       </span>
     </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                   
                        
                        <Input.Field
                        id="email"
                        type={InputType.email}
                        placeholder="Email"
                        {...register('email')}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                        <p className="text-gray-600 text-xs italic">Exemplo: mariajose@hotmail.com</p>
                    </div>
                </div>
                <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full px-3'>
                       
                        <Input.Field
                        id='password'
                        type={InputType.password}
                        placeholder="Senha******"
                        {...register('password')}
                        />
                        {errors.password && <span>{errors.password.message}</span>}
                        <p className='text-gray-600 text-xs italic'>Exemplo :#ffcd37</p>
                    </div>
                </div>
                <div className='flex items-center justify-center py-4'>
                
                    <Button>Enviar</Button>
                
                </div>        
                <a href="/Acess/forgout" className="text-sm text-blue-900 hover:underline ml-auto dark:text-blue-900">Esqueceu a Senha?</a>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300 py-4">
                                    Deseja se Cadastrar?
                 <Link className="text-blue-500 hover:underline dark:text-blue-900" 
                  href={'/pages/usuario'}
                 >
                cadastrar</Link>
                        </div>
        </form>
    
 
      </div>
      
      </div>     
     
 
   
    )
    
}




